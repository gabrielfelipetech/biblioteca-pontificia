<template>
  <div class="md:hidden">
    <div
      class="fixed top-0 inset-x-0 z-30 h-12 px-4 flex items-center gap-3 border-b dark:bg-bp-blue-800-light bg-bp-yellow-100-light"
    >
      <button @click="overlay = true" aria-label="Abrir menu" class="w-6 h-6">
        <Icon name="mdi:menu" size="1.5rem" />
      </button>
      <span class="font-semibold">Biblioteca Pontificia</span>
      <div class="ml-auto"></div>
    </div>

    <transition name="fade">
      <aside
        v-if="overlay"
        class="fixed inset-0 z-40 overflow-y-auto dark:bg-bp-blue-800-light bg-bp-yellow-100-light"
      >
        <div class="h-12 px-4 border-b flex items-center justify-between">
          <span class="font-semibold">Menu</span>
          <button @click="overlay = false" aria-label="Fechar">
            <Icon name="mdi:close" size="1.5rem" />
          </button>
        </div>

        <ul class="p-3 space-y-1">
          <BPSidebarNode
            v-for="n in nodes"
            :key="n.id || n.title"
            :node="n"
            :open="true"
            @toggle="toggleExpand"
            @navigate="tryNavigate"
          />
        </ul>
      </aside>
    </transition>
  </div>

  <aside
    :class="[
      'hidden md:flex md:flex-col md:sticky md:top-16 md:h-[calc(100vh-4rem)]',
      'md:shrink-0 border-r dark:border-bp-blue-900-light border-bp-yellow-700-light dark:bg-bp-blue-800-light bg-bp-yellow-100-light',
      'transition-[width] duration-300 ease-in-out overflow-hidden',
      isOpen ? 'md:w-64' : 'md:w-16',
    ]"
    :aria-expanded="isOpen"
  >
    <div class="w-full">
      <button
        class="w-full rounded-lg cursor-pointer hover:dark:bg-bp-blue-700-light hover:bg-bp-yellow-200-light my-1"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'mdi:backburger' : 'mdi:menu'" size="1.5rem" />
      </button>
    </div>

    <div class="grow min-h-0 overflow-y-auto">
      <ul class="space-y-1">
        <BPSidebarNode
          v-for="n in nodes"
          :key="n.id || n.title"
          :node="n"
          :open="isOpen"
          @toggle="toggleExpand"
          @navigate="tryNavigate"
        />
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BPSidebarNode from './BPSidebarNode.vue';
import {
  sidebarLinks as rawSidebarLinks,
  type SidebarLink,
} from '../../utils/mocks/sibeBarLinks';

const nodes = ref<SidebarLink[]>(rawSidebarLinks);
const isOpen = ref(true);
const overlay = ref(false);
const router = useRouter();

function toggleExpand(n: SidebarLink) {
  if (!n.isExpandable) return;
  n.isExpanded = !n.isExpanded;
}

function slugify(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function tryNavigate(n: SidebarLink) {
  if (!n.isRequestable) return;
  const s = n.slug || slugify(n.title);
  const sec = n.section;
  await router.push(`/${sec}/${s}`);
  overlay.value = false;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
