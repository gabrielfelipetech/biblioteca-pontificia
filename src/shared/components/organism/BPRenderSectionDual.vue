<script setup lang="ts">
import BPRenderBlock from './BPRenderBlock.vue';
import type { Section, Block, Lang } from '../../types/content';

const props = defineProps<{ section: Section; l1: Lang; l2: Lang }>();

const hasText = (b: Block, l: Lang): boolean =>
  !!b.text?.[l] || (b.children?.some((c) => hasText(c as Block, l)) ?? false);

const sameText = (b: Block, a: Lang, bLang: Lang) =>
  (b.text?.[a] ?? null) !== null && b.text?.[a] === b.text?.[bLang];
</script>

<template>
  <section class="mb-8 contents">
    <h2
      v-if="section.title?.[l1] || section.title?.[l2]"
      class="col-span-2 text-xl font-semibold"
    >
      {{ section.title?.[l1] ?? section.title?.[l2] }}
    </h2>

    <template v-for="(b, i) in section.blocks" :key="i">
      <div
        v-if="!hasText(b, l1) || !hasText(b, l2) || sameText(b, l1, l2)"
        class="col-span-2"
      >
        <BPRenderBlock :block="b" :lang="hasText(b, l1) ? l1 : l2" />
      </div>

      <template v-else>
        <div><BPRenderBlock :block="b" :lang="l1" /></div>
        <div><BPRenderBlock :block="b" :lang="l2" /></div>
      </template>
    </template>
  </section>
</template>
