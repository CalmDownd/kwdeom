import { createStore } from 'vuex'

import axios from 'axios'
const store = createStore({
    state () {
      return {
        gedan: []
      }
    },
    mutations: {
      increment (state,a) {
        state.gedan = a
        console.log(state.gedan)
      }
    },
    actions:{
      async axiosGetgd({commit}){
        let {data} = await axios.get('http://101.43.173.17:9090/api/www/classify/playlist/getRcmPlayList?pn=1&rn=5&order=hot')
        commit('increment',data.data.data)
    }
    }
  })

  export default store