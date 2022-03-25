<template>
  <header id="menu">
    <nav>
      <router-link :to="{ name: 'Command' }">
        <div class="btnNav">Commandes</div></router-link
      >
      <router-link :to="{ name: 'Products' }">
        <div class="btnNav">Produits</div></router-link
      >
      <router-link :to="{ name: 'Clients' }">
        <div class="btnNav">Clients</div></router-link
      >
      <a href="./#Other-WebSite-TMTC">
        <div class="btnNav">S-Montre</div>
      </a>
    </nav>
    <button id="btnMenu">
      <img class="btnMenu" src="..\public\assets\icon-menu.png" alt="" />
    </button>
  </header>
  <div id="container" class="page-table-container">
    <router-view />
  </div>

</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("carts/getAllCarts");
    store.dispatch("products/getAllProducts");
  },
  name: "App",
  components: {},
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app{
    display: flex;
    flex-direction: row;
    width: auto;
    overflow-x: hidden;
}
header{
    position: fixed;
    height: 100vh;
    width: 150px;
    padding-top: 10vh;
    background-color: rgb(14, 88, 138);
    z-index: 1;
}
header > nav{
    padding-right: 10px;

}
.btnNav{
    font-style: normal;
    transition: 1s;
    padding: 13px;
    /* border: coral 1px solid; */
    border-radius: 10px;
    color:rgb(206, 206, 206);
}
.btnNav:hover{
    background-color: rgba(190, 190, 190, 0.226);
    margin: 15px 10px 15px 10px;  
}
.btnMenu{
    position: fixed;
    top: 2px;
    left: 2px;
    width: 35px;
    padding: 3px;
    background-color: rgba(0, 247, 255, 0.719);
    border:rgb(206, 206, 206) 2px solid;
    border-radius: 10px;
    z-index: 1;
    text-align: center;
}
#container{
    display: flex;
    position: relative;
    width: calc(100vw - 150px);
    left: 150px;
    flex-direction: row;

}
canvas{
    box-sizing: inherit;
    width: 80%;
    margin: 5px;
}
@media all and (max-width: 600px) {
    #container{
        flex-direction: column;
    }
}
</style>
