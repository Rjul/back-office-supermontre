import cartRequest from '../../api/cartRequest'

const carts = {
    state: () => ({
        items: [],
        ready: false,
        checkoutStatus: null,
        cart: []
    }),
    getters: {

    },
    actions: {
        getAllCarts({ commit }) {
            cartRequest.get(carts => {
                console.log(carts)
                commit('setCarts', carts)
            })
        },
        getCartAction({ commit }, id) {
            commit('setCart', id)
        }
    },
    mutations: {
        setCarts(state, carts) {
            state.items = carts;
            this.commit('carts/isReady');
        },
        setCart(state, id) {
            console.log(id)
            console.log(state.items)
            Object.keys(state.items).find(element => {
                console.log(element)
                if (element == id){
                    state.cart = state.items[element]
                }
            });
        },
        isReady(state) {
            state.ready = true;
        }
    },
    namespaced: true,
}
export default carts