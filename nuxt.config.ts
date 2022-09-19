import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Awecode',
  },
  modules: ['@nuxt/content'],
  meta: {
    // script: [
    //   {
    //     src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    //   },
    //   {
    //     src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
    //   },
    //   {
    //     src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
    //   },
    // ],
    link: [
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
      // },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Titillium+Web',
      },
    ],
  },
})
