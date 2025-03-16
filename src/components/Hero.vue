<template>
  <section class="h-screen px-3 pt-6 sm:pt-3 md:pt-0 lg:px-0" id="hero">
    <div
      class="container h-full flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:justify-around"
    >
      <img
        v-if="isDark"
        src="/src/assets/me-suit.webp"
        class="lg:order-last w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
        alt="Dorian Mailhé in a suit"
      />
      <img
        v-else
        src="/src/assets/me-unsuit.webp"
        class="lg:order-last w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
        alt="Dorian Mailhé in a suit"
      />
      <div class="sm:w-3/4 lg:w-1/2">
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold">
          {{ t("hero.title") }}
        </h2>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-extrabold">
          {{ t("hero.name") }}
        </h1>
        <p class="py-5 xl:py-8 opacity-70 sm:text-lg">
          {{ t("hero.subtitle") }}
        </p>
        <div class="flex gap-5 md:gap-10 font-medium w-fit mx-auto lg:ml-0">
          <a
            href="#skills"
            class="text-white/90 bg-linear-to-r from-blue-600 to-blue-500 rounded-md py-2 px-10 shadow-lg shadow-blue-600/30 hover:shadow-none transition-all duration-300"
            >{{ t("hero.cta") }}</a
          >
          <a
            href="#contact"
            class="bg-gray-50 dark:bg-gray-800 dark:shadow-none dark:hover:bg-gray-700 rounded-md py-2 px-10 shadow-lg hover:shadow-none transition-all duration-300"
            >{{ t("hero.contact") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useDark } from "@vueuse/core";

export default defineComponent({
  name: "Hero",
  setup() {
    const { t } = useI18n();
    const isDark = useDark();

    return {
      t,
      isDark,
    };
  },
});
</script>
