<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section class="wrapper">
    <h1 class="title">{{ t('greetings.hi') }}</h1>
  </section>
</template>

<style lang="scss">
@import './scss/base.scss'
</style>