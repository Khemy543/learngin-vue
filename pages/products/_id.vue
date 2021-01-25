<template>
    <h3>my product</h3>
</template>
<script>
export default {
    async asyncData({ $axios, params }){
        const data  = await $axios.get(`https://backend-api.martekgh.com/api/product/${params.id}/details`)
        return {data}
    }
}
</script>