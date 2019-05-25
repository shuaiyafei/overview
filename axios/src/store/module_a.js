const moduleA = {
  state: {
    count: 222,
    num: 123,
    name: 'test'
  },
  getters: {
    countGetters: (state) => {
      return state.count + 555;
    },
    numGetters: (state) => {
      return state.num + 1;
    },
    nameGetters: (state) => {
      return state.name.repeat(2);
    }
  },
  mutations: {
    increment (state, n) {
      state.count += n;
    },
    updateName (state, n) {
      setTimeout(() => {
        state.name = n;
      }, 2000);
    }
  },
  actions: {
    increment ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
};

export default moduleA;