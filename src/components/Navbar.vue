<template>
<nav class="py-5 bg-gray-100/70 dark:bg-gray-900/90 backdrop-blur-lg fixed top-0 w-full z-[999]">
    <div class="container flex items-center justify-between">
        <div>
            <a href="#">
                <img v-if="isDark" src="src/assets/logoDMblack.svg" class="h-7 opacity-90" alt="logo" />
                <img v-else src="src/assets/logoDMwhite.svg" class="h-7" alt="logo" />
            </a>
        </div>
        <ul class="flex items-center gap-5 font-medium text-lg capitalize">
            <li>
                <a href="#hero" class="nav-link">{{ t('navbar.home') }}</a>
            </li>
            <li>
                <a href="#skills" class="nav-link">{{ t('navbar.skills') }}</a>
            </li>
            <li>
                <a href="#experience" class="nav-link">{{ t('navbar.experience') }}</a>
            </li>
            <li>
                <a href="#portfolio" class="nav-link">{{ t('navbar.portfolio') }}</a>
            </li>
            <li>
                <a href="#education" class="nav-link">{{ t('navbar.education') }}</a>
            </li>
            <li>
                <a href="#distinctions" class="nav-link">{{ t('navbar.distinctions') }}</a>
            </li>
            <li>
                <a href="#contact" class="nav-link">{{ t('navbar.contact') }}</a>
            </li>
            <li>
                <div class="w-[1px] h-5 bg-gray-900 dark:bg-white/90"></div>
            </li>
            <li>
                <img @click="handleClickOnFlag" :src="`src/assets/${flag}.svg`" class="h-5 rounded-sm cursor-pointer" />
            </li>
            <li>
                <i @click="toggleDark()" class="bi text-2xl nav-link" :class="[isDark ? 'bi-sun' : 'bi-moon']"></i>
            </li>
            <li>
                <a href="https://github.com/Dodoboulistick" target="_blank"><i class="bi bi-github text-2xl nav-link"></i></a>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark, useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { t, locale } = useI18n();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const flag = ref(locale.value === 'fr' ? 'en' : 'fr');

    const handleClickOnFlag = () => {
      if(locale.value === 'fr') {
        locale.value = 'en';
        flag.value = 'fr';
      } else {
        locale.value = 'fr';
        flag.value = 'en';
      }
    };

    return {
        t,
        flag,
        handleClickOnFlag,
        toggleDark,
        isDark
    };
  },
});
</script>