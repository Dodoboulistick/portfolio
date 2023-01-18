<template>
<nav class="py-5 bg-gray-100/70 fixed top-0 w-full">
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
                <a href="#"><img src="src/assets/fr.svg" class="h-5 rounded-sm" /></a>
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
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>