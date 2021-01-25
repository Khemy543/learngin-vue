<template>
  <v-container>
    <v-row>
      <v-col md="12" xl="12" lg="12" sm="12" xs="12">
        <v-card>
          <v-row no-gutters>
            <product  v-for ="product in products" v-bind:key="product.id"
              :image="'https://backend-api.martekgh.com/'+ product.product_image[0].path"
              :name="product.product_name"
              :price="product.price"
              :id='product.id'
            />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from '../components/Product.vue'
import axios from 'axios';

export default {
  components: {
    Product
  },
  data(){
    return{

    }
  },
  async asyncData ({ $axios }){
    const products = await $axios.get("https://backend-api.martekgh.com/api/2/product-index").then(res=>res.data[0]);
    return {products}
  }
}
</script>
