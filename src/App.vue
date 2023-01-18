<template>
  <Navbar /> 
  <Hero />
  <Skills />
  <Experience />
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Skills,
    Experience
  },
  setup() {
    const { locale, t } = useI18n();
    return { locale, t }
  }
};
</script>