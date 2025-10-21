<script setup lang="ts">
import BPRenderSection from '@/shared/components/organism/BPRenderSection.vue';
import BPRenderSectionDual from '@/shared/components/organism/BPRenderSectionDual.vue';
import type { Lang, Section, Block } from '@/shared/types/content';
import { createError, useAsyncData, useHead, useRoute } from 'nuxt/app';
import { computed, ref, watch } from 'vue';
import { usePortableDoc } from '~/shared/composables/usePortableDoc';

const route = useRoute();
const segments = computed(() => {
  const s = route.params.slug as string[] | undefined;
  return Array.isArray(s) ? s : [];
});
const last = computed(() => segments.value[segments.value.length - 1] || '');

const {
  data: doc,
  status,
  pending,
  error,
} = await useAsyncData(
  'doc',
  () => (last.value ? $fetch(`/api/docs/${last.value}`) : null),
  { watch: [last] }
);

if (error.value)
  throw createError({ statusCode: 404, statusMessage: 'Não encontrado' });

watch(
  () => doc.value,
  () => {
    if (doc.value)
      useHead({ title: doc.value.meta?.title?.pt ?? doc.value.slug });
  },
  { immediate: true }
);

const hasText = (b: Block, l: Lang): boolean =>
  !!b.text?.[l] || (b.children?.some((c) => hasText(c as Block, l)) ?? false);

const blockComplete = (b: Block, l: Lang): boolean =>
  (!b.text || b.text[l] != null) &&
  (b.children ? b.children.every((c) => blockComplete(c as Block, l)) : true);

const sectionComplete = (s: Section, l: Lang): boolean =>
  (!s.title || s.title[l] != null) &&
  s.blocks.every((b) => blockComplete(b, l));

const docComplete = (l: Lang) =>
  !!doc.value &&
  doc.value.content.every((s) => sectionComplete(s as Section, l));

const docHasAny = (l: Lang) =>
  !!doc.value &&
  doc.value.content.some(
    (s) =>
      !!(s as Section).title?.[l] ||
      (s as Section).blocks.some((b) => hasText(b as Block, l))
  );

const langs = computed<Lang[]>(() => (doc.value?.langs as Lang[]) ?? []);
const hasLatin = computed(() => langs.value.includes('la'));
const livingLangs = computed<Lang[]>(() =>
  langs.value.filter((l) => l !== 'la')
);

const lang = ref<Lang>('la');
const alt = ref<Lang>('pt');

watch(
  () => doc.value,
  () => {
    lang.value = hasLatin.value ? 'la' : (langs.value[0] ?? 'pt');
    alt.value = (
      livingLangs.value.includes('pt')
        ? 'pt'
        : (livingLangs.value[0] ?? lang.value)
    ) as Lang;
  },
  { immediate: true }
);

const showDual = computed(
  () => hasLatin.value && livingLangs.value.length >= 1 && alt.value !== 'la'
);

const anyLangs = computed<Lang[]>(() =>
  doc.value ? (doc.value.langs as Lang[]).filter((l) => docHasAny(l)) : []
);
</script>
<template>
  <main class="max-w-6xl mx-auto p-4">
    <div v-if="pending">Carregando…</div>
    <div v-else-if="error">Não encontrado.</div>

    <template v-else-if="doc">
      <header class="mb-4">
        <h1 class="text-2xl font-bold">
          {{ doc.meta?.title?.pt || doc.slug }}
        </h1>
        <p v-if="doc.meta?.subtitle?.pt" class="text-sm opacity-80">
          {{ doc.meta.subtitle.pt }}
        </p>
      </header>

      <article class="md:hidden prose dark:prose-invert">
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="showDual ? 'la' : alt || 'pt'"
          fallback="pt"
        />
      </article>

      <div v-if="showDual" class="hidden md:grid grid-cols-2 gap-8">
        <template v-for="s in doc.content" :key="s.key">
          <BPRenderSectionDual :section="s" l1="la" :l2="alt" />
        </template>
      </div>

      <article v-else class="hidden md:block prose dark:prose-invert">
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="alt"
          fallback="pt"
        />
      </article>
    </template>
  </main>
</template>
