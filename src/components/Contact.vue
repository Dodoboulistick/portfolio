<template>
    <section class="pt-20" id="contact">
        <div class="bg-gray-50 dark:bg-gray-800 py-5">
            <div class="container flex justify-between items-center">
                <div class="pb-3">
                    <h2 class="subtitle !text-left !text-2xl font-medium leading-[0]">{{ t('contact.subtitle') }}</h2>
                    <h1 class="title !text-[42px] leading-[0.5]">{{ t('contact.title') }}</h1>
                </div>
                <div class="flex gap-5">
                    <a href="https://www.linkedin.com/in/dorian-mailhe/" target="_blank" class="flex justify-center items-center w-24 h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:!bg-blue-600 transition-all duration-300">
                        <i class="bi bi-linkedin text-4xl"></i>
                    </a>
                    <a href="https://github.com/Dodoboulistick" target="_blank" class="flex justify-center items-center w-24 h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:!bg-blue-600 transition-all duration-300">
                        <i class="bi bi-github text-4xl"></i>
                    </a>
                    <a href="mailto:dorian.mailhe@gmail.com" target="_blank" class="flex justify-center items-center w-24 h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:!bg-blue-600 transition-all duration-300">
                        <i class="bi bi-envelope-fill text-4xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Contact',
  setup() {
    const { t } = useI18n();

    return { t };
  },
});

</script>