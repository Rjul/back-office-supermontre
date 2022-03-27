<template>
<div class="page-table-container">
    <h2 class="titlePage">Liste Produits</h2>
    <router-link :to="{ name: 'CreateProduct' }">CREATE</router-link>
    <table>
        <thead>
            <tr>
                <th>Ref :</th>
                <th>Nom</th>
                <th class="no-tab">Quantité</th>
                <th class="no-tab">Prix</th>
            </tr>
        </thead>
        <tbody  :v-if="products != undefined || products != null">
            <ItemListProduct
            v-for="product in products"
            :key="product.id"
            :product="product" 
            />
        </tbody>
    </table>
</div>
</template>

<script>
import ItemListProduct from "../components/products/ItemListProduct.vue"
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();
        const products = computed(() => store.state.products.productsStored);
        const ready = computed(() => store.state.products.dataMounted);
        return {
            products,
            ready
        };
    },
    name: 'Products',
    components: {
        ItemListProduct,
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