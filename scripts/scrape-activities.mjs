import { mkdir, rm, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const SOURCE_URL = 'http://cipp.ustb.edu.cn/app.IAManage/index.jsp?m=iamanage&c=apply&a=activityCalander'
const SOURCE_ORIGIN = new URL(SOURCE_URL).origin
const DATA_FILE = join(process.cwd(), 'docs', '.vitepress', 'data', 'activities.js')
const IMAGE_DIR = join(process.cwd(), 'docs', 'public', 'activity')
const USER_AGENT = 'USTB-All-In-One activity sync (+https://github.com/LYOfficial/USTB-All-In-One)'

function chinaDate(offsetDays = 0) {
  const now = new Date(Date.now() + 8 * 60 * 60 * 1000 + offsetDays * 24 * 60 * 60 * 1000)
  const year = now.getUTCFullYear()
  const month = String(now.getUTCMonth() + 1).padStart(2, '0')
  const day = String(now.getUTCDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function chinaTimestamp() {
  const now = new Date(Date.now() + 8 * 60 * 60 * 1000)
  return `${now.toISOString().slice(0, 19)}+08:00`
}

function decodeHtml(value = '') {
  const named = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' '
  }
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match)
}

function cleanText(value = '') {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim()
}

function matchText(source, pattern) {
  return cleanText(source.match(pattern)?.[1] ?? '')
}

function eventDate(value) {
  const match = value.match(/(20\d{2})年(\d{1,2})月(\d{1,2})日/)
  if (!match) return ''
  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
}

function parseActivities(html) {
  const sections = html.split(/<div\s+class=["']mian_hg["']\s*>/i).slice(1)
  const activities = []

  for (const section of sections) {
    const id = section.match(/showActivityInfo&amp;aid=(\d+)|showActivityInfo&aid=(\d+)/i)
    const activityId = id?.[1] ?? id?.[2]
    const title = matchText(section, /<h3\b[^>]*>([\s\S]*?)<\/h3>/i)
    if (!activityId || !title) continue

    const paragraphs = [...section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => match[1])
    const description = cleanText(paragraphs[0] ?? '').replace(/^活动简介[：:]\s*/, '')
    const time = matchText(section, /<span\s+class=["']p_span1["'][^>]*>([\s\S]*?)<\/span>/i)
    const location = matchText(section, /<span\s+class=["']p_span2["'][^>]*>([\s\S]*?)<\/span>/i)
    const imageSource = section.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*showActivityInfo/i)?.[1] ?? ''
    const date = eventDate(time)

    activities.push({
      id: activityId,
      title,
      description,
      time,
      location,
      date,
      imageSource: imageSource ? new URL(imageSource, SOURCE_URL).href : '',
      url: `${SOURCE_ORIGIN}/app.IAManage/index.jsp?m=iamanage&c=apply&a=showActivityInfo&aid=${activityId}`
    })
  }

  return [...new Map(activities.map((item) => [item.id, item])).values()]
}

async function downloadImage(activity) {
  if (!activity.imageSource) return ''

  const sourceExt = extname(new URL(activity.imageSource).pathname).toLowerCase()
  const extension = ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(sourceExt) ? sourceExt : '.jpg'
  const filename = `${activity.id}${extension}`
  const response = await fetch(activity.imageSource, {
    headers: { 'user-agent': USER_AGENT, referer: SOURCE_URL },
    signal: AbortSignal.timeout(20_000)
  })
  if (!response.ok) throw new Error(`Image ${activity.id}: HTTP ${response.status}`)
  await writeFile(join(IMAGE_DIR, filename), Buffer.from(await response.arrayBuffer()))
  return `/activity/${filename}`
}

async function main() {
  const response = await fetch(SOURCE_URL, {
    headers: { 'user-agent': USER_AGENT, accept: 'text/html,application/xhtml+xml' },
    signal: AbortSignal.timeout(30_000)
  })
  if (!response.ok) throw new Error(`Activity calendar: HTTP ${response.status}`)

  const html = await response.text()
  if (!html.includes('活动日历') || !html.includes('activityCalander')) {
    throw new Error('Activity calendar returned an unexpected page; existing data was kept')
  }

  const start = chinaDate()
  const end = chinaDate(6)
  const parsed = parseActivities(html)
    .filter((item) => !item.date || (item.date >= start && item.date <= end))
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`, 'zh-CN'))

  await rm(IMAGE_DIR, { recursive: true, force: true })
  await mkdir(IMAGE_DIR, { recursive: true })

  const items = []
  for (const activity of parsed) {
    let image = ''
    try {
      image = await downloadImage(activity)
    } catch (error) {
      console.warn(error.message)
    }
    items.push({
      id: activity.id,
      title: activity.title,
      description: activity.description,
      time: activity.time,
      location: activity.location,
      image,
      url: activity.url
    })
  }

  const data = {
    sourceUrl: SOURCE_URL,
    updatedAt: chinaTimestamp(),
    range: { start, end },
    items
  }
  const output = `// Generated by scripts/scrape-activities.mjs. Do not edit activity entries manually.\nexport default ${JSON.stringify(data, null, 2)}\n`
  await writeFile(DATA_FILE, output, 'utf8')
  console.log(`Synced ${items.length} activities for ${start} through ${end}`)
}

export { eventDate, parseActivities }

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
