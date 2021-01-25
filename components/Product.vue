<template>
    <v-col md="2" lg="2" xl="2" sm="6" xs="6">
        <div class="center" @click="$router.push(`/products/${id}`)">
            <v-img
                :src="image"
                contain
                height="150"
                width="150"
            ></v-img>
            <div class="overline">{{ name }}</div>
            <div class="overline">GH¢ {{ price }}</div>
        </div>
    </v-col>
</template>
<script>
export default{
    props:['name', 'price', 'image','id'],
    methods:{

    }
        
}
</script>
<style scoped>
.center{
    text-align: center;
    cursor: pointer;
}
</style>