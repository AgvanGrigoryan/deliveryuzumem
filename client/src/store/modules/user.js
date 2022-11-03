import axios from 'axios'

export default {
  actions: {
    async login({commit},email,password){
        const res = await axios.post('/auth/login',{email,password}).then(
            response => {
              return response
            })
          const user = await res
          commit('setUser', user)
      },
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  state: {
    user: null
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
}
