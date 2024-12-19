<template>
    <router-view>
        <main>
            <h1>About</h1>
            <h1>ANGA</h1>
            <h2>HUB</h2>
            <h3>Empowering Africa with Next-Gen Solutions</h3>
        </main>
        <h1>{{ msg }}</h1>
    </router-view>
</template>
    
<script>
    
    export default {
        name: 'AboutPage',
        props: {
            msg: String
        }
    }
</script>

<style scoped src="@/assets/styles/aboutpage.css"></style>
    