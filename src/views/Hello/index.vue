<script setup lang="ts">
import Button from '@/components/Button/index.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n();
const goBack = async () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="wrapper">
    <p class="paragraph">{{t('greetings.hi', { name: 'Nando'})}} 😉</p>
    <Button
      @click="goBack"
      :primary="true"
      :label="t('button.back')"
      :size="'large'"
      :backgroundColor="'#333'"
    />
  </div>
</template>

<style lang="scss">
@import './scss/main.scss'
</style>