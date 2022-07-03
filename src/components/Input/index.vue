<script lang="ts">
import './scss/component.scss';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    props = reactive(props);
    return {
      placeholder: props.placeholder
    }
  }
})
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="input"
  >
</template>