<template>
  <section class="container py-10" id="distinctions">
    <div>
        <h2 class="subtitle">{{ t('distinctions.subtitle') }}</h2>
        <h1 class="title">{{ t('distinctions.title') }}</h1>
    </div>

    <div class="flex justify-evenly py-20">
            <div v-for="item in items" class="w-1/3 bg-gray-50 dark:bg-gray-800 rounded-xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img src="src/assets/gold-medal.png" alt="Gold trophy" class="h-32 mx-auto" />
                <div class="mb-6 mt-10 uppercase text-center">
                  <h2 class="font-bold text-2xl">{{ t(item.title) }}</h2>
                  <h3 class="text-xl font-medium">Sujet {{ t(item.subject) }}</h3>
                  <h4 class="text-amber-500 font-medium tracking-[0.5rem]">{{ t('distinctions.results') }}</h4>
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
  name: 'Distinctions',
  setup() {
    const { t } = useI18n();

    const items = [
        {
            title: 'distinctions.datachallenge',
            subject: 'distinctions.datachallengeSubject',
            description: 'distinctions.datachallengeDescription',
        },
        {
            title: 'distinctions.databattle',
            subject: 'distinctions.databattleSubject',
            description: 'distinctions.databattleDescription',
        }
    ]

    return { t, items };
  },
});

</script>