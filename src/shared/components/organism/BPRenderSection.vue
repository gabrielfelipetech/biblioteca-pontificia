<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Section, Block, Lang } from '../../types/content';
import BPRenderBlock from './BPRenderBlock.vue';

const props = defineProps<{
  section: Section;
  lang: Lang;
  fallback?: Lang;
  alt?: Lang;
}>();

const kidsOf = (b: Block) => (b as any).children ?? (b as any).blocks ?? [];
const hasText = (b: Block, l: Lang): boolean =>
  !!b.text?.[l] || kidsOf(b).some((c: Block) => hasText(c as Block, l));
const sectionHas = (s: Section, l: Lang): boolean =>
  !!s.title?.[l] || s.blocks.some((b) => hasText(b as Block, l));

const hasLa = computed(() => sectionHas(props.section, 'la' as Lang));
const hasAlt = computed(() =>
  props.alt ? sectionHas(props.section, props.alt) : false
);
const canToggle = computed(() => hasLa.value && hasAlt.value);

const current = ref<Lang>(props.lang);
watch(
  () => [props.section, props.lang, props.alt],
  () => {
    current.value = canToggle.value
      ? ('la' as Lang)
      : hasLa.value
        ? ('la' as Lang)
        : (props.alt ?? props.lang);
  },
  { immediate: true }
);

const t = (m?: Record<string, string>) =>
  m?.[current.value] ?? (props.fallback ? m?.[props.fallback] : undefined);
</script>

<template>
  <section class="mb-8">
    <div class="flex items-center justify-between">
      <h2 v-if="section.title" class="text-xl font-semibold">
        {{ t(section.title) }}
      </h2>
      <button
        v-if="canToggle"
        class="md:hidden text-xs px-2 py-1 border rounded"
        @click="current = current === 'la' ? (alt as Lang) : ('la' as Lang)"
      >
        {{ current === 'la' ? (alt as string).toUpperCase() : 'LA' }}
      </button>
    </div>

    <BPRenderBlock
      v-for="(b, i) in section.blocks"
      :key="i"
      :block="b"
      :lang="current"
      :fallback="fallback"
    />
  </section>
</template>
