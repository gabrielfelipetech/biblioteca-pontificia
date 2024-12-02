<template>
  <nav
    :class="['sidebar-container', isSideBarOpen ? 'w-96 tablet:w-80' : 'w-16']"
  >
    <div class="sidebar-toggle" @click="toggleStateSideBar">
      <Icon
        :name="isSideBarOpen ? 'mdi:backburger' : 'mdi:menu'"
        size="1.5rem"
      />
    </div>
    <ul class="sidebar-list">
      <li v-for="link in sidebarLinks" :key="link.title">
        <div class="sidebar-item level-1" @click.stop="toggleExpand(link)">
          <div class="sidebar-item--icon-text">
            <Icon
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
            :name="link.isExpanded ? 'mdi:chevron-down' : 'mdi:chevron-right'"
          />
        </div>
        <ul v-if="isSideBarOpen && link.isExpanded" class="sidebar-list-child">
          <li v-for="child in link.children" :key="child.title">
            <div class="sidebar-item-child" @click.stop="toggleExpand(child)">
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
                :name="
                  child.isExpanded ? 'mdi:chevron-down' : 'mdi:chevron-right'
                "
              />
            </div>
            <ul
              v-if="isSideBarOpen && child.isExpanded"
              class="sidebar-list-subchild"
            >
              <li v-for="subchild in child.children" :key="subchild.title">
                <div class="sidebar-item-subchild">
                  <h4>{{ subchild.title }}</h4>
                  <Icon
                    v-if="subchild.isExpandable"
                    :name="
                      child.isExpanded
                        ? 'mdi:chevron-down'
                        : 'mdi:chevron-right'
                    "
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
type BaseSidebarLink = {
  title: string;
  isRequestable?: boolean;
  isExpanded?: boolean;
  icon?: string;
};

type SidebarLink =
  | (BaseSidebarLink & {
      isExpandable: true;
      children: [SidebarLink, ...SidebarLink[]];
    })
  | (BaseSidebarLink & { isExpandable?: false; children?: undefined });

const sidebarLinks = ref<SidebarLink[]>([
  {
    title: 'Devocionário',
    isExpandable: true,
    icon: 'book-open-blank-variant-outline',
    isExpanded: false,
    children: [
      {
        title: 'Via Sacra',
        isRequestable: true,
      },
      {
        title: 'Orações Diárias',
        isExpandable: true,
        isExpanded: false,

        children: [
          {
            title: 'Oração da manhã (Breve)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da manhã (Completa)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da noite (Breve)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da noite (Completa)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Para rezar ao longo do dia',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Anjo do Senhor (Angelus)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Rainha do Céu (Regina Coeli)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes do estudo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para depois do estudo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes do trabalho',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes da refeição',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para depois da refeição',
            isExpandable: false,
            isRequestable: true,
          },
        ],
      },
      {
        title: 'Santo terço',
        isExpandable: true,
        isExpanded: false,

        children: [
          { title: 'Oferecimento', isExpandable: false, isRequestable: true },
          {
            title: 'Mistério Gososo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Mistério Doloroso',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Mistério Glorioso',
            isExpandable: false,
            isRequestable: true,
          },
        ],
      },
      {
        title: 'Ladainhas',
        isExpandable: true,
        isExpanded: false,

        children: [
          {
            title: 'A Nosso Senhor',
            isExpandable: true,
            children: [
              {
                title: 'Preciossimo Sangue',
                isExpandable: false,
                isRequestable: true,
              },
            ],
          },
          {
            title: 'A Nossa Senhora',
            isExpandable: true,
            children: [
              {
                title: 'Ladainha de Nossa Senhora',
                isExpandable: false,
                isRequestable: true,
              },
              {
                title: 'Ladainha de Nossa Senhora do Carmo',
                isExpandable: false,
                isRequestable: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Cânticos',
    isExpandable: true,
    icon: 'music-clef-treble',
    isExpanded: false,
    children: [
      {
        title: 'Sacros',
        isExpandable: true,
        isExpanded: false,
        children: [
          { title: 'Adóro te devóte', isRequestable: true },
          { title: 'Ave maris stella', isRequestable: true },
          { title: 'Ave verum', isRequestable: true },
          { title: 'Benedícite', isRequestable: true },
          { title: 'Benedíctus', isRequestable: true },
          { title: 'Ecce panis angelorum', isRequestable: true },
          { title: 'Jam lucis', isRequestable: true },
          { title: 'Magnificat', isRequestable: true },
          { title: 'Memento rerum conditor', isRequestable: true },
          { title: 'Nunc Dimíttis', isRequestable: true },
          { title: 'O gloriosa virginum', isRequestable: true },
          { title: 'Pange, lingua, gloriósi', isRequestable: true },
          { title: 'Parce domine', isRequestable: true },
          { title: 'Quem terra', isRequestable: true },
          { title: 'Salutaris', isRequestable: true },
          { title: 'Tantum ergo', isRequestable: true },
          { title: 'Te Deum', isRequestable: true },
          { title: 'Te lucis', isRequestable: true },
          { title: 'Vexílla Regis', isRequestable: true },
        ],
      },
      {
        title: 'Populares',
        isExpandable: true,
        isExpanded: false,
        children: [
          { title: 'Ó anjos cantai comigo', isRequestable: true },
          { title: 'Bendizemos o Teu Nome', isRequestable: true },
          { title: 'Senhor meu Bom Jesus Crucificado', isRequestable: true },
          { title: 'Sobre os braços da azinheira', isRequestable: true },
          { title: 'Com minha Mãe estarei', isRequestable: true },
          {
            title: 'Coração Santo aqui nos tens prostrados',
            isRequestable: true,
          },
          { title: 'Coração Santo, Tu reinarás', isRequestable: true },
          { title: 'Eu caminharei', isRequestable: true },
          { title: 'Cantemos a Jesus Sacramentado', isRequestable: true },
          { title: 'Lenta e calma sobre a terra', isRequestable: true },
          { title: 'Queremos Deus', isRequestable: true },
          { title: 'Que tenho eu, meu Deus', isRequestable: true },
          { title: 'Salve, nobre Padroeira', isRequestable: true },
          { title: 'Nossa Senhora do Carmo', isRequestable: true },
          { title: 'Senhora, nós Vos louvamos', isRequestable: true },
          { title: 'A treze de Maio', isRequestable: true },
          { title: 'Senhora, um dia descestes', isRequestable: true },
          { title: 'Virgem Pura', isRequestable: true },
        ],
      },
    ],
  },
]);
const isSideBarOpen = ref(true);
const toggleStateSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value;
};
function toggleExpand(link) {
  if (link.isExpandable) {
    link.isExpanded = !link.isExpanded;
  }
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
      }
    }
  }
}

.sidebar-item:hover {
  @apply bg-bp-yellow-200-light border-bp-blue-700-light;
  @apply dark:bg-bp-blue-700-light dark:border-bp-yellow-100-light;
  transition-duration: 300ms;
}
</style>
