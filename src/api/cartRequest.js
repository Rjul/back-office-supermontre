
export default {
    get(carts) {
        function getCarts() {
            return fetch("http://localhost:8080/fake-data/carts.json", {
                method: "GET",
                mode: 'cors'
            }, true)
                .then(function (response) {
                    console.log(response);
                    return response.json();
                })
                .catch(function (response) {
                    console.error(response);
                });
        }

        getCarts().then((cartsRow) => carts(cartsRow));

    }
}
