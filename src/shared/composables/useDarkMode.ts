import { ref, onBeforeMount } from 'vue';

export function useDarkMode() {
  const isDark = ref(true);

  const verifyLocalStorage = () => {
    const isDarkLocalStorage = window.localStorage.getItem('isDark.0.0.1');
    if (isDarkLocalStorage === 'yes') {
      isDark.value = true;
      document.documentElement.classList.add('dark');
    } else {
      isDark.value = false;
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    window.localStorage.setItem('isDark.0.0.1', isDark.value ? 'yes' : 'no');
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onBeforeMount(() => {
    verifyLocalStorage();
  });

  return {
    isDark,
    toggleDarkMode,
    verifyLocalStorage,
  };
}
