<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, default: '' },
  // 图标本地路径（/img/<file>），留空则使用首字母 fallback
  icon: { type: String, default: '' },
  // 徽标文字（右上角小标签，如「校内」「推荐」）
  badge: { type: String, default: '' }
})

const iconFailed = ref(false)

const iconUrl = computed(() => props.icon)

// Fallback：首字母
const initial = computed(() => {
  const t = (props.title || '').trim()
  return t ? t.charAt(0).toUpperCase() : '?'
})

function onIconError() { iconFailed.value = true }

// 本地图标理论上不会失败，但加 naturalWidth 校验以防文件损坏
function onIconLoad(e) {
  const img = e.target
  if (!img || img.naturalWidth === 0 || img.naturalHeight === 0) {
    iconFailed.value = true
  }
}
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
        @load="onIconLoad"
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