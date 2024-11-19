<template>
  <button @click="toggleDarkMode">
    {{ isDark ? "Escuro" : "Claro" }}
  </button>
</template>

<script lang="ts" setup>
import {  onBeforeMount, ref } from 'vue'

const isDark = ref(false)

const verifyLocalStorage = () => {
  const isDarkLocalStorage = window.localStorage.getItem('isDark.0.0.1')
  console.log(isDarkLocalStorage)
  if (isDarkLocalStorage === 'yes') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
}
onBeforeMount(() => {
  verifyLocalStorage();
})
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  window.localStorage.setItem('isDark.0.0.1', isDark.value ? 'yes' : 'no')
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}



</script>

<style></style>