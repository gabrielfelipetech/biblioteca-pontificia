<template>
  <aside
    class="fixed left-0 top-16 tablet:top-14 z-10 dark:bg-bp-blue-800-light bg-bp-yellow-100-light dark:border-bp-blue-800-light border-bp-yellow-700-light border-r h-[calc(100vh-4rem)] tablet:h-[calc(100vh-3.5rem)] transition-[width] duration-300 ease-in-out select-none"
    :class="isOpen ? 'w-96 tablet:w-80' : 'w-16'"
  >
    <nav class="h-full flex flex-col">
      <button
        class="sidebar-toggle rounded-lg cursor-pointer ml-2 py-0.5 pt-2 pl-2 hover:dark:bg-bp-blue-700-light hover:bg-bp-yellow-200-light items-start"
        @click="toggle()"
      >
        <Icon :name="isOpen ? 'mdi:backburger' : 'mdi:menu'" size="1.5rem" />
      </button>

      <div class="grow min-h-0 overflow-y-auto pr-2">
        <ul class="sidebar-list mt-3 ml-2 space-y-1">
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
    </nav>
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
const router = useRouter();

function toggle() {
  isOpen.value = !isOpen.value;
}

function toggleExpand(n: SidebarLink) {
  if (!n.isExpandable) return;
  if (!isOpen.value) isOpen.value = true;
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
}
</script>

<style scoped>
.slideList-enter-active,
.slideList-leave-active {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  overflow: hidden;
}
.slideList-enter-from,
.slideList-leave-to {
  max-height: 0;
  opacity: 0;
}
.slideList-enter-to,
.slideList-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>
