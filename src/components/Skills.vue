<template>
    <section class="container">
        <div>
            <h2 class="subtitle">{{ t('skills.subtitle') }}</h2>
            <h1 class="title">{{ t('skills.title') }}</h1>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Skills',
  setup() {
    const { t } = useI18n();

    return { t };
  },
});

</script>