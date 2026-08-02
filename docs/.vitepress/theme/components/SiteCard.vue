<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, default: '' },
  // 手动图标优先；GitHub 项目留空时使用仓库所有者头像，其他网址使用 favicon.im
  icon: { type: String, default: '' },
  // 徽标文字（右上角小标签，如「校内」「推荐」）
  badge: { type: String, default: '' }
})

// 是否已尝试过主图标（手动 icon 或 favicon.im）。一旦失败，回退到 ustb.png
const primaryFailed = ref(false)

const remoteHost = computed(() => {
  try {
    const u = new URL(props.url)
    return u.hostname
  } catch {
    return ''
  }
})

const githubOwner = computed(() => {
  try {
    const u = new URL(props.url)
    if (u.hostname !== 'github.com' && u.hostname !== 'www.github.com') return ''
    return u.pathname.split('/').filter(Boolean)[0] || ''
  } catch {
    return ''
  }
})

// 主图标 URL：手动 icon > GitHub 所有者头像 > favicon.im > 默认 ustb.png
const primaryIcon = computed(() => {
  if (props.icon) return props.icon
  if (githubOwner.value) {
    return `https://github.com/${encodeURIComponent(githubOwner.value)}.png?size=96`
  }
  if (remoteHost.value) return `https://favicon.im/${remoteHost.value}`
  return ''
})

const iconUrl = computed(() => {
  return primaryFailed.value || !primaryIcon.value ? '/icon/ustb.png' : primaryIcon.value
})

const initial = computed(() => {
  const t = (props.title || '').trim()
  return t ? t.charAt(0).toUpperCase() : '?'
})

function onIconError() {
  primaryFailed.value = true
}

function onIconLoad(e) {
  const img = e.target
  // 文件损坏（naturalWidth=0）也按加载失败处理
  if (!img || img.naturalWidth === 0 || img.naturalHeight === 0) {
    primaryFailed.value = true
  }
}
</script>

<template>
  <a class="site-card" :href="url" target="_blank" rel="noopener noreferrer">
    <div class="site-card-icon">
      <img
        :src="iconUrl"
        :alt="title"
        loading="lazy"
        @error="onIconError"
        @load="onIconLoad"
      />
    </div>
    <div class="site-card-body">
      <div class="site-card-title">{{ title }}</div>
      <div v-if="desc" class="site-card-desc">{{ desc }}</div>
    </div>
    <span v-if="badge" class="site-card-badge">{{ badge }}</span>
  </a>
</template>
