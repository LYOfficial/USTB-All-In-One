<script setup>
import { computed, ref } from 'vue'
import { DEFAULT_ICON_MAP } from '../icons-map.js'

const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, default: '' },
  // 显式覆盖图标 URL（缺省时按 host 自动查映射或 favicon）
  icon: { type: String, default: '' },
  // 徽标文字（右上角小标签，如「校内」「推荐」）
  badge: { type: String, default: '' }
})

const iconFailed = ref(false)

// 主机名
const host = computed(() => {
  try { return new URL(props.url).host } catch { return '' }
})

// 图标 URL 优先级：icon prop > 静态映射 > <host>/favicon.ico > fallback
const iconUrl = computed(() => {
  if (props.icon) return props.icon
  if (host.value && DEFAULT_ICON_MAP[host.value]) return DEFAULT_ICON_MAP[host.value]
  if (host.value) return `https://${host.value}/favicon.ico`
  return ''
})

// Fallback：首字母
const initial = computed(() => {
  const t = (props.title || '').trim()
  return t ? t.charAt(0).toUpperCase() : '?'
})

function onIconError() { iconFailed.value = true }
</script>

<template>
  <a class="site-card" :href="url" target="_blank" rel="noopener noreferrer">
    <div class="site-card-icon">
      <img
        v-if="iconUrl && !iconFailed"
        :src="iconUrl"
        :alt="title"
        loading="lazy"
        @error="onIconError"
      />
      <span v-else class="site-card-icon-fallback">{{ initial }}</span>
    </div>
    <div class="site-card-body">
      <div class="site-card-title">{{ title }}</div>
      <div v-if="desc" class="site-card-desc">{{ desc }}</div>
    </div>
    <span v-if="badge" class="site-card-badge">{{ badge }}</span>
  </a>
</template>