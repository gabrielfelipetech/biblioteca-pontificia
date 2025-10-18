<script setup lang="ts">
import type { Section, Lang } from '../../types/content';
import RenderBlock from './BPRenderBlock.vue';
const props = defineProps<{ section: Section; lang: Lang; fallback?: Lang }>();
const t = (m?: Record<string, string>) =>
  m?.[props.lang] ?? (props.fallback ? m?.[props.fallback] : undefined);
</script>

<template>
  <section class="mb-8">
    <h2 v-if="section.title" class="text-xl font-semibold">
      {{ t(section.title) }}
    </h2>
    <RenderBlock
      v-for="(b, i) in section.blocks"
      :key="i"
      :block="b"
      :lang="lang"
      :fallback="fallback"
    />
  </section>
</template>
