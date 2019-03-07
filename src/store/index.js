import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    newTodo: '',
    todos: [],
    newSubtask: '',
    showSidebar: false,
    subtasks: [],
    history: []
};

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

if (module.hot) {
    module.hot.accept([
	'./getters',
        './mutations'
    ], () => {
	store.hotUpdate({
            getters: require('./getters'),
            mutations: require('./mutations')
	})
    })
}

export default store;
