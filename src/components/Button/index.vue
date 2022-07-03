<script lang="ts">
import './scss/component.scss';
import { reactive, computed, ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'button': true,
        'button--primary': props.primary,
        'button--secondary': !props.primary,
        [`button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      })),
      onHoverStyle: computed(() => ({
        backgroundColor: props.backgroundColor,
        opacity: '0.8'
      })),
      onClick() {
        emit('click');
      },
      onHover: ref(true)
    }
  },
});
</script>

<template>
  <button
    type="button"
    :class="classes"
    @mouseover="onHover=!onHover"
    @mouseleave="onHover=!onHover"
    @click="onClick"
    :style="onHover ? style : onHoverStyle"
    >
      {{ label }}
    </button>
</template>