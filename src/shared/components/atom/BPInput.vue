<template>
  <div class="input-container">

    <Icon v-if="iconName" :name="iconName" class="input-icon" />
    <input
            :type="type"
           :placeholder="placeholder"
           :value="modelValue"
           v-bind="$attrs"
           class="input-class"
           @input="onInput">
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
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
  @apply h-10 dark:border-gold-deep dark:bg-blue-medium border-1 rounded-lg bg-gold-light border-blue-deep outline-none appearance-none text-base text-blue-deep dark:text-gold-deep px-2;
}

.input-class:hover,
.input-class:focus {
  @apply border-black dark:border-gold-soft;
  @apply text-blue-medium dark:text-gold-medium;
}
.input-icon {
  position: absolute;
  left: 0.75rem; 
  pointer-events: none;
  color: var(--color-icon, #6B7280);
}
</style>
