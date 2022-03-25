import { createStore, createLogger } from 'vuex'
import carts from './modules/carts'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        carts: carts,
        products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})