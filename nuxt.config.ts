// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

    app: {
      baseURL: '/'
    },

    apollo: {
        clients: {
          default: {
            httpEndpoint: //'https://graphql.contentful.com/content/v1/spaces/sq6uqle01nx2/explore?access_token=Qaqn5tNP2M0zJELl4RhWHUATsM7C4w9T4Vbxq9zQTdQ'
             'https://rickandmortyapi.com/graphql'
          }
        },
      },

      image: {
        domains: ['rickandmortyapi.com/']
      }
})
