import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import { dataStore } from './module'

const dataState = createPersistedState({
    paths: ['address']
})

export default createStore({
    modules: {
        dataStore,
    },
    plugins: [
        dataState,
    ],
})
