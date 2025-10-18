<script setup lang="ts">
import type { Block, Lang } from '../../types/content';
const props = defineProps<{ block: Block; lang: Lang; fallback?: Lang }>();
const t = (m?: Record<string, string>) =>
  m?.[props.lang] ?? (props.fallback ? m?.[props.fallback] : undefined);
</script>

<template>
  <component
    :is="
      {
        heading: 'h' + (block.level || 2),
        paragraph: 'p',
        quote: 'blockquote',
        verse: 'pre',
        hymn: 'pre',
        prayer: 'p',
        antiphon: 'em',
        rubric: 'p',
        response: 'p',
        separator: 'hr',
        image: 'img',
        reference: 'p',
        list: 'ul',
        'list-item': 'li',
        table: 'div',
        section: 'div',
      }[block.type] || 'div'
    "
    v-bind="
      block.type === 'image'
        ? { src: block.attrs?.src, alt: t(block.text) || '' }
        : {}
    "
    class="block"
  >
    <template v-if="block.type !== 'image' && block.text">
      {{ t(block.text) }}
    </template>
    <template v-if="block.children?.length">
      <RenderBlock
        v-for="(c, i) in block.children"
        :key="i"
        :block="c"
        :lang="lang"
        :fallback="fallback"
      />
    </template>
  </component>
</template>
