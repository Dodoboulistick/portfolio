<template>
  <Navbar /> 
  <Hero />
  <Skills />
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Skills
  },
  setup() {
    const { locale, t } = useI18n();

    return { locale, t }
  }
};
</script>