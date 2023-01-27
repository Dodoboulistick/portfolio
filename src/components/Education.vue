<template>
    <section class="container py-10 px-5 lg:px-0" id="education">
        <div>
            <h2 class="subtitle">{{ t('education.subtitle') }}</h2>
            <h1 class="title">{{ t('education.title') }}</h1>
        </div>

        <div class="flex flex-col sm:flex-row justify-evenly py-20 gap-5 lg:gap-0">
            <div v-for="item in items" class="lg:w-1/3 xl:w-1/4 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img :src="isDark ? item.imageDark : item.imageLight" :alt="`Logo ${item.name}`" class="h-24 mx-auto" :class="{'opacity-90' : isDark}" />
                <div class="mb-6 mt-10">
                    <h4 class="text-center text-blue-600 font-medium">{{ item.date }}</h4>
                    <h2 class="text-center font-semibold text-3xl">{{ item.name }}</h2>
                    <h3 class="text-center text-lg font-medium capitalize">{{ t(item.type) }}</h3>
                </div>
                <p class="opacity-70">{{ t(item.description) }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark } from '@vueuse/core';
import fermatWhiteLogo from '/src/assets/logo-fermat-white.svg';
import fermatBlackLogo from '/src/assets/logo-fermat-black.svg';
import cytechWhiteLogo from '/src/assets/logo-cytech-white.png';
import cytechBlackLogo from '/src/assets/logo-cytech-black.png';

export default defineComponent({
  name: 'Education',
  setup() {
    const { t } = useI18n();
    const isDark = useDark();

    const items = [
        {
            name: 'Pierre de Fermat',
            type: 'education.fermatType',
            description: 'education.fermatDescription',
            date: '2018 - 2020',
            imageDark: fermatWhiteLogo,
            imageLight: fermatBlackLogo
        },
        {
            name: 'CY Tech',
            type: 'education.CYTechType',
            description: 'education.CYTechDescription',
            date: '2020 - 2023',
            imageDark: cytechWhiteLogo,
            imageLight: cytechBlackLogo
        }
    ]

    return { t, items, isDark };
  },
});
</script>