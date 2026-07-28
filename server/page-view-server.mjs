import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { createServer } from 'node:http'

const port = Number.parseInt(process.env.PAGE_VIEW_PORT || '3000', 10)
const dataFile = process.env.PAGE_VIEW_DATA_FILE || '/data/page-views.json'

let updateQueue = Promise.resolve()

async function readCount() {
  try {
    const data = JSON.parse(await readFile(dataFile, 'utf8'))
    return Number.isSafeInteger(data.count) && data.count >= 0 ? data.count : 0
  } catch (error) {
    if (error.code === 'ENOENT') return 0
    throw error
  }
}

async function writeCount(count) {
  await mkdir(dirname(dataFile), { recursive: true })
  const temporaryFile = `${dataFile}.tmp`
  await writeFile(temporaryFile, `${JSON.stringify({ count })}\n`, 'utf8')
  await rename(temporaryFile, dataFile)
}

function incrementCount() {
  const update = updateQueue.then(async () => {
    const count = (await readCount()) + 1
    await writeCount(count)
    return count
  })

  updateQueue = update.catch(() => {})
  return update
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  })
  response.end(JSON.stringify(body))
}

createServer(async (request, response) => {
  if (request.url === '/health' && ['GET', 'HEAD'].includes(request.method)) {
    if (request.method === 'HEAD') {
      response.writeHead(200, { 'Cache-Control': 'no-store' })
      response.end()
    } else {
      sendJson(response, 200, { status: 'ok' })
    }
    return
  }

  if (request.url !== '/page-view') {
    sendJson(response, 404, { error: 'Not found' })
    return
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    sendJson(response, 405, { error: 'Method not allowed' })
    return
  }

  try {
    sendJson(response, 200, { count: await incrementCount() })
  } catch (error) {
    console.error('Failed to update page view count:', error)
    sendJson(response, 500, { error: 'Failed to update page view count' })
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Page view server listening on 127.0.0.1:${port}`)
})
