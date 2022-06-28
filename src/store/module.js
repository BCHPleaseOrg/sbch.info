export const dataStore = {
    state: {
        blocks: [],
        address: null,
        // did: null,
        // email: null,

        // hasAuth: null,
        // magicUser: null,
        // profile: null,
    },
    getters: {
        isAdmin(_state) {
            if (
                _state.email === 'support@modenero.com'
                || _state.email === 'info@modenero.com'
                || _state.email === 'marc@falzon.co'
            ) {
                return true
            }

            return false
        },

        hasAuth(_state) {
            if (_state.magicUser !== null) {
                return true
            }

            return false
        },

    },
    actions: {
        async addBlock({ commit }, _block) {
            commit('saveBlock', _block)
        },

        async auth({ commit }, _address) {
            commit('saveAddress', _address)
        },

    },
    mutations: {
        saveBlock(_state, _block) {
            _state.blocks.push(_block)
        },

        saveAddress(_state, _address) {
            _state.address = _address
        },

    },
}
