// src/composables/usePortableDoc.ts
import { useAsyncData } from 'nuxt/app';
import type { PortableDoc } from '../types/content';
export function usePortableDoc(slug: string) {
  return useAsyncData<PortableDoc>(`doc:${slug}`, () =>
    $fetch(`/texts/${slug}.json`)
  );
}
