<template>
<div class="page-table-container">
    <h2 class="titlePage">Liste Clients</h2>
    <table v-if="stateOf == false">
        <thead>
            <tr>
                <th>Ref :</th>
                <th>Prenom</th>
                <th class="no-tab">Nom</th>
                <th class="no-tab">Adresse</th>
                <th>Ville</th>
            </tr>
        </thead>
        <tbody v-if="ready">
            <ItemListUser
            v-for="user in users"
            :key="user.id"
            :user="user" 
            />
        </tbody>
        </table>
        <table v-if="stateOf == true">
            <thead>
                <tr>
                    <th>Ref :</th>
                    <th>Prenom</th>
                    <th class="no-tab">Nom</th>
                    <th class="no-tab">Adresse</th>
                    <th>Ville</th>
                </tr>
            </thead>
            <tbody v-if="ready">
                <ItemListUser
                :key="userSelected.id"
                :user="userSelected" 
                />
            </tbody>
        </table>
        <h3 class="titlePage">Commandes</h3>
        <table v-if="stateOf == true">
            <thead>
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
                v-for="cart in userSelectedCarts"
                :key="cart.id"
                :cart="cart" 
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import ItemListUser from "../components/users/ItemListUser.vue";
import ItemListCommand from "../components/command/ItemListCommand.vue"
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        var stateOf;
        const users = computed(() => store.state.users.items);
        const userSelected = computed(() => store.state.users.user);
        const userSelectedCarts = computed(() => store.state.carts.commandByUser);
        const ready = computed(() => store.state.users.ready);
        const routeParam = computed(() => route.params.id)
        if (ready.value == true && route.params.id != undefined){
            store.dispatch("users/getUserAction", route.params.id);
            stateOf = true;
        }else{
            stateOf = false;
        }
        return {
            store,
            route,
            users,
            ready,
            stateOf,
            userSelected,
            userSelectedCarts,
            routeParam
        };
    },
    name: 'Clients',
    components: {
        ItemListUser,
        ItemListCommand
    },
    watch: {
        ready: {
            // Watch change for product and verify the newValue is available
            handler(newValue) {
                if ((newValue == true && this.routeParam )) {
                this.store.dispatch("users/getUserAction", this.route.params.id);
                }
            },
        immediate: true,
        },
        routeParam: {
            // Watch change for product and verify the newValue is available
            handler(newValue) {
                if ((newValue != undefined)) {
                    this.store.dispatch("users/getUserAction", this.route.params.id);
                    this.stateOf = true;
                }else{
                    this.stateOf = false;
                }
            },
        immediate: true,
        },
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