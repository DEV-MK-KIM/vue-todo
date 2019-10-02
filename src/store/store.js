import Vue from "vue";
import Vuex from "vuex";
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          /*
                  localStorage.key(index)로 해당 밸류를 get 함 (value의 type: string)
                  JSON.parse를 이용해서 object로 변환시키고 todoitems array에 push함.
                  */

          //   this.todoItems.push(
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //this.todoItems.push(localStorage.key(i));
      }
    }
    return arr; // todoitems
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters,
  mutations
});
