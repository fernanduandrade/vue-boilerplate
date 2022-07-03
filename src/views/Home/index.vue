<script setup lang="ts">
import Button from '../../components/Button/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <div class="wrapper">
    <Button
      :primary="true"
      :label="t('button.go')"
      :size="'large'"
      :backgroundColor="'#333'"
    />
  </div>
</template>

<style scopred lang="scss">
@import './scss/main.scss'
</style>