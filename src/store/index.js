import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from '../services/index.js'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        clickedPack:{},
        isSent:{},
        packList: null,

    }, 
    mutations:{
        MutClickedPack(state, payload){
            state.clickedPack = payload;
            // console.log("la place est ok ", state.clickedPack)
        },
        ValidationReserve(state, payload){
            state.isSent = payload;
            console.log("voir le content ok ", state.isSent)
        },


        MutPacksList(state, payload){
            state.packList = payload;
         },
        
        
    },
    actions:{
        getPacksList({commit}){
            axios.get(`/product`)
            .then((response) => {
                console.log("Nos product ", response);
                let dan = [];
                console.log("Yop les noussi ", dan[2]);
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