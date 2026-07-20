<script setup>
import { useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import VPBackdrop from 'vitepress/dist/client/theme-default/components/VPBackdrop.vue'
import VPContent from 'vitepress/dist/client/theme-default/components/VPContent.vue'
import VPFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSidebar from 'vitepress/dist/client/theme-default/components/VPSidebar.vue'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import {
  useCloseSidebarOnEscape,
  useSidebar
} from 'vitepress/dist/client/theme-default/composables/sidebar.js'

const {
  hasSidebar,
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()
const slots = useSlots()
const heroImageSlotExists = computed(() => !!slots['home-hero-image'])

provide('hero-image-slot-exists', heroImageSlotExists)

function toggleSidebar() {
  if (isSidebarOpen.value) closeSidebar()
  else openSidebar()
}
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="Layout" :class="frontmatter.pageClass">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />

    <VPNav>
      <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
      <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
      <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
      <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
      <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
      <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
    </VPNav>

    <button
      v-if="hasSidebar"
      class="mobile-sidebar-toggle"
      :class="{ open: isSidebarOpen }"
      type="button"
      :aria-expanded="isSidebarOpen"
      aria-controls="VPSidebarNav"
      :aria-label="isSidebarOpen ? '折叠侧栏' : '展开侧栏'"
      @click="toggleSidebar"
    >
      <span aria-hidden="true">{{ isSidebarOpen ? '‹' : '›' }}</span>
    </button>

    <VPSidebar :open="isSidebarOpen">
      <template #sidebar-nav-before><slot name="sidebar-nav-before" /></template>
      <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
    </VPSidebar>

    <VPContent>
      <template #page-top><slot name="page-top" /></template>
      <template #page-bottom><slot name="page-bottom" /></template>

      <template #not-found><slot name="not-found" /></template>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
      <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>
      <template #doc-top><slot name="doc-top" /></template>
      <template #doc-bottom><slot name="doc-bottom" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent>

    <VPFooter />
    <slot name="layout-bottom" />
  </div>
  <Content v-else />
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mobile-sidebar-toggle {
  display: none;
}

@media (max-width: 959px) {
  .mobile-sidebar-toggle {
    position: fixed;
    top: 50%;
    left: 0;
    z-index: calc(var(--vp-z-index-sidebar) + 1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 72px;
    padding: 0;
    border: 1px solid var(--vp-c-divider);
    border-left: 0;
    border-radius: 0 10px 10px 0;
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg-soft);
    box-shadow: var(--vp-shadow-2);
    transform: translateY(-50%);
    transition: left 0.25s ease, color 0.2s ease, background-color 0.2s ease;
  }

  .mobile-sidebar-toggle:hover,
  .mobile-sidebar-toggle:focus-visible {
    color: var(--vp-c-brand-1);
    background: var(--vp-c-bg);
  }

  .mobile-sidebar-toggle:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }

  .mobile-sidebar-toggle.open {
    left: min(320px, calc(100vw - 64px));
  }

  .mobile-sidebar-toggle span {
    font-size: 24px;
    line-height: 1;
  }
}
</style>
