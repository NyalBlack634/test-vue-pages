const state = {
  count: 2,
};

const getters = {
  doubleCount: (state) => state.count * 2,
};

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};

const actions = {
  increment({ commit }, number) {
    // context.commit("increment", number);
    commit("increment", number);
  },
  decrement({ commit }, number) {
    commit("decrement", number);
  },
  incrementAsync(context, number) {
    setTimeout(() => {
      context.commit("increment", number);
    }, 1000);
  },
};

export const count = {
  namespaced: true, // 名前が衝突しても大丈夫なように
  state,
  getters,
  mutations,
  actions,
};
