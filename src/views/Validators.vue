<template>
    <main class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>

        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    SmartBCH Validators
                </h2>

                <p class="mt-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 sm:mt-4">
                    The trusted group of companies, individuals and stakeholders responsible for verifying transactions on the SmartBCH blockchain.
                </p>
            </div>

            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                <div v-for="validator of validators" :key="validator.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" :src="validator.banner" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="javascript://" class="hover:underline">
                                    {{validator.account}}
                                </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{validator.title}}
                                </p>

                                <small>
                                    {{validator.cat}}
                                    <span class="text-gray-700">( {{validator.numVotes || 'Unknown' }} votes )</span>
                                </small>

                                <p class="mt-3 text-base text-gray-500">
                                    {{validator.description}}
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a v-if="validator.web" :href="validator.web" target="_blank">
                                    <span class="sr-only">{{validator.title}}</span>

                                    <img class="h-10 w-10 rounded-full border-2 border-gray-300 shadow-lg" :src="validator.avatar" alt="" />
                                </a>
                                <a v-else>
                                    <span class="sr-only">{{validator.title}}</span>

                                    <img class="h-10 w-10 rounded-full border-2 border-gray-300 shadow-lg" :src="validator.avatar" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a v-if="validator.web" :href="validator.web" target="_blank" class="hover:underline">
                                        {{validator.title}}
                                    </a>
                                    <a v-else class="">
                                        {{validator.title}}
                                    </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <a v-if="validator.web" :href="validator.web" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Web
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Web
                                    </a>

                                    <span class="mx-2 text-gray-500">|</span>

                                    <a v-if="validator.twitter" :href="validator.twitter" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Twitter
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Twitter
                                    </a>

                                    <span class="mx-2 text-gray-500">|</span>

                                    <a v-if="validator.readCash" :href="validator.readCash" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Read.cash
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Read.cash
                                    </a>

                                    <span v-if="validator.blog" class="mx-2 text-gray-500">|</span>

                                    <a v-if="validator.blog" :href="validator.blog" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
/* Import components. */
// import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            validators: null,
        }
    },
    created: function () {
        /* Initialize validators. */
        this.validators = []

        this.validators.push({
            id: 'b338d8c1-1198-40b1-9b79-0b533d1f9b0f',
            title: `Satoshi's Angels`,
            cat: 'XHedge Elected',
            account: '0x3ED12Ca3cA7049Ca852667130CA2291A19BAD0E4',
            description: `We’re a team of strong crypto-community builders and educators, who are passionate to bring crypto to the masses. We offer professional and scalable marketing and community management services with a hands-on and organic approach.`,
            numVotes: null,
            avatar: 'https://i.imgur.com/0vL3kW9.png',
            banner: 'https://i.imgur.com/DIdl5TQ.jpg',
            web: 'https://www.satoshisangels.com/',
            twitter: 'https://twitter.com/SatoshiAngels',
            blog: 'https://www.satoshisangels.com/blog',
            readCash: 'https://read.cash/@SatoshisAngels',
        })

        this.validators.push({
            id: '1a3ac274-f381-4078-a79b-acdbf69cefd7',
            title: `ViaBTC`,
            cat: 'Miner Elected',
            account: '0x4bc2dbe39a961d568a33593b36ab2f5c9331fba5',
            description: `ViaBTC serves users in 130+ countries around the world with tens of billions of dollars in cumulative mining output value, and provides professional mining service for BTC, ETH, LTC, etc.`,
            numVotes: 569,
            avatar: 'https://i.imgur.com/LBncDdj.png',
            banner: 'https://i.imgur.com/8Z02k4g.png',
            web: 'https://www.viabtc.com/',
            twitter: 'https://twitter.com/ViaBTC',
            blog: 'https://support.viabtc.com/hc/en-us/categories/900000122943',
        })

        this.validators.push({
            id: 'adbb225c-0338-4acb-bf3e-c123cdbbfeb3',
            title: `BTC.com`,
            cat: 'Miner Elected',
            account: '0x930c23ce7536b0ede6afe7754134d4011217d6aa',
            description: `BTC.com explorer provides an easy to search block,transaction,address, and insights blockchain data stats.`,
            numVotes: 95,
            avatar: 'https://i.imgur.com/DihspfO.png',
            banner: 'https://i.imgur.com/RKQ0JHP.png',
            web: 'https://btc.com/',
            twitter: 'https://twitter.com/btccom_official',
            blog: 'https://blog.btc.com/',
        })

        this.validators.push({
            id: '583f5f7d-cc52-4a70-89b1-d38fcc122f16',
            title: `Matrixport`,
            cat: 'Miner Elected',
            account: '0x8bd806107e294e7046580d5db0830035ca621631',
            description: `Matrixport is a one-stop digital assets financial services platform where users can invest, trade, and leverage crypto assets.`,
            numVotes: 39,
            avatar: 'https://i.imgur.com/wPkcnAR.png',
            banner: 'https://i.imgur.com/PDChq0H.png',
            web: 'https://www.matrixport.com/',
            twitter: 'https://twitter.com/realMatrixport',
            blog: 'https://www.matrixport.com/blog',
        })

        this.validators.push({
            id: '6b10ec15-e342-4584-842d-6396f22dc754',
            title: `Anonymous`,
            cat: 'Miner Elected',
            account: '0x8a3b04db500735e05a1cd05ed9e00176954d8438',
            description: `There is currently no additional information available about this validator.`,
            numVotes: 27,
            avatar: 'https://i.imgur.com/ID2X4F8.png',
            banner: 'https://i.imgur.com/kC0cu8E.png',
        })

    },
    mounted: function () {
        //
    },
}
</script>
