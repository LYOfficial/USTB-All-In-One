<script setup>
import { onMounted, ref } from 'vue'

const count = ref(null)
const failed = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('/api/page-view', {
      method: 'POST',
      headers: { Accept: 'application/json' }
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    if (!Number.isSafeInteger(data.count) || data.count < 0) {
      throw new Error('Invalid page view count')
    }

    count.value = data.count
  } catch (error) {
    failed.value = true
    console.warn('Failed to load page view count:', error)
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
