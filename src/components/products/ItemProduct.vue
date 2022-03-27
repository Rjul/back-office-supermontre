<template>
    <section id="container-form-produit-id" class='container-form-produit'>
        <form id="produit-form" action="#" method="post">
            <div class='form-row'>
                <div class='form-child-container'>
                    <img class='img-form' :src='product.imageUrl' alt="pre-visu">
                    <input class="input-produit input-standart" type="file" accept="image/*" name="img" id="" required>
                </div>
                <div class='form-child-container'>
                    <div class='form-child-container'>
                        <label for="name">Nom produit </label>
                        <input class="input-produit input-standart" :value="product.title" type="text" name="name" id="name" minlength="4" maxlength="20" required>
                    </div>
                    <div class='form-child-container'>
                        <label for="description">Description </label>
                        <textarea wrap="hard" form="produit-form" :value="product.description" class="input-standart input-area" name="description" id="description" minlength="20" maxlength="255" cols="40" rows="10" required></textarea>
                    </div>

                </div>
            </div>
            <div class='form-row'>
                <div class='form-child-container'>
                    <div class='form-child-container'>
                        <label for="name">Quantité </label>
                        <input class="input-produit input-standart" :value="product.quatity" type="number" min="1" name="name" id="name" required>
                    </div>
                </div>
                <div class='form-child-container'>
                    <div class='form-child-container'>
                        <label for="prix">Prix </label>
                        <input class="input-produit input-standart" :value="product.price" type="number" min="10" name="prix" id="prix" required>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <button onclick="cancelForm()" class="btn is-danger" type="reset">Annuler</button>
                <button class="btn is-success" type="submit">Enregistrer</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'ItemProduct',
    props: {
        product: Object,
    },
}
</script>

<style>
.container-form-produit{

    /* overflow: hidden; */
}.form-row{
    display: flex;
    flex-direction: row;
}

.form-child-container{
    background-color: rgba(0, 0, 0, 0.103);
    padding: 5px;
    margin: 5px;
}
.input-standart{
    border-radius: 5px;
    /* border: rgb(80, 79, 79) 3px solid; */
    background-color: rgb(233, 232, 231);
}
.input-standart:invalid{
    border: rgba(252, 0, 0, 0.74) 3px solid;
}
.input-standart:valid{
    border: rgba(0, 252, 21, 0.74) 3px solid;
}
.input-area{
    width: 100%;
    resize: none;
}
.input-produit{
    height: 20px;
    /* width: 100px; */
}
.img-form{
    width: 260px;
}
.btn-container{
    
    width: 200px;
    display: flex;
    justify-content: space-between;
}
.btn{
    width: 90px;
    height: 30px;
    border-radius: 5px;
    padding: 6px;
    background-color: rgba(255, 235, 205, 0.281);
    transition: 500ms;
}
.btn:hover{
    width: 95px;
    height: 35px;
    border-radius: 9px;
    padding: 6px;
    background-color: rgba(250, 214, 161, 0.281);
}
.is-success{
    background-color: rgb(185, 253, 116);
}
.is-danger{
    background-color: rgb(255, 87, 121);
}
.is-success:hover{
    background-color: rgb(143, 248, 37);
}
.is-danger:hover{
    background-color: rgb(255, 9, 58);
}


@media all and (min-width: 700px) {
    .btn-container{
        left: calc(650px / 2 - 100px);  
    }   
}
@media all and (max-width: 700px) {
    .container-form-produit{

    }
    .btn-container{
        position: relative;
        width: 180px;
        display: flex;
        justify-content: space-between;
    }
    .form-row{
        display: flex;
        flex-direction: column;
    }
}

</style>