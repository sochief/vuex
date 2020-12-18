export default {
  state: {
    counter: 0
  },
  getters: {
    computerCounter(state) {
      return state.counter * (7 - 2 * (5 + 4));
    }
  },
  //dont pass asynch to mutations, pass only in actions
  mutations: {
    changeCounter(state, payload) {
      state.counter += payload;
    }
  },
  //   here we are working with database
  actions: {
    asynchCHangeCounter({ commit }, payload) {
      setTimeout(() => {
        commit("changeCounter", payload.counterValue);
      }, payload.timeoutDelay);
    }
  }
};
