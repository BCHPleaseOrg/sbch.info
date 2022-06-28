<template>
    <Banner />

    <Header />

    <router-view />

    <Footer />
</template>

<script>
/* Import components. */
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Banner,
        Header,
        Footer,
    },
    created: function () {
        /* Initialize. */
        this.$store.dispatch('init')
    },
}
</script>

<style>
.two-lines {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
}

.three-lines {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3;
   -webkit-box-orient: vertical;
}
</style>
