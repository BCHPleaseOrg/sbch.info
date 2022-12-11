<template>
    <main class="relative py-8 bg-white overflow-hidden">

        <div class="flex relative z-10 justify-center mt-5 mb-10">
            <span class="relative inline-flex shadow-sm rounded-md">
                <button
                    @click="showIntro"
                    type="button"
                    class="lg:hidden relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-500 bg-gray-100 text-xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Intro
                </button>
                <button
                    @click="showIntro"
                    type="button"
                    class="hidden relative lg:inline-flex items-center px-4 py-2 rounded-l-md border border-gray-500 bg-gray-100 text-2xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Introduction
                </button>

                <button
                    @click="showVoting"
                    type="button"
                    class="lg:hidden -ml-px relative inline-flex items-center px-4 py-2 border border-gray-500 bg-gray-100 text-xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Voting
                </button>
                <button
                    @click="showVoting"
                    type="button"
                    class="hidden -ml-px relative lg:inline-flex items-center px-4 py-2 border border-gray-500 bg-gray-100 text-2xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Validator Voting
                </button>

                <button
                    @click="showStats"
                    type="button"
                    class="lg:hidden -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-500 bg-gray-100 text-xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Stats
                </button>
                <button
                    @click="showStats"
                    type="button"
                    class="hidden -ml-px relative lg:inline-flex items-center px-4 py-2 rounded-r-md border border-gray-500 bg-gray-100 text-2xl font-medium text-gray-700 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    Charts &amp; Stats
                </button>
            </span>
        </div>

        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">

            <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">

                <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>

                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>

                <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>

                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>

                <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>

                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
            </div>
        </div>

        <Intro v-if="tab === 'intro'" />
        <Stats v-if="tab === 'stats'" />
        <Voting v-if="tab === 'voting'" />
    </main>
</template>

<script>
/* Import components. */
import Intro from './XHedge/Intro'
import Stats from './XHedge/Stats'
import Voting from './XHedge/Voting'

export default {
    components: {
        Intro,
        Stats,
        Voting,
    },
    data: () => {
        return {
            tab: null,
        }
    },
    methods: {
        showIntro() {
            this.tab = 'intro'
        },

        showVoting() {
            this.tab = 'voting'
        },

        showStats() {
            this.tab = 'stats'
        },

    },
    created: function () {
        this.tab = 'intro'
    },
    mounted: function () {
        //
    },
}
</script>
