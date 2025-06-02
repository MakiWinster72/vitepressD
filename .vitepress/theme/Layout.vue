<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Footer />
    </template>
    <template #aside-outline-before>
      <div class="outline-before"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
</script>

<style>
.outline-before {
  margin-top: 16px;
}
</style> 