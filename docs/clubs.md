---
title: 校内社团
aside: false
---

<script setup>
import clubCategories from './.vitepress/data/clubs.js'

const category = (id) => clubCategories.find((item) => item.id === id)
</script>

## A类 · 思想 {#clubs-a}

<div class="club-category-meta">共 {{ category('a').clubs.length }} 个 · <a :href="category('a').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('a').clubs" :key="club.code" v-bind="club" /></div>

## B类 · 科学实践 {#clubs-b}

<div class="club-category-meta">共 {{ category('b').clubs.length }} 个 · <a :href="category('b').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('b').clubs" :key="club.code" v-bind="club" /></div>

## C类 · 学术知识 {#clubs-c}

<div class="club-category-meta">共 {{ category('c').clubs.length }} 个 · <a :href="category('c').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('c').clubs" :key="club.code" v-bind="club" /></div>

## D类 · 创新创业 {#clubs-d}

<div class="club-category-meta">共 {{ category('d').clubs.length }} 个 · <a :href="category('d').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('d').clubs" :key="club.code" v-bind="club" /></div>

## E类 · 文化 {#clubs-e}

<div class="club-category-meta">共 {{ category('e').clubs.length }} 个 · <a :href="category('e').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('e').clubs" :key="club.code" v-bind="club" /></div>

## F类 · 传媒 {#clubs-f}

<div class="club-category-meta">共 {{ category('f').clubs.length }} 个 · <a :href="category('f').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('f').clubs" :key="club.code" v-bind="club" /></div>

## G类 · 艺术 {#clubs-g}

<div class="club-category-meta">共 {{ category('g').clubs.length }} 个 · <a :href="category('g').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('g').clubs" :key="club.code" v-bind="club" /></div>

## H类 · 竞技 {#clubs-h}

<div class="club-category-meta">共 {{ category('h').clubs.length }} 个 · <a :href="category('h').sourceUrl" target="_blank" rel="noopener noreferrer">查看原材料</a></div>
<div class="club-grid"><ClubCard v-for="club in category('h').clubs" :key="club.code" v-bind="club" /></div>
