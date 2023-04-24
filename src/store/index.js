import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from '../services/index.js'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        clickedPack:{},
        packList: null,

    }, 
    mutations:{
        MutClickedPack(state, payload){
            state.clickedPack = payload;
        },

        MutPacksList(state, payload){
            state.packList = payload;
         },
        
        
    },
    actions:{
        getPacksList({commit}){
            axios.get(`/product`)
            .then((response) => {
                let dan = [];
               commit("MutPacksList", response.data.data);
            })
            .catch((error) => {
               if (error.response.status == 401) {
               commit("mutLogin", false);
               localStorage.clear();
               }
            });
         },
    },


    getters: {
         retpackList(state){
            return state.packList || [];
         },
         
         
       }
})