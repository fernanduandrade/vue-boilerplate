<script lang="ts">
import './scss/component.scss';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    } 
  },
  setup(props, {emit}) {
    props = reactive(props);
    return {
      placeholder: props.placeholder,
    }
  }
})
</script>

<template>
  <input
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    type="text"
    :placeholder="placeholder"
    class="input"
  >
</template>