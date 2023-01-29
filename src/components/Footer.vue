<template>
    <section class="bg-gray-900">
        <div class="container py-3 text-center px-5">
            <p class="text-white/80">
                {{ t('footer.content') }} - Dorian Mailhé {{ new Date().getFullYear() }} - {{ t('footer.rights') }} - <span @click="handleCredits" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">{{ t('footer.credits') }}</span>
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Footer',
  setup() {
    const { t } = useI18n();

    const handleCredits = () => {
      alert(`Gold medal icons created by wahya - Flaticon\nDevices layout by Vectonauta on Freepik\nMerci à ces artistes/Thanks to these artists!`);
    };

    return { t, handleCredits };
  },
});

</script>