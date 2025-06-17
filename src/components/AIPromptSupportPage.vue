<template>
    <div class="ai-page">
        <div class="ai-hero">
            <h1>AI Prompt Support</h1>
            <p class="tagline">Master the art of AI communication with expert prompt engineering</p>
        </div>
        
        <section class="ai-overview">
            <div class="overview-content">
                <h2>Professional Prompt Engineering Services</h2>
                <p>In the age of AI, the quality of your prompts directly impacts the quality of the results you receive. Our AI Prompt Support service helps you craft effective, precise prompts that unlock the full potential of AI language models.</p>
                <p>Whether you're a developer, content creator, or business professional, our prompt engineering expertise will help you achieve better, more consistent, and more reliable outcomes from AI systems.</p>
            </div>
        </section>
        
        <section class="ai-features">
            <h2>Our Prompt Support Services</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h3>Custom Prompt Development</h3>
                    <p>Let us create tailored prompts specifically designed for your unique use case, whether it's content generation, data analysis, or creative tasks.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Prompt Engineering Training</h3>
                    <p>Learn the art and science of crafting effective prompts through our comprehensive training programs for teams and individuals.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>Prompt Optimization</h3>
                    <p>Improve your existing prompts to achieve better results, greater consistency, and more efficient AI interactions.</p>
                </div>
            </div>
        </section>
        
        <section class="ai-benefits">
            <h2>Benefits of Professional Prompt Engineering</h2>
            <div class="benefits-container">
                <div class="benefit-item">
                    <h3>Higher Quality Output</h3>
                    <p>Get more accurate, relevant, and useful responses from AI systems with professionally engineered prompts.</p>
                </div>
                <div class="benefit-item">
                    <h3>Time & Cost Savings</h3>
                    <p>Reduce trial and error with expert-crafted prompts that deliver consistent results on the first try.</p>
                </div>
                <div class="benefit-item">
                    <h3>Competitive Advantage</h3>
                    <p>Leverage advanced prompt engineering techniques that give you an edge in your industry.</p>
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <h2>Ready to Master AI Communication?</h2>
            <p>Discover how our prompt engineering expertise can transform your AI interactions and deliver superior results.</p>
            <router-link to="/contact" class="cta-button">Get Prompt Support</router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AIPromptSupportPage',
    mounted() {
        document.title = 'AI Prompt Support | ANGA Hub';
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped src="@/assets/styles/aipages.css"></style>
