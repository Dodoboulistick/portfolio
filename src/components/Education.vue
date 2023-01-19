<template>
    <section class="container py-10">
        <div>
            <h2 class="subtitle">{{ t('education.subtitle') }}</h2>
            <h1 class="title">{{ t('education.title') }}</h1>
        </div>

        <div class="flex justify-around py-20">
            <div v-for="item in items" class="w-1/4 bg-gray-50 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img :src="item.image" :alt="`Logo ${item.name}`" class="h-24 mx-auto" />
                <div class="mb-6 mt-10">
                    <h4 class="text-center text-blue-600 font-medium">{{ t(item.date) }}</h4>
                    <h2 class="text-center font-semibold text-3xl">{{ t(item.name) }}</h2>
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

export default defineComponent({
  name: 'Education',
  setup() {
    const { t } = useI18n();

    const items = [
        {
            name: 'Pierre de Fermat',
            type: 'education.fermatType',
            description: 'education.fermatDescription',
            date: '2018 - 2020',
            image: 'src/assets/logo-fermat-black.svg'
        },
        {
            name: 'CY Tech',
            type: 'education.CYTechType',
            description: 'education.CYTechDescription',
            date: '2020 - 2023',
            image: 'src/assets/logo-cytech-black.png'
        }
    ]

    return { t, items };
  },
});
</script>