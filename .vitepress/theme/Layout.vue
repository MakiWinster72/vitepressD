<template>
  <Layout>
    <template #doc-after>
      <Footer />
    </template>
    <template #aside-outline-before>
      <div class="outline-before"></div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'

const { Layout } = DefaultTheme
</script>

<style>
.outline-before {
  margin-top: 16px;
}
</style> 