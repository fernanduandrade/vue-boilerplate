<script setup lang="ts">
import Footer from '@/layout/Footer/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <hr class="footer--side" />
    <h1 class="footer--title">
      &copy; {{ t('rights') }}
      <a 
        class="footer--link"
        href="https://linktr.ee/fernanduandrade"
        target="_blank"
        rel="noopener noreferrer"
      >
      Fernando Andrade
      </a>
    </h1>
  </footer>
</template>