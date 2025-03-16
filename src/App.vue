<template>
  <Navbar />
  <Hero />
  <Skills />
  <Experience />
  <Portfolio />
  <Education />
  <Distinctions />
  <Contact />
  <Footer />
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import Contact from "./components/Contact.vue";
import Distinctions from "./components/Distinctions.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Portfolio from "./components/Portfolio.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Skills,
    Experience,
    Portfolio,
    Education,
    Distinctions,
    Contact,
    Footer,
  },
  setup() {
    const { locale, t } = useI18n();
    return { locale, t };
  },
};
</script>
