<template>
    <tr class="row-color-pair">
        <td><router-link :to="{ name: 'ThisClient', params: { id: user.id } }">{{ user.id }}</router-link></td>
        <td>{{ user.firstName }}</td>
        <td class="no-tab">{{ user.lastName}}</td>
        <td class="no-tab">{{ user.adress }} {{ user.zipcode }}</td>
        <td>{{ user.city }}</td>
    </tr>
</template>

<script>
export default {
    name: 'ItemListUser',
    props: {
        user: Object,
    },
}
</script>

<style>

</style>