import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import frcontact from './locales/fr/contact.json'
import encontact from './locales/en/contact.json'
import frdistinctions from './locales/fr/distinctions.json'
import endistinctions from './locales/en/distinctions.json'
import freducation from './locales/fr/education.json'
import eneducation from './locales/en/education.json'
import frexperience from './locales/fr/experience.json'
import enexperience from './locales/en/experience.json'
import frhero from './locales/fr/hero.json'
import enhero from './locales/en/hero.json'
import frskills from './locales/fr/skills.json'
import enskills from './locales/en/skills.json'
import frnavbar from './locales/fr/navbar.json'
import ennavbar from './locales/en/navbar.json'
import frportfolio from './locales/fr/portfolio.json'
import enportfolio from './locales/en/portfolio.json'
import frfooter from './locales/fr/footer.json'
import enfooter from './locales/en/footer.json'


// internationalization configurations
const i18n = createI18n({
    locale: 'fr',
    messages: {
        fr: {
            contact: frcontact,
            distinctions: frdistinctions,
            education: freducation,
            experience: frexperience,
            hero: frhero,
            skills: frskills,
            navbar: frnavbar,
            portfolio: frportfolio,
            footer: frfooter
        },
        en: {
            contact: encontact,
            distinctions: endistinctions,
            education: eneducation,
            experience: enexperience,
            hero: enhero,
            skills: enskills,
            navbar: ennavbar,
            portfolio: enportfolio,
            footer: enfooter
        }
    }
})

createApp(App).use(i18n).mount('#app')
