export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'try-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#CFB53B'
  },

  router:{
    middleware:[
      'clearValidationErrors'
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/mixins/validation.js',
    '~/plugins/mixins/user.js',
    '~/plugins/axios.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },

  //axios
  axios: {
    baseURL: 'https://backend-api.martekgh.com/api/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          name: 'Authorization',
          required: true,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token'},
          user: { url: 'auth/user', method: 'get', propertyName:false },
          logout: {url:'auth/logout', method:'post'}
        }
    }
  },
  
  resetOnError:true,

  fullPathRedirect:true,

  redirect:{
    login: '/auth/login',
    logout:'/',
    callback:'/auth/login',
    home:'/'
  }
},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    extend(config, ctx){}
  }
}
