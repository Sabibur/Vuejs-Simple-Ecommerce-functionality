export const storage = {
    state: {
        inventory:[],
        cart:[],
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        }
    },
    mutations: {
        setInven(state, payload) {
            state.inventory = payload
        },
        addtoCart(state, payload) {
            state.cart.push(payload)
        },
        rmvtoCart(state, payload) {
            state.cart.splice(payload, 1)
        },
        clrcart(state, payload) {
            state.cart = []
        },
        
       
    }
}
