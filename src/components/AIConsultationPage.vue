<template>
    <div class="ai-page">
        <div class="ai-hero">
            <h1>AI Business Consultation</h1>
            <p class="tagline">Leverage AI to transform your business strategy and operations</p>
        </div>
        
        <section class="ai-overview">
            <div class="overview-content">
                <h2>Strategic AI Consultation Services</h2>
                <p>In today's rapidly evolving digital landscape, artificial intelligence presents unprecedented opportunities for business transformation. Our AI consultation services help you navigate this complex terrain and implement AI solutions that deliver real business value.</p>
                <p>Our team of AI experts works closely with your organization to identify opportunities, develop strategies, and implement solutions that drive innovation, efficiency, and competitive advantage.</p>
            </div>
        </section>
        
        <section class="ai-approach">
            <h2>Our Consultation Approach</h2>
            <div class="approach-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Discovery & Assessment</h3>
                        <p>We begin by understanding your business objectives, challenges, and current technology landscape to identify high-impact AI opportunities.</p>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Strategy Development</h3>
                        <p>Our experts develop a tailored AI strategy aligned with your business goals, including technology recommendations and implementation roadmap.</p>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Implementation Support</h3>
                        <p>We provide hands-on support throughout the implementation process, ensuring successful deployment and adoption of AI solutions.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="ai-benefits">
            <h2>Why Choose Our AI Consultation?</h2>
            <div class="benefits-container">
                <div class="benefit-item">
                    <h3>Expert Guidance</h3>
                    <p>Benefit from the knowledge and experience of our AI specialists who have helped businesses across industries succeed with AI.</p>
                </div>
                <div class="benefit-item">
                    <h3>Custom Solutions</h3>
                    <p>We don't believe in one-size-fits-all solutions. Our recommendations are tailored to your specific business needs and goals.</p>
                </div>
                <div class="benefit-item">
                    <h3>End-to-End Support</h3>
                    <p>From initial assessment to implementation and beyond, we're with you every step of the way.</p>
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <h2>Ready to Explore AI for Your Business?</h2>
            <p>Schedule a consultation with our AI experts today and discover how we can help you harness the power of artificial intelligence.</p>
            <router-link to="/contact" class="cta-button">Schedule Consultation</router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AIConsultationPage',
    mounted() {
        document.title = 'AI Business Consultation | ANGA Hub';
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped src="@/assets/styles/aipages.css"></style>