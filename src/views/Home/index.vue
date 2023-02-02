<script setup lang="ts">
import Input from '@/components/Input/index.vue'
import Button from '@/components/Button/index.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { store } from '../../store/user'
import { ref } from 'vue';
const router = useRouter()
const { t } = useI18n();
const name = ref('')
const onSubmit = async () => {
  if(name.value) {
    store.dispatch('setUser', name.value)
    router.push({ path: '/hello' })
  }
}
</script>

<template>
  <div class="wrapper">
    <Input
      v-on:keyup.enter="onSubmit"
      :placeholder="t('intro.enter-name')"
      v-model="name"
    />
    <Button
      @click="onSubmit"
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