<template>
    <section class="h-screen" id="hero">
        <div class="container h-full flex items-center justify-around">
            <div class="w-1/2">
                <h2 class="text-5xl font-bold">{{ t('hero.title') }}</h2>
                <h1 class="text-7xl font-extrabold">{{ t('hero.name') }}</h1>
                <p class="py-8 opacity-70 text-">
                    {{ t('hero.subtitle') }}
                </p>
                <div class="flex gap-10 font-medium">
                    <a href="#" class="text-white/90 bg-gradient-to-r from-blue-600 to-blue-500 rounded-md py-2 px-10 shadow-lg shadow-blue-600/30 hover:shadow-none transition-all duration-300">{{ t('hero.cta') }}</a>
                    <a href="#" class="bg-gray-50 rounded-md py-2 px-10 shadow-lg hover:shadow-none transition-all duration-300">{{ t('hero.contact') }}</a>
                </div>
            </div>
            <img src="src/assets/me-unsuit.png" class="h-[500px]" alt="hero" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Hero',
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>