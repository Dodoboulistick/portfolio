<template>
    <section class="container py-10" id="portfolio">
        <div>
            <h2 class="subtitle">{{ t('portfolio.subtitle') }}</h2>
            <h1 class="title">{{ t('portfolio.title') }}</h1>
        </div>

        <div class="grid grid-cols-12 gap-20 items-center py-10">
            <img class="col-span-5" src="src/assets/mock-devices.jpeg" alt="Mock devices" />
            <div class="col-span-7 grid grid-cols-2 gap-8">
                <div v-for="item in items" class="px-5 py-4 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 cursor-pointer hover:!border-blue-600 transition-all duration-300" :class="[item.isActive ? 'border-2 border-blue-600' : 'border-2 border-gray-50 dark:border-gray-800' ]" @click="handleClick(item.index)">
                    <div class="flex justify-between items-center mb-1">
                        <h3 class="text-2xl font-semibold">{{ t(item.title) }}</h3>
                        <a :href="t(item.link)" target="_blank" class="text-lg text-blue-600 hover:bg-blue-600/10 px-2 rounded-md transition-all duration-300">{{ t('portfolio.cta') }} <i class="bi bi-arrow-up-right text-sm"></i></a>
                    </div>
                    <p class="opacity-70">{{ t(item.description) }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Portfolio',
  setup() {
    const { t } = useI18n();
    const items = ref<{index: number,title: string, description: string, link: string, isActive: boolean}[]>([]);

    const getItems = () => {
        for(let i = 0; i < 8; i++) {
            items.value!.push({
                index: i,
                title: `portfolio.items[${i}].title`,
                description: `portfolio.items[${i}].description`,
                link: `portfolio.items[${i}].link`,
                isActive: i === 0 ? true : false
            })
        }
    }

    const handleClick = (index: number) => {
        items.value!.forEach((item, i) => {
            if(i === index) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        })
    }

    onMounted(() => {
        getItems();
    })

    return { t, items, handleClick };
  },
});
</script>