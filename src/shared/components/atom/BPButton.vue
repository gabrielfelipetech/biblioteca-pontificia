<template>
  <button
    :class="[
      'button',
      `button--theme-${buttonTheme}`,
      `button--icon-${iconPosition}`,
    ]"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon
      v-if="iconName && iconPosition === 'left'"
      :name="iconName"
      class="button__icon button__icon--left"
    />
    <p v-if="buttonText" class="button__text">{{ buttonText }}</p>
    <Icon
      v-if="iconName && iconPosition === 'right'"
      :name="iconName"
      class="button__icon button__icon--right"
    />
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);
const props = defineProps({
  buttonText: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: '',
  },
  buttonTheme: {
    type: String as () => 'primary' | 'secondary' | 'tertiary',
    default: 'primary',
  },
  iconPosition: {
    type: String as () => 'left' | 'right',
    default: 'left',
  },
});
const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<style lang="scss" scoped>
.button {
  @apply min-h-10;
  &--theme-primary {
    @apply rounded-md border-1;
    @apply bg-bp-blue-700-light text-bp-yellow-100-light border-bp-yellow-700-light;
    @apply dark:bg-bp-yellow-100-light dark:text-bp-blue-800-light dark:border-bp-blue-100-light;
    &:hover {
      @apply bg-bp-blue-800-light text-bp-yellow-50-light border-bp-yellow-50-light;
      @apply dark:bg-bp-yellow-200-light dark:text-bp-blue-700-light dark:border-bp-blue-900-light;
    }

    &:active {
    }
  }

  &--theme-secondary {
    &:hover {
    }

    &:active {
    }
  }

  &--theme-tertiary {
    &:hover {
    }

    &:active {
    }
  }

  &:disabled {
  }
}

.button__text {
  font-size: 1rem;
  color: inherit;
}
</style>
