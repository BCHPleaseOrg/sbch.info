<template>
    <main class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>

        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    The Validators
                </h2>

                <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
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

                                <p class="mt-3 text-base text-gray-500">
                                    {{validator.description}}
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <span class="sr-only">{{validator.title}}</span>

                                    <img class="h-10 w-10 rounded-full border-2 border-gray-300 shadow-lg" :src="validator.avatar" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a :href="validator.web" target="_blank" class="hover:underline">
                                        {{validator.title}}
                                    </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <a :href="validator.web" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Web
                                    </a>
                                    <span class="mx-2 text-gray-500">|</span>
                                    <a :href="validator.twitter" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Twitter
                                    </a>
                                    <span class="mx-2 text-gray-500">|</span>
                                    <a :href="validator.blog" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Blog
                                    </a>
                                    <span class="mx-2 text-gray-500">|</span>
                                    <a :href="validator.readCash" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Read.cash
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="javascript://" class="hover:underline"> Video </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    How to use search engine optimization to drive sales
                                </p>

                                <p class="mt-3 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <span class="sr-only">Brenna Goyette</span>

                                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="javascript://" class="hover:underline"> Brenna Goyette </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                                    <span aria-hidden="true"> &middot; </span>
                                    <span> 4 min read </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="javascript://" class="hover:underline"> Case Study </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    Improve your customer experience
                                </p>

                                <p class="mt-3 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <span class="sr-only">Daniela Metz</span>
                                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="javascript://" class="hover:underline"> Daniela Metz </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-02-12"> Feb 12, 2020 </time>
                                    <span aria-hidden="true"> &middot; </span>
                                    <span> 11 min read </span>
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
            account: '0x3ED12Ca3cA7049Ca852667130CA2291A19BAD0E4',
            description: `We’re a team of strong crypto-community builders and educators, who are passionate to bring crypto to the masses. We offer professional and scalable marketing and community management services with a hands-on and organic approach.`,
            avatar: 'https://i.imgur.com/0vL3kW9.png',
            banner: 'https://i.imgur.com/DIdl5TQ.jpg',
            web: 'https://www.satoshisangels.com/',
            twitter: 'https://twitter.com/SatoshiAngels',
            blog: 'https://www.satoshisangels.com/blog',
            readCash: 'https://read.cash/@SatoshisAngels',
        })

    },
    mounted: function () {
        //
    },
}
</script>
