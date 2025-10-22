<template>
  <li>
    <div
      class="flex justify-between items-center cursor-pointer py-1 px-5 rounded-lg hover:dark:bg-bp-blue-700-light hover:bg-bp-yellow-200-light"
      @click.stop="
        node.isExpandable ? $emit('toggle', node) : $emit('navigate', node)
      "
    >
      <div class="flex items-center gap-2">
        <Icon
          class="transition-transform"
          :name="`mdi:${node.icon}`"
          size="1.5rem"
          @click.stop="$emit('toggle', node)"
        />
        <h2 v-if="open" class="text-xl font-bold">{{ node.title }}</h2>
      </div>

      <Icon
        v-if="node.isExpandable && open"
        class="transition-transform duration-300"
        :class="{ 'rotate-90': node.isExpanded }"
        name="mdi:chevron-right"
      />
    </div>

    <transition name="slideList">
      <ul v-if="open && node.isExpanded" class="ml-5 border-l my-2 space-y-1">
        <BPSidebarNode
          v-for="c in node.children"
          :key="c.id || c.title"
          :node="c"
          :open="open"
          @toggle="$emit('toggle', $event)"
          @navigate="$emit('navigate', $event)"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import BPSidebarNode from './BPSidebarNode.vue';
import type { SidebarLink } from '../../utils/mocks/sibeBarLinks';
defineProps<{ node: SidebarLink; open: boolean }>();
</script>
