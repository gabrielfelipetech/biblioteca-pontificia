<template>
  <aside>
    <nav
      :class="[
        'sidebar-container',
        isSideBarOpen ? 'w-96 tablet:w-80' : 'w-16',
      ]"
    >
      <div class="sidebar-toggle" @click="toggleStateSideBar">
        <Icon
          :name="isSideBarOpen ? 'mdi:backburger' : 'mdi:menu'"
          size="1.5rem"
        />
      </div>
      <transition name="slideList">
        <ul class="sidebar-list">
          <li v-for="link in sidebarLinks" :key="link.title">
            <div class="sidebar-item level-1" @click.stop="toggleExpand(link)">
              <div class="sidebar-item--icon-text">
                <Icon
                  class="chevron-icon"
                  :name="`mdi:${link.icon}`"
                  size="1.5rem"
                  @click.stop="toggleExpand(link)"
                  @click="isSideBarOpen = true"
                />
                <h2 v-if="isSideBarOpen" class="text-xl font-bold">
                  {{ link.title }}
                </h2>
              </div>
              <Icon
                v-if="link.isExpandable"
                class="chevron-icon"
                :class="{ 'chevron-rotated': link.isExpanded }"
                :name="'mdi:chevron-right'"
              />
            </div>

            <transition name="slideList">
              <ul
                v-if="isSideBarOpen && link.isExpanded"
                class="sidebar-list-child"
              >
                <li v-for="child in link.children" :key="child.title">
                  <div
                    class="sidebar-item-child"
                    @click.stop="
                      child.isExpandable
                        ? toggleExpand(child)
                        : tryNavigate(child)
                    "
                  >
                    <h3
                      :class="[
                        child.children && child.children.length > 0
                          ? 'font-semibold text-base dark:text-bp-yellow-700-light'
                          : 'font-black text-base dark:text-bp-yellow-200-light',
                      ]"
                    >
                      {{ child.title }}
                    </h3>
                    <Icon
                      v-if="child.isExpandable"
                      class="chevron-icon"
                      :class="{ 'chevron-rotated': child.isExpanded }"
                      :name="'mdi:chevron-right'"
                    />
                  </div>

                  <transition name="slideList">
                    <ul
                      v-if="isSideBarOpen && child.isExpanded"
                      class="sidebar-list-subchild"
                    >
                      <li
                        v-for="subchild in child.children"
                        :key="subchild.title"
                      >
                        <div
                          class="sidebar-item-subchild"
                          @click.stop="
                            subchild.isExpandable
                              ? toggleExpand(subchild)
                              : tryNavigate(subchild)
                          "
                        >
                          <h4>{{ subchild.title }}</h4>
                          <Icon
                            v-if="subchild.isExpandable"
                            class="chevron-icon"
                            :class="{ 'chevron-rotated': subchild.isExpanded }"
                            :name="'mdi:chevron-right'"
                          />
                        </div>

                        <transition name="slideList">
                          <ul
                            v-if="isSideBarOpen && subchild.isExpanded"
                            class="sidebar-list-subsubchild"
                          >
                            <li
                              v-for="subsubchild in subchild.children"
                              :key="subsubchild.title"
                            >
                              <div
                                class="sidebar-item-subsubchild"
                                @click.stop="tryNavigate(subsubchild)"
                              >
                                <h5>{{ subsubchild.title }}</h5>
                              </div>
                            </li>
                          </ul>
                        </transition>
                      </li>
                    </ul>
                  </transition>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </transition>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  sidebarLinks as rawSidebarLinks,
  type SidebarLink,
} from '../../utils/mocks/sibeBarLinks';
const sidebarLinks = ref(rawSidebarLinks);
const isSideBarOpen = ref(true);
const router = useRouter();

const toggleStateSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value;
};

function toggleExpand(link: SidebarLink) {
  if (link.isExpandable) link.isExpanded = !link.isExpanded;
}

function slugify(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
async function tryNavigate(link: SidebarLink) {
  if (!link.isRequestable) return;
  const s = link.slug || slugify(link.title);
  const sec = link.section || 'devocionario';
  await router.push(`/${sec}/${s}`);
}
</script>

<style lang="scss" scoped>
.sidebar-toggle {
  @apply rounded-lg cursor-pointer ml-2 py-0.5 pt-2 pl-2;
}
.sidebar-toggle:hover {
  @apply bg-bp-yellow-200-light dark:bg-bp-blue-700-light;
  transition-duration: 300ms;
}
.sidebar-container {
  @apply fixed top-16 tablet:top-14 bottom-0 dark:bg-bp-blue-800-light dark:border-bp-blue-800-light border-r py-4 px-2 min-w-8 border-bp-yellow-700-light bg-bp-yellow-100-light overflow-y-auto select-none;
  @apply transition duration-500 ease-in-out;
  transition-property: width;
  .sidebar-list {
    @apply flex flex-col gap-1 mt-3 ml-2;
    .sidebar-item {
      @apply flex justify-between items-center cursor-pointer py-1 pr-4 pl-2 rounded-lg;
      &--icon-text {
        @apply flex gap-2 items-center;
      }
    }
    .sidebar-list-child {
      @apply ml-5 border-l;
      @apply flex flex-col gap-1 my-2;

      .sidebar-item-child {
        @apply flex items-center justify-between py-1 cursor-pointer pl-6 pr-4 rounded-e-lg;
      }
      .sidebar-item-child:hover {
        @apply dark:bg-bp-blue-700-light bg-bp-yellow-200-light  border-l-1 border-black -ml-px;
        transition-duration: 300ms;
      }
      .sidebar-list-subchild {
        @apply border-l ml-6;
        @apply flex flex-col gap-1 my-2;
        .sidebar-item-subchild {
          @apply flex items-center justify-between pl-3 py-1 pr-4 rounded-e-lg;
        }
        .sidebar-item-subchild:hover {
          @apply border-l-1 border-black -ml-px dark:bg-bp-blue-700-light bg-bp-yellow-200-light cursor-pointer;
          transition-duration: 300ms;
        }
        .sidebar-list-subsubchild {
          @apply border-l ml-3;
          @apply flex flex-col gap-1 my-2;
          .sidebar-item-subsubchild {
            @apply flex items-center justify-between pl-3 py-1 pr-4 rounded-e-lg;
          }
          .sidebar-item-subsubchild:hover {
            @apply border-l-1 border-black -ml-px dark:bg-bp-blue-700-light bg-bp-yellow-200-light cursor-pointer;
            transition-duration: 300ms;
          }
        }
      }
    }
  }
}
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
.chevron-icon {
  transition: transform 0.3s ease-in-out;
}
.chevron-rotated {
  transform: rotate(90deg);
}

.sidebar-item:hover {
  @apply bg-bp-yellow-200-light border-bp-blue-700-light;
  @apply dark:bg-bp-blue-700-light dark:border-bp-yellow-100-light;
  transition-duration: 300ms;
}
</style>
