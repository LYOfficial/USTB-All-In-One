<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, default: '' },
  icon: { type: String, default: '' }
})

const iconFailed = ref(false)

// 从 URL 抽取主机名
const host = computed(() => {
  try {
    return new URL(props.url).host
  } catch {
    return ''
  }
})

// 自动尝试的图标 URL 候选（按顺序）
const iconCandidates = computed(() => {
  const list = []
  if (props.icon) list.push(props.icon)
  if (host.value) {
    list.push(`https://${host.value}/favicon.ico`)
    list.push(`https://${host.value}/favicon.png`)
  }
  return list
})

// 备用方案：取首字符做渐变方块
const initial = computed(() => {
  const t = (props.title || '').trim()
  return t ? t.charAt(0) : '?'
})

function onIconError() {
  iconFailed.value = true
}

const iconUrl = computed(() => iconCandidates.value[0] || '')
</script>

<template>
  <a class="app-card" :href="url" target="_blank" rel="noopener noreferrer">
    <div class="app-card-icon">
      <img
        v-if="iconUrl && !iconFailed"
        :src="iconUrl"
        :alt="title"
        loading="lazy"
        @error="onIconError"
      />
      <span v-else class="app-card-icon-fallback">{{ initial }}</span>
    </div>
    <div class="app-card-body">
      <div class="app-card-title">{{ title }}</div>
      <div class="app-card-desc" v-if="desc">{{ desc }}</div>
    </div>
  </a>
</template>