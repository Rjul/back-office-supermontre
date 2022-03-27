<template>
<div class="page-table-container">
    <h2 class="titlePage">Commande ref: {{ cart.id }}</h2>
    <div v-if="cart != [] && ready ">
        <article class="colone-2">
            <section class="item-card">
                <h3>Client</h3>
                <p>{{cart.user.lastName}} {{cart.user.firstName}}</p>
                <p>{{cart.user.adress}} {{cart.user.zipcode}} {{cart.user.city}}</p>
            </section>
            <section class="item-card">
                <h3>livraison Type</h3>
                <p>{{cart.delivery.type}}</p>
            </section>
        </article>
        <article class="colone-2">
            <section class="item-card">
                <h3>Status</h3>
                <p>status: {{cart.status}}</p>
                <p>Date: {{cart.createAt}}</p>
            </section>
            <section class="item-card">
                <h3>Information Commande</h3>
                <p>Prix: {{cart.priceTotal}}</p>
                <p>Quatités: {{cart.quatityTotal}}</p>
            </section>
        </article>
        <article class="colone-1">
            <section class="item-card">
                <h3 class="titlePage">Produits</h3>
                <table>
                    <thead>
                        <tr>
                            <th>REF</th>
                            <th>NOM</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody v-for="product in cart.products" :key="product.id" id="fakerOne">
                        <tr>
                            <td>{{ product.id }}</td>
                            <td class="no-tab">{{ product.name }}</td>
                            <td class="no-tab">{{ product.price }}</td>
                            <td>{{ product.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    </div>
</div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        console.log(route.params.id);
        const cart = computed(() => store.state.carts.cart);
        const ready = computed(() => store.state.carts.ready);
        if (ready.value == true){
            store.dispatch("carts/getCartAction", route.params.id);
        }
        return {
            cart,
            ready,
            route,
            store
        };
    },
    name: 'Command',
    watch: {
        ready: {
            // Watch change for product and verify the newValue is available
            handler(newValue, oldValue) {
                console.log(newValue, " ", oldValue);
                if ((newValue == true)) {
                console.log("here in if controle state for data");
                this.store.dispatch("carts/getCartAction", this.route.params.id);
                }
            },
        immediate: true,
        },
    },

}
</script>

<style scoped>
.page-table-container{
    width: 100%;
}
.titlePage{
    text-align: center;
}
.item-card{
    display: block;
    border: 2px grey solid;
    width: 100%;
}
.colone-2{
    margin: 10px 0 10px;
    display: flex;
    
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