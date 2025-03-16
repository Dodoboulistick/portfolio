<template>
  <section class="lg:pt-5 xl:pt-20" id="contact">
    <div class="bg-gray-50 dark:bg-gray-800 py-7 sm:py-5 px-5">
      <div
        class="container flex flex-col gap-y-5 sm:flex-row justify-between items-center"
      >
        <div>
          <h2
            class="subtitle sm:text-xl! sm:text-left! lg:text-2xl! font-medium mb-4! sm:mb-0! lg:mb-2!"
          >
            {{ t("contact.subtitle") }}
          </h2>
          <h1 class="title text-3xl lg:text-[42px]! sm:text-left!">
            {{ t("contact.title") }}
          </h1>
        </div>
        <div class="w-full sm:w-fit flex gap-5 justify-between">
          <a
            href="https://www.linkedin.com/in/dorian-mailhe/"
            target="_blank"
            class="flex justify-center items-center w-full sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:bg-blue-600! transition-all duration-300 aspect-square"
          >
            <i class="bi bi-linkedin text-4xl"></i>
          </a>
          <a
            href="https://github.com/Dodoboulistick"
            target="_blank"
            class="flex justify-center items-center w-full sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:bg-blue-600! transition-all duration-300 aspect-square"
          >
            <i class="bi bi-github text-4xl"></i>
          </a>
          <a
            href="mailto:dorian.mailhe@gmail.com"
            target="_blank"
            class="flex justify-center items-center w-full sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white dark:bg-gray-700 shadow-xl rounded-lg hover:text-white hover:bg-blue-600! transition-all duration-300 aspect-square"
          >
            <i class="bi bi-envelope-fill text-4xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Contact",
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>
