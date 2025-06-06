<template>
    <div class="about-page">
        <h1>About Us</h1>
        <div class="about-content">
            <section class="company-intro">
                <p>At ANGA Hub LTD, we are driven by a shared vision to lead Africa into the next generation of innovation, excellence, and impactful solutions.
                    The name "ANGA" represents "Africa NextGen Apex," reflecting our commitment to future-oriented innovation and achieving the highest standards in everything we do.</p>
            </section>
            
            <section class="mission-section">
                <h2 id="mission">Our Mission</h2>
                <div class="mission-cards">
                    <div class="mission-card">
                        <div class="card-icon">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <p>To provide innovative and technology-based solutions that address real-world problems.</p>
                    </div>
                    <div class="mission-card">
                        <div class="card-icon">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </div>
                        <p>To expand into various sectors, creating a diverse portfolio of companies under the ANGA brand.</p>
                    </div>
                    <div class="mission-card">
                        <div class="card-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <p>To prioritize sustainability, social impact, and excellence in all operations.</p>
                    </div>
                </div>
            </section>
            
            <section class="vision-section">
                <div class="vision">
                    <h2 id="vision">Our Vision</h2>
                    <p id="vision">To be a leading conglomerate that drives innovation, solves challenges, and creates value across multiple sectors in Africa and beyond.</p>       
                </div>
            </section>
            
            <section class="values-section">
                <h2 id="core">Core Values</h2>
                <div class="corevalues">
                    <div class="circle">
                        <span>
                            <img src="@/assets/images/innovation.png" alt="innovation">
                        </span>
                        <h3>Innovation</h3>
                    </div>
                    <div class="circle">
                        <span>
                            <img src="@/assets/images/integrity.png" alt="integrity">
                        </span>
                        <h3>Integrity</h3>
                    </div>
                    <div class="circle">
                        <span>
                            <img src="@/assets/images/social-impact.png" alt="social-impact">
                        </span>
                        <h3>Social Impact</h3>
                    </div>
                    <div class="circle">
                        <span>
                            <img src="@/assets/images/excellence.png" alt="excellence">
                        </span>
                        <h3>Excellence</h3>
                    </div>
                    <div class="circle">
                        <span>
                            <img src="@/assets/images/sustainability.png" alt="sustainability">
                        </span>
                        <h3>Sustainability</h3>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsPage',
    props: {
        msg: String,
    },
    mounted() {
        document.title = 'About Us | ANGA Hub';
    }
};
</script>

<style scoped src="@/assets/styles/aboutpage.css"></style>