import { createStore } from "vuex";
// モジュールごとにわける
import { count } from "./modules/count";
// アクションごとに沸ける
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export default createStore({
  state: {
    message: "",
  },
  getters,
  // stateを変更する場合はmutationを使うように心がける
  mutations,
  // 非同期処理用
  actions,
  modules: {
    count,
  },
});
