<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const contentRef = ref(null)
const sections = ref([])
const progress = ref(0)
const activeId = ref('')
const openSections = ref(new Set())
const mobileTocOpen = ref(false)
const isMobileLayout = ref(false)
let resizeObserver

function updateMobileLayout() {
  isMobileLayout.value = window.matchMedia('(max-width: 960px)').matches
  if (!isMobileLayout.value) mobileTocOpen.value = false
}

function headingText(element) {
  const clone = element.cloneNode(true)
  clone.querySelector('.header-anchor')?.remove()
  return clone.textContent.trim()
}

function buildOutline() {
  const outline = []
  let currentSection = null

  contentRef.value?.querySelectorAll('h2, h3').forEach((heading) => {
    if (!heading.id) return

    if (heading.tagName === 'H2') {
      currentSection = { id: heading.id, label: headingText(heading), items: [] }
      outline.push(currentSection)
      return
    }

    if (currentSection) {
      currentSection.items.push({ id: heading.id, label: headingText(heading) })
    }
  })

  sections.value = outline
  openSections.value = new Set(outline.slice(0, 1).map((section) => section.id))
}

function updateReadingState() {
  const content = contentRef.value
  if (!content) return

  const rect = content.getBoundingClientRect()
  const total = Math.max(1, content.scrollHeight - window.innerHeight * 0.7)
  const read = Math.max(0, -rect.top + window.innerHeight * 0.28)
  progress.value = Math.min(1, read / total)

  const focusLine = window.innerHeight * 0.3
  let current = ''
  content.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
    if (heading.getBoundingClientRect().top <= focusLine) current = heading.id
  })

  if (!current) current = sections.value[0]?.id || ''
  activeId.value = current

  const parent = sections.value.find((section) => section.id === current || section.items.some((item) => item.id === current))
  if (parent && !openSections.value.has(parent.id)) {
    openSections.value = new Set([...openSections.value, parent.id])
  }
}

async function recordGuideHelp() {
  try {
    await fetch('/api/page-view', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      keepalive: true
    })
  } catch {
    // 本地静态预览未配置统计接口时，目录跳转仍应正常可用。
  }
}

async function jumpTo(id) {
  void recordGuideHelp()

  if (isMobileLayout.value) {
    mobileTocOpen.value = false
    await nextTick()
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleSection(id) {
  const next = new Set(openSections.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openSections.value = next
}

function openMobileToc() {
  openSections.value = new Set(sections.value.map((section) => section.id))
  mobileTocOpen.value = true
}

watch(mobileTocOpen, (isOpen) => {
  if (!isMobileLayout.value) return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(async () => {
  await nextTick()
  buildOutline()
  updateReadingState()
  updateMobileLayout()
  window.addEventListener('scroll', updateReadingState, { passive: true })
  window.addEventListener('resize', updateReadingState)
  window.addEventListener('resize', updateMobileLayout)
  resizeObserver = new ResizeObserver(updateReadingState)
  if (contentRef.value) resizeObserver.observe(contentRef.value)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateReadingState)
  window.removeEventListener('resize', updateReadingState)
  window.removeEventListener('resize', updateMobileLayout)
  document.body.style.overflow = ''
  resizeObserver?.disconnect()
})
</script>

<template>
  <div class="guide-reader">
    <button
      class="guide-reader-mobile-toggle"
      type="button"
      :aria-expanded="mobileTocOpen"
      aria-controls="guide-reader-mobile-toc"
      aria-label="展开文章目录"
      @click="openMobileToc"
    >
      <span aria-hidden="true">☰</span>
      <span>目录</span>
    </button>

    <div v-if="mobileTocOpen" class="guide-reader-mobile-backdrop" @click="mobileTocOpen = false" />

    <div class="guide-reader-layout">
      <aside
        id="guide-reader-mobile-toc"
        class="guide-reader-sidebar"
        :class="{ 'is-open': mobileTocOpen }"
        aria-label="文章目录"
      >
        <div class="guide-reader-sidebar-inner">
          <div class="guide-reader-sidebar-top">
            <div class="guide-reader-sidebar-heading">
              <p class="guide-reader-sidebar-title">文章目录</p>
              <button class="guide-reader-mobile-close" type="button" aria-label="收起文章目录" @click="mobileTocOpen = false">×</button>
            </div>
            <div class="guide-reader-progress">
              <div class="guide-reader-progress-track" aria-hidden="true">
                <span class="guide-reader-progress-bar" :style="{ width: `${Math.round(progress * 100)}%` }" />
              </div>
              <span>阅读进度 {{ Math.round(progress * 100) }}%</span>
            </div>
          </div>

          <nav class="guide-reader-toc">
            <section
              v-for="(section, index) in sections"
              :key="section.id"
              class="guide-reader-toc-section"
              :class="{ 'is-active': activeId === section.id || section.items.some((item) => item.id === activeId) }"
            >
              <div class="guide-reader-toc-section-head">
                <button class="guide-reader-toc-section-link" type="button" @click="jumpTo(section.id)">
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                  <b>{{ section.label }}</b>
                </button>
                <button
                  v-if="section.items.length"
                  class="guide-reader-toc-toggle"
                  type="button"
                  :aria-expanded="openSections.has(section.id)"
                  :aria-label="`${openSections.has(section.id) ? '收起' : '展开'}${section.label}`"
                  @click="toggleSection(section.id)"
                >
                  {{ openSections.has(section.id) ? '⌄' : '›' }}
                </button>
              </div>
              <ul v-show="openSections.has(section.id)" v-if="section.items.length">
                <li v-for="item in section.items" :key="item.id">
                  <button
                    type="button"
                    :class="{ 'is-active': activeId === item.id }"
                    @click="jumpTo(item.id)"
                  >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
            </section>
          </nav>

          <footer class="guide-reader-sidebar-footer">
            <p>作者：chirifc</p>
            <a href="https://chirifc.github.io" target="_blank" rel="noreferrer">阅读原文</a>
            <span>本文已授权开源</span>
          </footer>
        </div>
      </aside>

      <main ref="contentRef" class="guide-reader-content">
        <slot />
      </main>
    </div>
  </div>
</template>
