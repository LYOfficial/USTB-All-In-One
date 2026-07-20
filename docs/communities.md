---
title: 同好社群
aside: false
---

<script setup>
import qqGroups from './.vitepress/data/qqGroups.js'
</script>

# 👥 同好社群

## QQ群列表 {#communities-groups}

<SiteSection :subtitle="`共 ${qqGroups.length} 个`">
  <QqGroupCard
    v-for="group in qqGroups"
    :key="group.number"
    :number="group.number"
    :name="group.name"
    :remark="group.remark"
    :join-url="group.joinUrl"
  />
</SiteSection>
