<template>
    <section class="container py-10 px-3" id="portfolio">
        <div>
            <h2 class="subtitle">{{ t('portfolio.subtitle') }}</h2>
            <h1 class="title">{{ t('portfolio.title') }}</h1>
        </div>

        <div class="grid xl:grid-cols-2 gap-x-20 items-center py-10">
            <div class="col-span-1">
                <img :src="activeImage" alt="Mock devices" />
                <p class="text-center opacity-50 italic my-5">{{ t('portfolio.preview') }}</p>
            </div>
            <div class="col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div v-for="item in items" class="px-5 py-4 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 cursor-pointer hover:!border-blue-600 transition-all duration-300" :class="[item.isActive ? 'border-2 border-blue-600' : 'border-2 border-gray-50 dark:border-gray-800' ]" @click="handleClick(item.index)">
                    <div class="flex flex-row justify-between items-center mb-1 text-left">
                        <h3 class="text-2xl font-semibold truncate">{{ t(item.title) }}</h3>
                        <a :href="t(item.link)" target="_blank" class="flex flex-nowrap items-center gap-1 text-lg text-blue-600 hover:bg-blue-600/10 px-2 rounded-md transition-all duration-300">{{ t('portfolio.cta') }} <i class="bi bi-arrow-up-right text-sm"></i></a>
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
import scribe from '/src/assets/devices/scribe.png';
import projetdemocratia from '/src/assets/devices/projetdemocratia.png';
import datachallenge from '/src/assets/devices/datachallenge.png';
import lagamair from '/src/assets/devices/lagamair.png';
import capitalgame from '/src/assets/devices/capitalgame.png';
import helene from '/src/assets/devices/helene.png';
import ekkodesign from '/src/assets/devices/ekkodesign.png';
import odilemailhe from '/src/assets/devices/odilemailhe.png';

export default defineComponent({
  name: 'Portfolio',
  setup() {
    const { t } = useI18n();
    const activeImage = ref(scribe);
    const images = [scribe, projetdemocratia, datachallenge, lagamair, capitalgame, helene, ekkodesign, odilemailhe];
    const items = ref<{index: number,title: string, description: string, link: string,image:string, isActive: boolean}[]>([]);

    const getItems = () => {
        for(let i = 0; i < 8; i++) {
            items.value!.push({
                index: i,
                title: `portfolio.items[${i}].title`,
                description: `portfolio.items[${i}].description`,
                link: `portfolio.items[${i}].link`,
                image: images[i],
                isActive: i === 0 ? true : false
            })
        }
    }

    const handleClick = (index: number) => {
        activeImage.value = images[index];
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

    return { t, items, handleClick, activeImage };
  },
});
</script>