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
  <div class="page-table-container">
    <router-view />
  </div>

</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>

</style>
