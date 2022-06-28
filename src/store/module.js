/* Import modules. */
import numeral from 'numeral'
import superagent from 'superagent'

const processedBlocks = []

export const dataStore = {
    state: {
        // endpoint: 'https://smartbch.devops.cash/mainnet',
        endpoint: 'https://smartbch.fountainhead.cash/mainnet',

        address: null,

        blocks: [],
        blockHeight: 0,
        // numTxsProcessed: 0,

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
        /**
         * Application Initialization
         *
         * Will perform functions to setup the app.
         */
        init({ state, dispatch }) {
            /* Set (blockchain) interval. */
            setInterval(() => {
                dispatch('refresh')
            }, 1000)

            setInterval(async () => {
                console.log('state.blockHeight', state.blockHeight);
                console.log('state.processedBlocks', processedBlocks.length, processedBlocks);
                console.log('state.blocks', state.blocks.length, state.blocks);
            }, 10000)
        },

        async addBlock({ state, commit }, _blockNum) {
            const blockNum = parseInt(_blockNum.slice(2), 16)
            console.info(`Block [ # ${numeral(blockNum).format('0,0')} ] is in the queue`)

            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_getBlockByNumber',
                params: [ _blockNum, false ],
            }
            // console.log('REQUEST', request)

            /* Make RPC request. */
            const response = await superagent
                .post(state.endpoint)
                .set('Content-Type', 'application/json')
                .send(request)
                .catch(err => console.error(err))
            // console.log('STATUS RESPONSE', response)

            /* Validate response. */
            if (!response) {
                throw new Error('Request failed to SmartBCH node.')
            }

            /* Set body. */
            const body = response.body
            // console.log('BODY (getBlock)', body)

            /* Set result. */
            const result = body.result

            /* Validate body result. */
            if (result && result.hash) {
                /* Add new block. */
                // state.blocks.push({
                //     index: ++numTxsProcessed,
                //     ...body.result,
                // })

                /* Add block to store. */
                commit('saveBlock', body.result)
            }

        },

        async refresh({ state, commit, dispatch }) {
            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_blockNumber',
            }

            /* Make RPC request. */
            const response = await superagent
                .post(state.endpoint)
                .set('Content-Type', 'application/json')
                .send(request)
                .catch(err => console.error(err))
            // console.log('STATUS RESPONSE', response)

            /* Validate response. */
            if (!response) {
                throw new Error('Request failed to SmartBCH node.')
            }

            /* Set body. */
            const body = response.body
            // console.log('BODY (getHeight)', body)

            /* Validate body result. */
            if (body && body.result) {
                const blockHeight = body.result


                if (!processedBlocks.includes(blockHeight)) {
                    processedBlocks.push(blockHeight)

                    commit('saveBlockHeight', blockHeight)

                    dispatch('addBlock', blockHeight)
                }
            }
        },

        async auth({ commit }, _address) {
            commit('saveAddress', _address)
        },

    },
    mutations: {
        saveAddress(_state, _address) {
            _state.address = _address
        },

        saveBlock(_state, _block) {
            // console.log('SAVING BLOCK', _block)

            const blockNum = parseInt(_block.number.slice(2), 16)
            console.info(`Block [ # ${numeral(blockNum).format('0,0')} ] has been processed`)

            _state.blocks.push(_block)
        },

        saveBlockHeight(_state, _height) {
            // console.log('SAVING BLOCK HEIGHT', _height)
            _state.blockHeight = _height
        },

    },
}
