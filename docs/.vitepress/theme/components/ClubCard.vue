<script setup>
defineProps({
  name: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <article class="club-card">
    <div class="club-card-header">
      <h3>{{ name }}</h3>
      <span class="club-code">{{ code }}</span>
    </div>
    <p>{{ description }}</p>
  </article>
</template>
