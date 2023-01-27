<template>
<nav class="p-5 bg-gray-100/70 dark:bg-gray-900/90 backdrop-blur-lg fixed top-0 w-full z-[999] lg:h-fit transition-all duration-300" :class="{'h-screen' : toggleNav}">
    <div class="container flex items-center justify-between">
        <div>
            <a href="#">
                <img v-if="isDark" src="/src/assets/logoDMblack.svg" class="h-7 opacity-90" alt="logo" />
                <img v-else src="/src/assets/logoDMwhite.svg" class="h-7" alt="logo" />
            </a>
        </div>
        <div class="flex items-center">
            <ul class="lg:flex flex-row items-center gap-5 font-medium text-lg capitalize hidden">
                <li v-for="item of navItems">
                    <a :href="item.href" class="nav-link">{{ t(item.name) }}</a>
                </li>
            </ul>
            <div class="w-[1px] h-5 bg-gray-900 dark:bg-white/90 mx-5 hidden lg:block"></div>
            <ul class="flex items-center gap-5 font-medium ">
                <li>
                    <img @click="handleClickOnFlag" :src="flag" class="h-5 rounded-sm cursor-pointer" />
                </li>
                <li>
                    <i @click="toggleDark()" class="bi text-2xl nav-link" :class="[isDark ? 'bi-sun' : 'bi-moon']"></i>
                </li>
                <li>
                    <a href="https://github.com/Dodoboulistick" target="_blank"><i class="bi bi-github text-2xl nav-link"></i></a>
                </li>
            </ul>
            <div class="w-[1px] h-5 bg-gray-900 dark:bg-white/90 mx-5 lg:hidden"></div>
            <div class="flex flex-col items-center">
                <i @click="onClickNav" class="bi bi-list text-3xl transition-all duration-300 lg:hidden w-fit h-fit" :class="{ 'rotate-90' : toggleNav }"></i>
                <!-- <p v-if="!toggleNav" class="text-sm opacity-70">Menu</p> -->
            </div>
        </div>
    </div>
        <ul v-if="toggleNav" class="flex flex-col justify-around py-20 items-center font-medium text-lg capitalize lg:hidden h-full transition-all duration-300">
            <li v-for="item of navItems">
                <a :href="item.href" class="nav-link text-2xl" @click="onClickNav">{{ t(item.name) }}</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark, useToggle } from '@vueuse/core';
import gbFlag from '/src/assets/en.svg';
import frFlag from '/src/assets/fr.svg';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { t, locale } = useI18n();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const flag = ref(locale.value === frFlag ? gbFlag : frFlag);
    const toggleNav = ref(false);

    const navItems = [
      { name: 'navbar.home', href: '#hero' },
      { name: 'navbar.skills', href: '#skills' },
      { name: 'navbar.experience', href: '#experience' },
      { name: 'navbar.portfolio', href: '#portfolio' },
      { name: 'navbar.education', href: '#education' },
      { name: 'navbar.distinctions', href: '#distinctions' },
      { name: 'navbar.contact', href: '#contact' },
    ];

    const handleClickOnFlag = () => {
      if(locale.value === 'fr') {
        locale.value = 'en';
        flag.value = frFlag;
      } else {
        locale.value = 'fr';
        flag.value = gbFlag;
      }
    };

    const onClickNav = () => {
      toggleNav.value = !toggleNav.value;
    };

    return {
        t,
        flag,
        handleClickOnFlag,
        toggleDark,
        isDark,
        toggleNav,
        onClickNav,
        navItems,
    };
  },
});
</script>