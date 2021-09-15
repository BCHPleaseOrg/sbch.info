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
    }
}
</script>
