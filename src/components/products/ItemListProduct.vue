<template>
    <tr class="row-color-pair">
        <td><router-link :to="{ name: 'ThisProduct', params: { id: product.id } }">{{ product.id }}</router-link></td>
        <td>{{ product.title }}</td>
        <td class="no-tab">{{ product.quatity}}</td>
        <td class="no-tab">{{ product.price }}</td>
    </tr>
</template>

<script>
export default {
    name: 'ItemListProduct',
    props: {
        product: Object,
    },
}
</script>

<style>

</style>