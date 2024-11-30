<template>
  <nav class="sidebar-container">
    <ul>
      <li v-for="link in sidebarLinks" :key="link.title">
        <div class="sidebar-item level-1" @click.stop="toggleExpand(link)">
          <h2 class="text-lg">{{ link.title }}</h2>
          <span v-if="link.isExpandable">
            {{ link.isExpanded ? '-' : '+' }}
          </span>
        </div>
        <ul v-if="link.isExpandable && link.isExpanded">
          <li v-for="child in link.children" :key="child.title">
            <div class="sidebar-item level-2" @click.stop="toggleExpand(child)">
              <h3 class="text-base">{{ child.title }}</h3>
              <span v-if="child.isExpandable">
                {{ child.isExpanded ? '-' : '+' }}
              </span>
            </div>
            <ul v-if="child.isExpandable && child.isExpanded">
              <li v-for="subChild in child.children" :key="subChild.title">
                <div
                  class="sidebar-item level-3"
                  @click.stop="toggleExpand(child)"
                >
                  <h4 class="text-sm">{{ subChild.title }}</h4>
                  <span v-if="child.isExpandable">
                    {{ subChild.isExpanded ? '-' : '+' }}
                  </span>
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
};

type SidebarLink =
  | (BaseSidebarLink & {
      isExpandable: true;
      children: [SidebarLink, ...SidebarLink[]];
    })
  | (BaseSidebarLink & { isExpandable?: false; children?: undefined });

const sidebarLinks = ref<SidebarLink[]>([
  {
    title: 'Missal',
    isExpandable: true,
    isExpanded: false,
    children: [
      { title: 'Ordo', isExpandable: false, isRequestable: true },
      {
        title: 'Advento',
        isExpandable: true,
        children: [
          { title: 'Primeiro Domingo do Advento', isRequestable: true },
          {
            title: 'Segunda-feira da 1ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Terça-feira da 1ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quarta-feira da 1ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quinta-feira da 1ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Sexta-feira da 1ª semana do Advento',
            isRequestable: true,
          },
          { title: 'Sábado da 1ª semana do Advento', isRequestable: true },
          { title: 'Segundo Domingo do Advento', isRequestable: true },
          {
            title: 'Segunda-feira da 2ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Terça-feira da 2ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quarta-feira da 2ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quinta-feira da 2ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Sexta-feira da 2ª semana do Advento',
            isRequestable: true,
          },
          { title: 'Sábado da 2ª semana do Advento', isRequestable: true },
          { title: 'Terceiro Domingo do Advento', isRequestable: true },
          {
            title: 'Segunda-feira da 3ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Terça-feira da 3ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quarta-feira das Têmporas do Inverno',
            isRequestable: true,
          },
          {
            title: 'Quinta-feira da 3ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Sexta-feira das Têmporas do Inverno',
            isRequestable: true,
          },
          { title: 'Sábado das Têmporas do Inverno', isRequestable: true },
          { title: 'Quarto Domingo do Advento', isRequestable: true },
          {
            title: 'Segunda-feira da 4ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Terça-feira da 4ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quarta-feira da 4ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Quinta-feira da 4ª semana do Advento',
            isRequestable: true,
          },
          {
            title: 'Sexta-feira da 4ª semana do Advento',
            isRequestable: true,
          },
        ],
      },
      { title: 'Natal', isExpandable: false, isRequestable: true },
      { title: 'Epifania', isExpandable: false, isRequestable: true },
      { title: 'Pre-Quaresma', isExpandable: false, isRequestable: true },
      { title: 'Quaresma', isExpandable: false, isRequestable: true },
      { title: 'Páscoa', isExpandable: false, isRequestable: true },
      { title: 'Santos', isExpandable: false, isRequestable: true },
      { title: 'Comuns', isExpandable: false, isRequestable: true },
      { title: 'Votivas', isExpandable: false, isRequestable: true },
      {
        title: 'Orações Diversas',
        isExpandable: false,
        isRequestable: true,
      },
      { title: 'Prefácios', isExpandable: false, isRequestable: true },
      {
        title: 'Orações Preliminares',
        isExpandable: false,
        isRequestable: true,
      },
    ],
  },
  {
    title: 'Devocionário',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        title: 'Orações Diárias',
        isExpandable: true,
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
]);
function toggleExpand(link) {
  if (link.isExpandable) {
    link.isExpanded = !link.isExpanded;
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  @apply fixed top-16 dark:bg-bp-blue-800-light dark:border-bp-blue-800-light border-r py-4 min-w-8 w-80 border-bp-yellow-700-light bg-bp-yellow-100-light overflow-y-auto h-full;
}

.sidebar-item {
  @apply flex justify-between items-center px-4 py-2 cursor-pointer;
  &.level-1 {
    @apply ml-3;
  }

  &.level-2 {
    @apply ml-6 dark:border-bp-blue-900-light border-l-2;
  }

  &.level-3 {
    @apply ml-9 dark:border-bp-blue-900-light border-l-2;
  }
}

.sidebar-item span {
  @apply text-gray-500;
}

.sidebar-item:hover {
  @apply bg-bp-yellow-200-light border-bp-blue-700-light;
  @apply dark:bg-bp-blue-700-light dark:border-bp-yellow-100-light;
}
</style>
