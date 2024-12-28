<template>
    <router-view>
        <main>
            <h1>Services</h1>
            <div class="options">
                <div @click="mobile" class="mobile">
                    <h5>Mobile App</h5>
                </div>
                <div @click="consult" class="consult">
                    <h5>IT Consultancy</h5>
                </div>
                <div @click="web" class="web">
                    <h5>Web App</h5>
                </div>
            </div>
            <div class="content">
                
            </div>
        </main>
    </router-view>
</template>
    
<script>
    export default {
        name: 'ServicePage',
        methods: {
            mobile() {
                alert('Mobile App Development');
            },
            consult() {
                alert('IT Consultancy');
            },
            web() {
                alert('Web App Development');
            }
        }
    }
</script>

<style scoped src="@/assets/styles/servicepage.css"></style>