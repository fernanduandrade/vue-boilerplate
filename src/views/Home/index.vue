<script setup lang="ts">
import Button from '../../components/Button/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <div class="wrapper">
    <h1 class="title">{{ t('intro') }}</h1>
    <Button
      :primary="true"
      :label="t('button.go')"
      :size="'large'"
      :backgroundColor="'#5B21B6'"
    />
  </div>
</template>

<style lang="scss">
@import './scss/base.scss'
</style>