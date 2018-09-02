import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: true,
  plugins: [createLogger()]
});
