import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './module_a';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    a: moduleA
  }
});

export default store;
