<template>
    <section class="container py-10" id="skills">
        <div>
            <h2 class="subtitle">{{ t('skills.subtitle') }}</h2>
            <h1 class="title">{{ t('skills.title') }}</h1>
        </div>

        <div class="grid grid-cols-3 gap-32 w-3/4 mx-auto py-20">
          <div class="col-span-1">
            <div class="text-center mb-2">
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
            </div>
            <h2 class="text-center text-4xl font-semibold">{{ t('skills.advanced') }}</h2>
            <hr class="h-[1px] border-gray-900/70 w-1/2 mx-auto my-6" />
            <ul class="list-disc text-lg">
              <li v-for="skill of skills.advanced" class="opacity-70">{{ skill }}</li>
            </ul>
          </div>

          <div class="col-span-1">
            <div class="text-center mb-2">
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
            </div>
            <h2 class="text-center text-4xl font-semibold">{{ t('skills.intermediate') }}</h2>
            <hr class="h-[1px] border-gray-900/70 w-1/2 mx-auto my-6" />
            <ul class="list-disc text-lg">
              <li v-for="skill of skills.intermediate" class="opacity-70">{{ skill }}</li>
            </ul>
          </div>

          <div class="col-span-1">
            <div class="text-center mb-2">
              <i class="bi bi-star-fill text-blue-600 mx-2 text-xl"></i>
            </div>
            <h2 class="text-center text-4xl font-semibold">{{ t('skills.basic') }}</h2>
            <hr class="h-[1px] border-gray-900/70 w-1/2 mx-auto my-6" />
            <ul class="list-disc text-lg pl-5">
              <li v-for="skill of skills.notions" class="opacity-70">{{ skill }}</li>
            </ul>
          </div>
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

    const skills = {
      advanced: [
        'HTML/CSS', 'TailwindCSS, Bootstrap, Material Design', 'Javascript ES6+, Typescript, NodeJS','Angular, VueJS, Svelte', 'Jest', 'PHP, MySQL, PostgreSQL, WordPress', 'Git, Github, Gitlab'
      ],
      intermediate: [
        'Java, Java Spring, Hibernate', 'React, Redux', 'Laravel', 'ExpressJS, Sequelize', 'Python, FastAPI, Django', 'AWS Basics: S3, SES, APIGateway, Lambda', 'Docker, Kubernetes', 'Linux, Bash'
      ],
      notions: [
        'Scala', 'Rust', 'C, C++', 'Ruby', 'GCP Basics'
      ]
    }

    return {
      t,
      skills
    };
  },
});

</script>