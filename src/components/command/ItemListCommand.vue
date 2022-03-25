<template>
    <tr class="row-color-pair">
        <td><router-link :to="{ name: 'ThisCommand', params: { id: cart.id } }">{{ cart.id }}</router-link></td>
        <td>{{ cart.createAt }}</td>
        <td class="no-tab">{{ cart.quatityTotal}}</td>
        <td class="no-tab">{{ cart.user.lastName }} {{ cart.user.firstName }}</td>
        <td>{{ cart.delivery.type }}</td>
    </tr>
</template>

<script>
export default {
    name: 'ItemListCommand',
    props: {
        cart: Object,
    },
}
</script>

<style>

</style>