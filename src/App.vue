<template>
  <Navbar /> 
  <Hero />
  <Skills />
  <Experience />
  <Portfolio />
  <Education />
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Portfolio from './components/Portfolio.vue'
import Education from './components/Education.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Skills,
    Experience,
    Portfolio,
    Education
  },
  setup() {
    const { locale, t } = useI18n();
    return { locale, t }
  }
};
</script>