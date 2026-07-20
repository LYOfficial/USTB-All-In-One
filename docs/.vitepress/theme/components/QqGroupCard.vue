<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  number: { type: String, required: true },
  name: { type: String, required: true },
  remark: { type: String, default: '' },
  joinUrl: { type: String, required: true }
})

const avatarFailed = ref(false)
const avatarUrl = computed(() =>
  avatarFailed.value
    ? '/icon/ustb.png'
    : `https://p.qlogo.cn/gh/${props.number}/${props.number}/100`
)
</script>

<template>
  <a
    class="site-card qq-group-card"
    :href="joinUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`申请加入 ${name}（QQ 群 ${number}）`"
  >
    <div class="site-card-icon qq-group-avatar">
      <img
        :src="avatarUrl"
        :alt="`QQ 群 ${number} 头像`"
        loading="lazy"
        @error="avatarFailed = true"
      />
    </div>
    <div class="site-card-body">
      <div class="site-card-title">{{ name }}</div>
      <div class="site-card-desc">群号：{{ number }}</div>
      <div v-if="remark" class="qq-group-remark">{{ remark }}</div>
    </div>
    <span class="qq-group-action" aria-hidden="true">加入 →</span>
  </a>
</template>
