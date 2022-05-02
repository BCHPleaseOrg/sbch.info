<template>
    <main class="bg-white overflow-hidden">

        <section class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
            <svg class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                    <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>

                <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
            </svg>

            <svg class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                <defs>
                    <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>

                <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
            </svg>

            <div class="relative lg:flex lg:items-center">
                <div class="hidden lg:block lg:flex-shrink-0">
                    <img class="h-64 w-64 rounded-full xl:h-80 xl:w-80" :src="topSponsor.avatar" alt="" />
                </div>

                <div class="relative lg:ml-10">
                    <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                        <path
                            stroke-width="2"
                            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                        />
                    </svg>

                    <blockquote class="relative">
                        <div class="text-2xl leading-9 font-medium text-gray-900">
                            <p>
                                {{topSponsor.pledge.comment}}
                            </p>
                        </div>

                        <footer class="mt-8">
                            <div class="flex">
                                <div class="flex-shrink-0 lg:hidden">
                                    <img class="h-20 w-20 rounded-full" :src="topSponsor.avatar" alt="" />
                                </div>

                                <div class="ml-4 lg:ml-0">
                                    <div class="my-2 text-2xl font-medium text-gray-900">{{topSponsor.name}}</div>

                                    <a v-if="topSponsor.pledge.url" :href="topSponsor.pledge.url" target="_blank" class="text-blue-500 text-2xl hover:underline">
                                        {{topSponsor.pledge.amount}} via {{topSponsor.pledge.platform}}
                                    </a>
                                    <a v-else class="text-gray-500 text-2xl">
                                        {{topSponsor.pledge.amount}} via {{topSponsor.pledge.platform}}
                                    </a>

                                    <div class="mt-1 text-sm text-gray-500 italic text-right">
                                        - {{when(topSponsor.pledge.dateAdded)}}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>

        <section class="bg-white">
            <div class="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
                <div class="space-y-8 sm:space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Our Wonderful Sponsors
                        </h2>

                        <p class="px-2 md:px-20 text-base md:text-xl text-gray-500">
                            We couldn't do what we do without the support of the incredible Bitcoin Cash community.
                        </p>
                    </div>

                    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                        <li v-for="sponsor of sponsors" :key="sponsor.id">
                            <div class="space-y-4">
                                <img
                                    class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                                    :src="sponsor.avatar"
                                    alt=""
                                />
                                <div class="space-y-2">
                                    <div class="text-xs font-medium lg:text-sm">
                                        <h3>
                                            {{sponsor.name}}
                                        </h3>

                                        <a v-if="sponsor.pledge.url" :href="sponsor.pledge.url" target="_blank" class="text-blue-500 text-xs hover:underline">
                                            <span class="text-base">
                                                {{sponsor.pledge.amount}}
                                            </span>

                                            <span class="block">
                                                via {{sponsor.pledge.platform}}
                                            </span>
                                        </a>
                                        <a v-else class="text-gray-500 text-xs">
                                            <span class="text-base">
                                                {{sponsor.pledge.amount}}
                                            </span>

                                            <span class="block">
                                                via {{sponsor.pledge.platform}}
                                            </span>
                                        </a>

                                        <small class="text-gray-500">
                                            {{when(sponsor.pledge.dateAdded)}}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>

        <section class="mt-10 max-w-3xl mx-auto">
            <div class="mx-12 sm:mx-16 p-3 border-2 border-yellow-400 shadow-xl bg-yellow-50 text-yellow-700 text-xs sm:text-sm text-center rounded-xl">
                <span class="block">We will showcase <strong>EVERY</strong> supporter than donates <strong>$5 or more</strong> on our respective sponsor pages.</span>
                <span class="mt-3 block">Sponsors will always be listed in the order of their first donation.</span>
                <span class="mt-3 block">Sponsors may increase the value of their donation at any time.</span>
                <span class="mt-3 block">The <strong>TOP</strong> sponsor will be featured prominently at the head of our Sponsors page.</span>
            </div>
        </section>

    </main>
</template>

<script>
/* Import methods. */
import moment from 'moment'

/* Import components. */
// import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            sponsors: null,
            topSponsorId: null,
        }
    },
    computed: {
        topSponsor() {
            return this.sponsors[this.topSponsorId]
        },

        topAvatar() {
            return this.sponsors[this.topSponsorId].avatar
        },

        topCommenter() {
            return this.sponsors[this.topSponsorId].name
        },

        topComment() {
            return this.sponsors[this.topSponsorId].pledge.comment
        },

    },
    methods: {
        when(_dataAdded) {
            return moment.unix(_dataAdded).fromNow()
        }
    },
    created: function () {
        this.sponsors = []

        this.sponsors.push({
            id: '8e821dd9-e576-45da-9c10-b219e6733940',
            name: `CurvyGorilla202`,
            avatar: 'https://i.imgur.com/cW0Ilct.png',
            pledge: {
                amount: '$20',
                platform: 'Reddit',
                comment: `Way smarter than me.. so I’ll just resort to helping fund the dream`,
                url: 'https://www.reddit.com/r/btc/comments/udehza/comment/i6h9t17/?utm_source=share&utm_medium=web2x&context=3',
                dateAdded: 1651109954,
            },
        })

        this.sponsors.push({
            id: '1799a309-191d-475b-ba7f-31fbb95be16b',
            name: `Satoshi Nakamoto`,
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            pledge: {
                amount: '$5',
                platform: 'Read.Cash',
                url: '',
                dateAdded: 1651514432,
            },
        })

        this.topSponsorId = 0

    },
    mounted: function () {
        //
    },
}
</script>
