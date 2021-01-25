<template>
  <v-container>
    <v-row>
      <v-col md="5" class="mx-auto mt-10">
        <v-card class="py-8 px-8">
          {{errors}}
          <v-card-title>Create Account</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
              <v-text-field
              v-model="form.name"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.phone"
              :rules="phoneRules"
              label="Phone"
              required
            ></v-text-field>

            <v-autocomplete
              ref="campus"
              v-model="form.campus_id"
              :items="campuses"
              label="Campus"
              placeholder="Select..."
              item-text="campus"
              item-value="id"
              required
          ></v-autocomplete>

            <v-text-field
              v-model="form.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="show = !show"
            ></v-text-field>

            <v-text-field
              v-model="form.confirmpassword"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Comfirm Password"
              @click:append="show = !show"
            ></v-text-field>

            <v-btn
              type="submit"
              color="info"
              class="mr-4 mt-5"
            >
              Create Account
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: ['guest'],
  data() {
    return {
      valid: false,
      show: false,
      form:{
        email: "",
        password: "",
        name:"",
        phone:"",
        campus_id:"",
        confirmpassword:"",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      nameRules: [(v) => !!v || "Name is required"],
      phoneRules: [(v) => !!v || "Phone is required"],
      confirmpasswordRules: [(v) => !!v || "Confirm Password is required"],
    };
  },
  methods: {
    async register(){
      try{
        await this.$axios.post('/register-user', this.form);
        this.$auth.login({data : this.form});
      }catch(err){
        console.log(err)
      }
    }
  },
  async asyncData({ $axios }){
    const campuses =  await $axios.get('https://backend-api.martekgh.com/api/campuses').then(res=>res.data);
    return {campuses}
  }
};
</script>