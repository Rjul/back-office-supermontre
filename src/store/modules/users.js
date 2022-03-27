import usersRequest from '../../api/usersRequest'

const users = {
    state: () => ({
        items: [],
        ready: false,
        checkoutStatus: null,
        user: []
    }),
    getters: {

    },
    actions: {
        getAllUsers({ commit }) {
            usersRequest.get(users => {
                console.log(users)
                commit('setUsers', users)
            })
        },
        getCartAction({ commit }, id) {
            commit('setUser', id)
        }
    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
            this.commit('users/isReady');
        },
        setUser(state, id) {
            console.log(id)
            console.log(state.items)
            Object.keys(state.items).find(element => {
                console.log(element)
                if (element == id){
                    state.user = state.items[element]
                }
            });
        },
        isReady(state) {
            state.ready = true;
        }
    },
    namespaced: true,
}
export default users