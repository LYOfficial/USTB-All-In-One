<script setup>
defineProps({
  count: {
    type: Number,
    default: null
  },
  failed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="home-hero-actions" aria-label="首页操作">
    <div class="home-hero-action">
      <a class="home-hero-button brand" href="/official">探索应用</a>
    </div>
    <div class="home-hero-action">
      <a
        class="home-hero-button alt"
        href="https://github.com/LYOfficial/USTB-All-In-One"
        target="_blank"
        rel="noreferrer"
      >
        在 GitHub 上查看
      </a>
    </div>
    <div class="home-hero-action">
      <span
        class="home-hero-button page-view-count"
        :class="{ 'is-loading': count === null && !failed }"
        role="status"
        aria-live="polite"
      >
        已累计帮助 {{ failed ? '--' : (count ?? '…') }} 人
      </span>
    </div>
  </div>
</template>
