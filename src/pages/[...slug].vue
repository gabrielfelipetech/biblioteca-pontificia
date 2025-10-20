<script setup lang="ts">
import BPRenderSection from '@/shared/components/organism/BPRenderSection.vue';
import BPRenderSectionDual from '@/shared/components/organism/BPRenderSectionDual.vue';
import type { Lang, Section, Block } from '@/shared/types/content';
import { createError, useAsyncData, useHead, useRoute } from 'nuxt/app';
import { computed, ref, watch } from 'vue';

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

if (status.value === 'error')
  throw createError({ statusCode: 404, statusMessage: 'Não encontrado' });

watch(
  () => doc.value,
  () => {
    if (doc.value) {
      useHead({ title: doc.value.meta?.title?.pt ?? doc.value.slug });
    }
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

const completeLangs = computed<Lang[]>(() =>
  doc.value ? (doc.value.langs as Lang[]).filter((l) => docComplete(l)) : []
);

const anyLangs = computed<Lang[]>(() =>
  doc.value ? (doc.value.langs as Lang[]).filter((l) => docHasAny(l)) : []
);

const lang = ref<Lang>('pt');
const alt = ref<Lang>('pt');

watch(
  () => doc.value,
  () => {
    const al = anyLangs.value;
    lang.value = (al[0] ?? 'pt') as Lang;
    alt.value = (al.find((l) => l !== lang.value) ?? lang.value) as Lang;
  },
  { immediate: true }
);

const showDual = computed(
  () => anyLangs.value.length >= 2 && lang.value !== alt.value
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

      <div class="md:hidden mb-4">
        <select v-model="lang" class="border p-2 rounded">
          <option v-for="l in anyLangs" :key="l" :value="l">
            {{ l.toUpperCase() }}
          </option>
        </select>
      </div>

      <article class="md:hidden prose dark:prose-invert">
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="lang"
          fallback="pt"
        />
      </article>

      <div v-if="showDual" class="hidden md:grid grid-cols-2 gap-8">
        <template v-for="s in doc.content" :key="s.key">
          <BPRenderSectionDual :section="s" :l1="lang" :l2="alt" />
        </template>
      </div>

      <article v-else class="hidden md:block prose dark:prose-invert">
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="lang"
          fallback="pt"
        />
      </article>
    </template>
  </main>
</template>
