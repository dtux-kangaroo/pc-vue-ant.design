import { API } from "@/api/index.js";


const global = {
  state: {
    navData:[]
  },
  mutations: {
    GET_NAV_DATA: (state, data) => {
      state.navData = data;
    }
  },
  actions: {
    getNavData({ commit }, params,cb) {
      API.getNavData({}).then(ret=>{
        commit('GET_NAV_DATA', ret.data.topNav||[]);
      })
   }
  }
}

export default global
