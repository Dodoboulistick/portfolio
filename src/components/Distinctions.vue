<template>

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