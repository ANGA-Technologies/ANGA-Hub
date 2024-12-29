<template>
    <router-view>
        <main>
            <h1>Services</h1>
            <div class="options">
                <div @click="setService('mobile')" class="mobile" :class="{ active: currentService === 'mobile' }">
                    <h5>Mobile Apps</h5>
                </div>
                <div @click="setService('consult')" class="consult" :class="{ active: currentService === 'consult' }">
                    <h5>Pages & Consults</h5>
                </div>
                <div @click="setService('web')" class="web" :class="{ active: currentService === 'web' }">
                    <h5>Web Apps</h5>
                </div>
            </div>
            <div class="content" v-if="currentService">
                <div class="basic">
                    <h3>Basic</h3>
                    <ul>
                        <li v-for="item in currentServiceContent.basic" :key="item">{{ item }}</li>
                    </ul>
                    <h5>From ${{ basicPrice }}</h5>
                </div>
                <div class="standard">
                    <h3>Standard</h3>
                    <ul>
                        <li v-for="item in currentServiceContent.standard" :key="item">{{ item }}</li>
                    </ul>
                    <h5>From ${{ standardPrice }}</h5>
                </div>
                <div class="premium">
                    <h3>Premium</h3>
                    <ul>
                        <li v-for="item in currentServiceContent.premium" :key="item">{{ item }}</li>
                    </ul>
                    <h5>From ${{ premiumPrice }}</h5>
                </div>
            </div>
        </main>
    </router-view>
</template>
    
<script>
    export default {
        name: 'ServicePage',
        data() {
            return {
                currentService: 'mobile',
                services: {
                    mobile: {
                        basic: [
                            "Simple App Development",
                            "UI/UX Design (Basic)",
                            "App Maintenance",
                            "Cross-Platform App (Starter)"
                        ],
                        standard: [
                            "Custom Development", 
                            "UI/UX Design (Standard)",
                            "App Prototyping", 
                            "Backend Intergration",
                            "App Testing"
                        ],
                        premium: [
                            "Advanced Development",
                            "UI/UX Design (Premium)",
                            "Enterprise Mobile Solutions",
                            "Advanced Backend",
                            "Maintenance & Updates",
                            "Security & Testing"
                        ],
                        basicPrice: 449,
                        standardPrice: 1199,
                        premiumPrice: 3499
                    },
                    consult: {
                        basic: [
                            "IT Consultation (Basic)",
                            "Normal Website (Basic)",
                            "Hosting & Domain Setup"
                        ],
                        standard: [
                            "IT Consultation (Standard)", 
                            "Normal Website (Standard)",
                            "Basic Website Hosting", 
                            "Basic Domain Management"
                        ],
                        premium: [
                            "Advanced IT Consultation", 
                            "Normal Website (Premium)",
                            "Managed Website Hosting", 
                            "Advanced Domain Management"
                        ],
                        basicPrice: 199,
                        standardPrice: 699,
                        premiumPrice: 1899
                    },
                    web: {
                        basic: [
                            "Simple Web Design",
                            "Basic CMS Setup",
                            "SEO (Basic)",
                            "Website Maintenance"
                        ],
                        standard: [
                            "Custom Web Apps", 
                            "E-Commerce WebApps (Standard)",
                            "Responsive Web Designs", 
                            "SEO (Standard)",
                            "Web Maintenance (Standard)"
                        ],
                        premium: [
                            "Complex Web Apps",
                            "Custom E-Commerce WebApps",
                            "Custom API Development",
                            "Advanced SEO (Premium)",
                            "WebApp Redesign & Optimization",
                            "Web Maintenance (Premium)"
                        ],
                        basicPrice: 349,
                        standardPrice: 899,
                        premiumPrice: 2499
                    },
                },
            };
        },
        computed: {
            currentServiceContent() {
                return this.currentService ? this.services[this.currentService] : {};
            },
        },
        methods: {
            setService(service) {
                this.currentService = service;
            },
        },
    };
</script>

<style scoped src="@/assets/styles/servicepage.css"></style>