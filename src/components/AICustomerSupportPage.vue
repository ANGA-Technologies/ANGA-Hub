<template>
    <div class="ai-page">
        <div class="ai-hero">
            <h1>AI Customer Support</h1>
            <p class="tagline">Transform your customer experience with intelligent, always-available support</p>
        </div>
        
        <section class="ai-overview">
            <div class="overview-content">
                <h2>24/7 Intelligent Customer Support</h2>
                <p>At ANGA Hub, we understand that exceptional customer service is the cornerstone of business success. Our AI-powered customer support solutions ensure your customers receive instant, accurate, and personalized assistance around the clock.</p>
                <p>By leveraging advanced natural language processing and machine learning, our AI support system continuously learns from interactions to provide increasingly accurate and helpful responses, improving customer satisfaction while reducing response times.</p>
            </div>
        </section>
        
        <section class="ai-features">
            <h2>Key Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>24/7 Availability</h3>
                    <p>Provide instant support to customers anytime, anywhere, without time zone limitations or after-hours constraints.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Instant Responses</h3>
                    <p>Eliminate wait times with immediate answers to common customer inquiries, reducing frustration and improving satisfaction.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Continuous Learning</h3>
                    <p>Our AI system learns from every interaction, constantly improving its ability to understand and resolve customer issues.</p>
                </div>
            </div>
        </section>
        
        <section class="ai-benefits">
            <h2>Business Benefits</h2>
            <div class="benefits-container">
                <div class="benefit-item">
                    <h3>Reduced Support Costs</h3>
                    <p>Significantly lower operational costs by automating responses to common inquiries, allowing your human agents to focus on complex issues.</p>
                </div>
                <div class="benefit-item">
                    <h3>Improved Customer Satisfaction</h3>
                    <p>Deliver instant, accurate responses that meet customer expectations for speed and convenience.</p>
                </div>
                <div class="benefit-item">
                    <h3>Scalable Support</h3>
                    <p>Easily handle spikes in customer inquiries without the need to scale your support team proportionally.</p>
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <h2>Ready to Transform Your Customer Support?</h2>
            <p>Contact us today to learn how our AI Customer Support solutions can benefit your business.</p>
            <router-link to="/contact" class="cta-button">Get Started</router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AICustomerSupportPage',
    mounted() {
        document.title = 'AI Customer Support | ANGA Hub';
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped src="@/assets/styles/aipages.css"></style>
