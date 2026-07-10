<script setup>
defineProps({
  // 紧凑模式：用于无备注的列表（学院 / 实验室等）
  compact: { type: Boolean, default: false }
})
</script>

<template>
  <div class="app-grid" :class="{ 'app-grid--compact': compact }">
    <slot />
  </div>
</template>