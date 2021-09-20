<template>
    <main>
        <section class="text-center p-7">
            <h1 class="text-4xl font-extrabold">The smartBCH Blockchain Explorer</h1>

            <h3 v-if="blockNum" class="text-3xl font-medium text-pink-500">Block height is {{blockNumDisplay}}</h3>

            <h3 v-if="lastBlockTime" class="text-3xl font-medium text-pink-500">Last block was {{lastBlockDisplay}}</h3>
        </section>
    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'
import moment from 'moment'
import numeral from 'numeral'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            address: null,
            balance: null,
            blockNum: null,
            lastBlockTime: null,
        }
    },
    computed: {
        balanceDisplay() {
            if (!this.balance) {
                return 0.00
            }

            const balanceDisplay = ethers.utils.formatEther(this.balance)

            return numeral(balanceDisplay).format('0,0.0000[00]')

        },

        blockNumDisplay() {
            return numeral(this.blockNum).format('0,0')
        },

        lastBlockDisplay() {
            if (!this.lastBlockTime) {
                return 'n/a'
            }

            const diff = moment().unix() - this.lastBlockTime
            // console.log('DIFF', moment().unix(), this.lastBlockTime, diff);

            return diff + ' seconds ago'
        }

    },
    methods: {
        async init() {
            console.log('Initializing Nito Surf...')

            const rpcParams = {
                url: 'https://smartbch.devops.cash/mainnet',
            }

            const network = {
                name: 'smartBCH',
                chainId: 0x2710,
            }

            const provider = new ethers.providers.JsonRpcProvider(rpcParams, network)
            // console.log('PROVIDER', provider)

            this.address = '0x26d74B95b69aa0290a5603548D45b59580DC0A63'
            // console.log('ADDRESS', this.address)

            // const signature = await signer.signMessage("Hello World");
            // console.log('SIG', signature)
            // '0x3077d1b961d146d5a956e67495cbfcc2b6971c787690382ff85ef4403d96fee1625bb24fe54c69b628b6cb34d0a2cb3bdff10a635b66d76585db0dc378363c3c1c'

            setInterval(async () => {
                this.blockNum = await provider.getBlockNumber()
                // console.log('BLOCK NUM', this.blockNum)

                const block = await provider.getBlock(this.blockNum)
                // console.log('BLOCK', block)

                this.lastBlockTime = block.timestamp
                // console.log('LAST BLOCK TIME', this.lastBlockTime)
            }, 1000)


        },

    },
    created: function () {
        this.init()
    },
    mounted: function () {
        //
    },
}
</script>
