<template>
  <div class="input-container">
    <Icon v-if="iconName" :name="iconName" class="input-icon" />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      v-bind="$attrs"
      class="input-class"
      :class="['input-class', iconName ? 'pl-8' : 'pl-2']"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  iconName: {
    type: String,
    default: '',
  },
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}
</script>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}
.input-class {
  @apply h-10 border-1 rounded-lg outline-none appearance-none pr-2;
  @apply dark:border-bp-blue-800-light dark:bg-bp-blue-900-light;
  @apply bg-bp-yellow-50-light border-bp-yellow-700-light;
}

.input-class:hover,
.input-class:focus {
  @apply border-bp-yellow-800-light;
  @apply dark:border-bp-blue-900-light;
}
.input-icon {
  position: absolute;
  left: 0.75rem;
  pointer-events: none;
  color: var(--color-icon, #6b7280);
}
</style>
