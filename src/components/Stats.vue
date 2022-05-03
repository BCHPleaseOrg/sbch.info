<template>
    <main class="">

        <dl class="mt-5 mx-4 grid grid-cols-1 rounded-lg bg-yellow-100 overflow-hidden shadow divide-y divide-gray-500 md:grid-cols-3 md:divide-y-0 md:divide-x">
            <div class="px-4 py-5 sm:p-6">
                <dt class="text-xl font-normal text-gray-700">
                    SmartBCH Price
                </dt>

                <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                        {{displayPrice}}
                        <span class="ml-2 text-sm font-medium text-gray-500">
                            / USD
                        </span>
                    </div>

                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                        <!-- Heroicon name: solid/arrow-sm-up -->
                        <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        1.43%
                    </div>
                </dd>
            </div>

            <div class="px-4 py-5 sm:p-6">
                <dt class="text-xl font-normal text-gray-700">
                    Market Cap
                </dt>

                <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div class="flex flex-col items-baseline text-2xl font-semibold text-indigo-600">
                        $5,443,910,909

                        <span class="block ml-2 text-sm font-medium text-gray-500">
                            Rank #24
                        </span>
                    </div>

                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                        <!-- Heroicon name: solid/arrow-sm-up -->
                        <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        1.48%
                    </div>
                </dd>
            </div>

            <div class="px-4 py-5 sm:p-6">
                <dt class="text-xl font-normal text-gray-700">
                    24 Hour Volume
                </dt>

                <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div class="flex flex-col items-baseline text-2xl font-semibold text-indigo-600">
                        $4,231,633,326

                        <span class="block ml-2 text-sm font-medium text-gray-500">
                            Volume / Cap -> 0.7775
                        </span>
                    </div>

                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                        <!-- Heroicon name: solid/arrow-sm-down -->
                        <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        1.05%
                    </div>
                </dd>
            </div>

        </dl>
    </main>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'
import superagent from 'superagent'

/* Import components. */
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            usd: null,
        }
    },
    computed: {
        displayPrice() {
            if (!this.usd) return '$0.00'

            return numeral(this.usd).format('$0.00')
        },

    },
    methods: {
        async init() {
            const response = await superagent.get('https://api.telr.io/v1/ticker/quote/BCH')
            // console.log('STATUS RESPONSE', response)

            const body = response.body
            // console.log('BODY', body)

            if (body.price) {
                this.usd = body.price

            }

        },

    },
    created: function () {
        /* Initialization. */
        this.init()

    },
    mounted: function () {
        //
    },
}
</script>
