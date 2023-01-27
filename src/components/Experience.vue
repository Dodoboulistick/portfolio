<template>
    <section class="container py-10" id="experience">
        <div>
            <h2 class="subtitle">{{ t('experience.subtitle') }}</h2>
            <h1 class="title">{{ t('experience.title') }}</h1>
        </div>

        <div>
            <div class="flex flex-col gap-10 py-10 w-5/6 mx-auto">
                <div v-for="item of items" class="bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold lg:hidden">{{ t(item.subtitle) }}</h3>
                    <div class="flex items-center gap-x-3 ">
                        <img :src="item.logo" class="h-10" :class="item.class" :alt="`Logo ${item.title}`" />
                        <div>
                            <h3 class="text-lg text-blue-600 font-semibold hidden lg:block">{{ t(item.subtitle) }}</h3>
                            <h2 class="text-2xl font-bold hidden lg:block">{{ t(item.title) }} - {{ t(item.job) }}</h2>
                            <h2 class="text-2xl font-bold lg:hidden">{{ t(item.title) }}</h2>
                        </div>
                    </div>
                    <h2 class="font-medium opacity-80 text-xl lg:hidden">{{ t(item.job) }}</h2>
                    <div class="w-1/4 bg-gray-900 dark:bg-white/80 h-[1px] my-3 sm:hidden"></div>
                    <p class="text-base opacity-70">{{ t(item.description) }}</p>
                </div>
            </div>
        </div>

    </section>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark } from '@vueuse/core';

export default defineComponent({
  name: 'Experience',
  setup() {
    const { t } = useI18n();
    const isDark = useDark();

    watch(isDark, (value) => {
        value ? items.value[4].logo = 'src/assets/logoDMblack.svg' : items.value[4].logo = 'src/assets/logoDMwhite.svg';
    });
    
    const items = ref([
        {
            title: 'experience.capgemini',
            job: 'experience.capgeminiJob',
            subtitle: 'experience.capgeminiDates',
            description: 'experience.capgeminiDescription',
            logo: 'src/assets/logo-capgemini.png'
        },
        {
            title: 'experience.scribe',
            job: 'experience.scribeJob',
            subtitle: 'experience.scribeDates',
            description: 'experience.scribeDescription',
            logo: 'src/assets/logo-scribe.svg',
            class: 'bg-gray-700 rounded-md p-1'
        },
        {
            title: 'experience.total',
            job: 'experience.totalJob',
            subtitle: 'experience.totalDates',
            description: 'experience.totalDescription',
            logo: 'src/assets/logo-totalenergies.svg'
        },
        {
            title: 'experience.projetdemocratia',
            job: 'experience.projetdemocratiaJob',
            subtitle: 'experience.projetdemocratiaDates',
            description: 'experience.projetdemocratiaDescription',
            logo: 'src/assets/logo-projetdemocratia.png',
            class: 'border-[1px] border-white rounded-full'
        },
        {
            title: 'experience.freelance',
            job: 'experience.freelanceJob',
            subtitle: 'experience.freelanceDates',
            description: 'experience.freelanceDescription',
            logo: isDark.value ? 'src/assets/logoDMblack.svg' : 'src/assets/logoDMwhite.svg',
            class: '!h-7'
        },
    ]);

    return {
        t,
        items
    };
  },
});

</script>