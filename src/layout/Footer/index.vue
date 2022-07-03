<script setup lang="ts">
import Footer from '@/layout/Footer/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <hr class="footer--side" />
    <h1 class="footer--title">&copy; {{ t('intro') }}</h1>
  </footer>
</template>