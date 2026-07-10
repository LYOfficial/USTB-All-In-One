<script setup>
defineProps({
  // 可选副标题（如条目数 "共 10 个"），渲染在 markdown ## 标题旁边
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <section class="site-section">
    <div v-if="subtitle" class="site-section-subtitle">{{ subtitle }}</div>
    <SiteGrid>
      <slot />
    </SiteGrid>
  </section>
</template>