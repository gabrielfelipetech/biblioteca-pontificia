<script setup lang="ts">
import BPRenderSection from '@/shared/components/organism/BPRenderSection.vue';
import type { Lang } from '@/shared/types/content';
import { createError, useHead } from 'nuxt/app';
import { computed, ref, watchEffect } from 'vue';

const route = useRoute();
const segments = computed(() => {
  const s = route.params.slug as string[] | undefined;
  return Array.isArray(s) ? s : [];
});
const last = computed(() => segments.value[segments.value.length - 1] || '');

const { data: doc, status } = await useAsyncData(
  'doc',
  () => (last.value ? $fetch(`/api/docs/${last.value}`) : null),
  { watch: [last] }
);

if (status.value === 'error')
  throw createError({ statusCode: 404, statusMessage: 'Não encontrado' });

const lang = ref<Lang>('pt');
const alt = ref<Lang>('la');

watchEffect(() => {
  if (doc.value) {
    useHead({
      title:
        doc.value.meta?.title?.[lang.value] ??
        doc.value.meta?.title?.pt ??
        doc.value.slug,
    });
  }
});
</script>

<template>
  <main class="max-w-6xl mx-auto p-4" v-if="doc">
    <header class="mb-4">
      <h1 class="text-2xl font-bold">{{ doc.meta?.title?.pt || doc.slug }}</h1>
      <p v-if="doc.meta?.subtitle?.pt" class="text-sm opacity-80">
        {{ doc.meta.subtitle.pt }}
      </p>
    </header>

    <div class="md:hidden mb-4">
      <select v-model="lang" class="border p-2 rounded">
        <option v-for="l in doc.langs" :key="l" :value="l">
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

    <div class="hidden md:grid grid-cols-2 gap-8">
      <article class="prose dark:prose-invert">
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="lang"
          fallback="pt"
        />
      </article>
      <article class="prose dark:prose-invert">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-semibold">Coluna B:</span>
          <select v-model="alt" class="border p-1 rounded">
            <option v-for="l in doc.langs" :key="l" :value="l">
              {{ l.toUpperCase() }}
            </option>
          </select>
        </div>
        <BPRenderSection
          v-for="s in doc.content"
          :key="s.key"
          :section="s"
          :lang="alt"
          fallback="pt"
        />
      </article>
    </div>
  </main>
</template>
