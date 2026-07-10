<script setup>
defineProps({
  // 章节标题（含 emoji）
  title: { type: String, required: true },
  // 副标题（如条目数）
  subtitle: { type: String, default: '' },
  // 是否紧凑卡片（无 desc）
  compact: { type: Boolean, default: false }
})
</script>

<template>
  <section class="ustb-section">
    <h2 class="ustb-section-title">
      <span>{{ title }}</span>
      <span v-if="subtitle" class="ustb-section-subtitle">{{ subtitle }}</span>
    </h2>
    <AppGrid :compact="compact">
      <slot />
    </AppGrid>
  </section>
</template>