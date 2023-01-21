<template>
    <section class="bg-gray-900">
        <div class="container py-3 text-center px-5">
            <p class="text-white/80">
                {{ t('footer.content') }} - Dorian Mailhé {{ new Date().getFullYear() }} - {{ t('footer.rights') }}
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

    return { t };
  },
});

</script>