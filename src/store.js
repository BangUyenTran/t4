import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        update(state, dataUpdate) {
            state.data = dataUpdate
        }
    },
    actions: {
        getData(context) {
            axios.get("https://mocki.io/v1/6e876c98-40d1-48b6-afc8-5009b9ae49fc").then((res) => { context.commit('update', res.data) })
        }
    }

})

