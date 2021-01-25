<template>
  <v-app>
    <appbar/>
    <v-main class="grey lighten-3">
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Appbar from '../components/Appbar.vue'
export default {
  components: { Appbar },
  
}
</script>
