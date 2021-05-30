import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            title: "TODO one"
        },
        {
            id: 2,
            title: "TODO two"
        },
    ]
}

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data)
    }
}

const getters = {
    allTodos: (state) => state.todos
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
}

export default {
    state,
    actions,
    getters,
    mutations,
}