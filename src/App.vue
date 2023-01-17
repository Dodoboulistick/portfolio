<template>
  <p>{{ t('hero.title') }}</p>
  <p>{{ t('hero.name') }}</p>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { locale, t } = useI18n();

    return { locale, t }
  }
}
</script>