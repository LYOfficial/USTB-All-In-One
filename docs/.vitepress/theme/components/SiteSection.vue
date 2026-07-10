<script setup>
defineProps({
  // 章节标题（含 emoji）
  title: { type: String, required: true },
  // 副标题（如条目数）
  subtitle: { type: String, default: '' },
  // 是否紧凑卡片
  compact: { type: Boolean, default: false }
})
</script>

<template>
  <section class="site-section">
    <h2 class="site-section-title">
      <span>{{ title }}</span>
      <span v-if="subtitle" class="site-section-subtitle">{{ subtitle }}</span>
    </h2>
    <SiteGrid :compact="compact">
      <slot />
    </SiteGrid>
  </section>
</template>