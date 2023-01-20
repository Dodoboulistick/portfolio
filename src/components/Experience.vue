<template>
    <section class="container py-10" id="experience">
        <div>
            <h2 class="subtitle">{{ t('experience.subtitle') }}</h2>
            <h1 class="title">{{ t('experience.title') }}</h1>
        </div>

        <div>
            <div class="flex flex-col gap-10 py-10 w-5/6 mx-auto">
                <div class="relative bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold">{{ t('experience.capgeminiDates') }}</h3>
                    <h2 class="text-2xl font-bold">{{ t('experience.capgemini') }}</h2>
                    <p class="text-base opacity-70">{{ t('experience.capgeminiDescription') }}</p>
                    <img src="src/assets/logo-capgemini.png" class="h-full p-3 absolute opacity-[15%] top-0 left-0" alt="Logo Capgemini" />
                </div>

                <div class="relative bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold">{{ t('experience.scribeDates') }}</h3>
                    <h2 class="text-2xl font-bold">{{ t('experience.scribe') }}</h2>
                    <p class="text-base opacity-70">{{ t('experience.scribeDescription') }}</p>
                    <img src="src/assets/logo-scribe.svg" class="h-full p-3 absolute opacity-[15%] top-0 left-0" alt="Logo Capgemini" />
                </div>

                <div class="relative bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold">{{ t('experience.totalDates') }}</h3>
                    <h2 class="text-2xl font-bold">{{ t('experience.total') }}</h2>
                    <p class="text-base opacity-70">{{ t('experience.totalDescription') }}</p>
                    <img src="src/assets/logo-totalenergies.svg" class="h-full p-3 absolute opacity-[15%] top-0 left-0" alt="Logo Capgemini" />
                </div>

                <div class="relative bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold">{{ t('experience.projetdemocratiaDates') }}</h3>
                    <h2 class="text-2xl font-bold">{{ t('experience.projetdemocratia') }}</h2>
                    <p class="text-base opacity-70">{{ t('experience.projetdemocratiaDescription') }}</p>
                    <img src="src/assets/logo-projetdemocratia.png" class="h-full p-3 absolute opacity-[15%] top-0 left-0" alt="Logo Capgemini" />
                </div>

                <div class="relative bg-gray-50 dark:bg-gray-800 shadow-lg p-3 rounded-xl">
                    <h3 class="text-lg text-blue-600 font-semibold">{{ t('experience.freelanceDates') }}</h3>
                    <h2 class="text-2xl font-bold">{{ t('experience.freelance') }}</h2>
                    <p class="text-base opacity-70">{{ t('experience.freelanceDescription') }}</p>
                    <img src="src/assets/logoDMwhite.svg" class="h-full p-6 absolute opacity-[15%] top-0 left-0" alt="Logo Capgemini" />
                </div>
            </div>
        </div>

    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Experience',
  setup() {
    const { t } = useI18n();

    return {
        t
    };
  },
});

</script>