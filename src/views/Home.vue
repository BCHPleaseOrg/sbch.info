<template>
    <main class="max-w-7xl mx-auto">
        <Stats />

        <section class="text-center mx-4 grid grid-cols-2 gap-4 md:flex">
            <div v-if="blockNum" class="md:w-2/5 mx-auto mt-5 flex justify-center py-3 px-3 md:px-7 bg-purple-200 text-xl md:text-3xl font-medium text-pink-500 border-4 border-purple-500 rounded-xl">
                Block height is {{blockNumDisplay}}
            </div>

            <div v-if="lastBlockTime" class="md:w-2/5 mx-auto mt-5 flex justify-center py-3 px-3 md:px-7 bg-purple-200 text-xl md:text-3xl font-medium text-pink-500 border-4 border-purple-500 rounded-xl">
                Last block was {{lastBlockDisplay}}
            </div>
        </section>

        <section class="mt-10 flex flex-col md:grid md:grid-cols-3 gap-4">
            <div class="flex flex-row justify-center col-span-2 border-r-2 border-gray-200">
                <div class="px-10">
                    <h3 class="text-xl text-gray-700 font-bold">
                        We're still buidling our new portal, but checkout what's coming soon:
                    </h3>

                    <ul class="list-disc list-inside pl-5 pt-3">
                        <li>Token &amp; NFT Asset Management</li>
                        <li>Token &amp; NFT Reports</li>
                        <li>Historical Stats &amp; Charts</li>
                        <li>Statistical Chart Analysis</li>
                    </ul>
                </div>
            </div>

            <div class="my-10 md:my-0 px-5 flex flex-row justify-center">
                <img :src="require('@/assets/lottie/60365-stock.gif')" class="col-span-1 w-64 h-64" />
                <!-- <img :src="require('@/assets/lottie/74398-analyze-illustration.gif')" class="w-64 h-64" /> -->
            </div>
        </section>

    </main>

    <Details class="hidden" />
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'
import moment from 'moment'
import numeral from 'numeral'

/* Import components. */
import Details from '@/components/Details'
import Stats from '@/components/Stats'

export default {
    components: {
        Details,
        Stats,
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
            console.log('Initializing SmartBCH Info...')

            const rpcParams = {
                // url: 'https://smartbch.devops.cash/mainnet',
                url: 'https://smartbch.fountainhead.cash/mainnet',
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
