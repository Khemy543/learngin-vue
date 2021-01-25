<template>
  <v-container>
    <v-row>
      <v-col md="5" class="mx-auto mt-10">
        <v-card class="py-8 px-8">
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
            <v-text-field
              v-model="form.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="show = !show"
            ></v-text-field>
            <v-btn
              type="submit"
              color="info"
              class="mr-4 mt-5"
            >
              Login
            </v-btn>
            <NuxtLink to="/auth/register">
            <h5 text>Create Account</h5>
            </NuxtLink>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware : ['guest'],
  data() {
    return {
     form:{
       email:"",
       password:""
     },
     show:false,
     valid:false
    };
  },

  methods: {
    async login(){
      try{
        await this.$auth.login({data:this.form});

      }catch(error){
        console.log(error)
      }
    }
  },
};
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>