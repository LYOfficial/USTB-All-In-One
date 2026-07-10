<script setup>
defineProps({
  // 紧凑模式：用于无 desc 的列表（如学院 / 实验室）
  compact: { type: Boolean, default: false }
})
</script>

<template>
  <div class="site-grid" :class="{ 'site-grid--compact': compact }">
    <slot />
  </div>
</template>