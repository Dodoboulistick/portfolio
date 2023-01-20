<template>
<nav class="py-5 bg-gray-100/70 backdrop-blur-lg fixed top-0 w-full z-[999]">
    <div class="container flex items-center justify-between">
        <div>
            <a href="#">
                <img src="src/assets/logoDMwhite.svg" class="h-7" alt="logo" />
            </a>
        </div>
        <ul class="flex items-center gap-5 font-medium text-lg">
            <li>
                <a href="#" class="nav-link">{{ t('navbar.home') }}</a>
            </li>
            <li>
                <a href="#" class="nav-link">{{ t('navbar.skills') }}</a>
            </li>
            <li>
                <a href="#" class="nav-link">{{ t('navbar.experience') }}</a>
            </li>
            <li>
                <a href="#" class="nav-link">{{ t('navbar.portfolio') }}</a>
            </li>
            <li>
                <a href="#" class="nav-link">{{ t('navbar.contact') }}</a>
            </li>
            <li>
                <div class="w-[1px] h-5 bg-gray-900"></div>
            </li>
            <li>
                <img @click="handleClickOnFlag" :src="`src/assets/${flag}.svg`" class="h-5 rounded-sm cursor-pointer" />
            </li>
            <li>
                <i class="bi bi-moon text-2xl nav-link"></i>
            </li>
            <li>
                <i class="bi bi-github text-2xl nav-link"></i>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { t, locale } = useI18n();
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
        handleClickOnFlag
    };
  },
});
</script>