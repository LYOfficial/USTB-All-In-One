<script setup>
import activities from '../../data/activities.js'
</script>

<template>
  <section class="weekly-activities" aria-labelledby="weekly-activities-title">
    <div class="weekly-activities-heading">
      <div>
        <p class="weekly-activities-kicker">CAMPUS EVENTS</p>
        <h2 id="weekly-activities-title">本周校园活动</h2>
        <p class="weekly-activities-subtitle">
          {{ activities.range.start }} 至 {{ activities.range.end }}
        </p>
      </div>
      <a :href="activities.sourceUrl" target="_blank" rel="noopener noreferrer">查看活动日历 →</a>
    </div>

    <div v-if="activities.items.length" class="activity-list">
      <a
        v-for="activity in activities.items"
        :key="activity.id"
        class="activity-card"
        :href="activity.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="activity-card-image">
          <img v-if="activity.image" :src="activity.image" :alt="activity.title" loading="lazy" />
          <div v-else class="activity-card-image-fallback" aria-hidden="true">USTB</div>
        </div>
        <div class="activity-card-content">
          <h3>{{ activity.title }}</h3>
          <p class="activity-card-description">{{ activity.description }}</p>
          <p class="activity-card-meta activity-card-time">
            <span aria-hidden="true">◷</span>{{ activity.time }}
          </p>
          <p class="activity-card-meta activity-card-location">
            <span aria-hidden="true">⌖</span>{{ activity.location || '地点待定' }}
          </p>
        </div>
      </a>
    </div>

    <div v-else class="activity-empty">
      <span aria-hidden="true">☕</span>
      <p>本周暂未发布活动，明天 00:30 会再次刷新。</p>
    </div>
  </section>
</template>
