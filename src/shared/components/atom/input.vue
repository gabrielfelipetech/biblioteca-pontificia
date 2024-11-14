<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    class="input-class"
    @input="onInput"
  >
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

type BaseInputProps = {
  modelValue: string | number;
  placeholder?: string;
  type?: string;
};

type BaseInputEmits = {
  (e: 'update:modelValue', value: string | number): void;
};

defineProps<BaseInputProps>();
const emits = defineEmits<BaseInputEmits>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}
</script>

<style scoped>
.input-class {
  @apply h-10 dark:border-gold-deep dark:bg-blue-medium border-1 rounded-lg bg-gold-light border-blue-deep outline-none appearance-none text-base text-blue-deep dark:text-gold-deep px-2;
}
.input-class:hover,
.input-class:focus {
  @apply border-black dark:border-gold-soft;
  @apply text-blue-medium dark:text-gold-medium
}
</style>
