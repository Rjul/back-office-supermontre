<template>
<div v-if="product" class="page-table-container">
    <h2 class="titlePage">Produit</h2>
        <ItemProduct
        :product="product"
        />
</div>
</template>

<script>
import ItemProduct from "../components/products/ItemProduct.vue"
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        store.dispatch("products/defineIdToView", route.params.id);
        const product = computed(() => store.state.products.product);
        const ready = computed(() => store.state.products.dataMounted);
        return {
            product,
            ready
        };
    },
    name: 'Products',
    components: {
        ItemProduct,
    },
}
</script>

<style>
.page-table-container{
    width: 100%;
}
.titlePage{
    text-align: center;
}
table {
    overflow-x: hidden;
    border-collapse: collapse;
    width: 97%;
    height: auto;
    border: rgba(3, 3, 3, 0.822) 3px solid;
}
.first-table{
    margin-top: 50px;
}
thead > tr > th {
    border: grey 2px solid;
}
tr{
    height: 20px;
}
td {
    margin: 0px 10px 0px 10px;
    border-left: grey 1px solid ;
    border-right: grey 1px solid ;
    padding: 3px;
}
.row-color-pair{
    background-color: rgb(230, 228, 228);
}
.tab-view{
    display: none;
}
@media all and (max-width: 600px) {
    .no-tab{
        display: none;
    }
    .tab-view{
        display: table;
    }
    
}
</style>