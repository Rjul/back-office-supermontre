<template>
<div class="page-table-container">
    <h2 class="titlePage">Liste Commandes</h2>
    <table>
        <thead>
            <tr>
                <th colspan="3">IDENTIFICATION</th>
                <th colspan="2" class="no-tab">CLIENT</th>
            </tr>
            <tr>
                <th>Ref :</th>
                <th>Date</th>
                <th class="no-tab">Nb de produit</th>
                <th class="no-tab">Nom</th>
                <th>Type livraison</th>
            </tr>
        </thead>
        <tbody :v-if="ready">
            <ItemListCommand
            v-for="cart in carts"
            :key="cart.id"
            :cart="cart" 
            />
        </tbody>
    </table>
</div>
</template>

<script>
import ItemListCommand from "../components/command/ItemListCommand.vue"
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();
        const carts = computed(() => store.state.carts.items);
        const ready = computed(() => store.state.carts.ready);
        return {
            carts,
            ready
        };
    },
    name: 'Command',
    components: {
        ItemListCommand,
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