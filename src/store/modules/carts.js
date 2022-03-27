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
                console.log(carts);
                commit('setCarts', carts);
            })
        },
        getCartAction({ commit }, id) {
            commit('setCart', id);
        },
        getCartsByUserId({ commit }, id) {
            commit('cartsByUserId', id);
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
        },
        cartsByUserId(state, userId) {
            let commandByUser = [];
            Object.keys(state.items).forEach(key => {
                if (state.items[key].user.id == userId) {
                    commandByUser.push(state.items[key]) 
                }
            })
            state.commandByUser = commandByUser;
        }
    },
    namespaced: true,
}
export default carts