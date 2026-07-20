---
title: 同好社群
aside: false
---

<script setup>
import qqGroups from './.vitepress/data/qqGroups.js'
</script>

<style>
.page-nav-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 1.5rem;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.page-nav-strip a {
  flex: 1 1 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.page-nav-strip a:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.page-nav-strip a.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.page-lead {
  font-size: 1.02rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
}
</style>

<div class="page-nav-strip">
  <a href="/official">🏫 学校官方网站</a>
  <a href="/tools">🛠️ 开源工具</a>
  <a href="/materials">📚 学习资料</a>
  <a href="/communities" class="is-active">👥 同好社群</a>
</div>

<p class="page-lead">
  收录北科同学创建的兴趣交流 QQ 群。群头像通过 QQ 官方群头像接口加载，加群入口来自原始群二维码。
</p>

::: tip 💡 使用提示
点击群卡片会打开 QQ 官方加群页面；在手机上使用时可直接唤起 QQ 申请加入。
:::

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
