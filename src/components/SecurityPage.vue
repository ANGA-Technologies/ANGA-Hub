<template>
    <div class="security-page">
        <div class="security-hero">
            <h1>Security Solutions</h1>
            <p class="tagline">Protecting Your Digital Assets in an Interconnected World</p>
        </div>
        
        <section class="security-overview">
            <div class="overview-content">
                <h2>Comprehensive Security Services</h2>
                <p>At ANGA Hub, we understand that security is not just a feature—it's a necessity. In today's digital landscape, threats are constantly evolving, and businesses need robust protection that evolves with them.</p>
                <p>Our comprehensive security solutions are designed to safeguard your digital assets, protect sensitive information, and ensure business continuity. We combine cutting-edge technology with industry best practices to deliver security services that provide peace of mind.</p>
            </div>
        </section>
        
        <section class="security-services">
            <h2>Our Security Offerings</h2>
            <div class="services-grid">
                <router-link to="/security/ssl-certificates" class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>SSL Certificates</h3>
                    <p>Secure your website with industry-standard encryption, building trust with your visitors and protecting data in transit.</p>
                    <span class="learn-more">Learn More</span>
                </router-link>
                
                <router-link to="/security/email-scanning" class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <h3>Email Scanning & Filtering</h3>
                    <p>Protect your organization from phishing, malware, and spam with our advanced email security solutions.</p>
                    <span class="learn-more">Learn More</span>
                </router-link>
                
                <router-link to="/security/website-security" class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Website Security & Malware Protection</h3>
                    <p>Comprehensive protection against hackers, malware, and other online threats to keep your website secure.</p>
                    <span class="learn-more">Learn More</span>
                </router-link>
            </div>
        </section>
        
        <section class="security-approach">
            <h2>Our Security Approach</h2>
            <div class="approach-pillars">
                <div class="approach-item">
                    <div class="approach-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Assess</h3>
                    <p>We begin with a thorough assessment of your current security posture, identifying vulnerabilities and areas for improvement.</p>
                </div>
                
                <div class="approach-item">
                    <div class="approach-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>Implement</h3>
                    <p>Our experts deploy tailored security solutions designed to address your specific needs and protect against identified threats.</p>
                </div>
                
                <div class="approach-item">
                    <div class="approach-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Monitor</h3>
                    <p>Continuous monitoring ensures that your security measures remain effective against evolving threats.</p>
                </div>
                
                <div class="approach-item">
                    <div class="approach-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Optimize</h3>
                    <p>We regularly review and update your security solutions to adapt to new threats and technologies.</p>
                </div>
            </div>
        </section>
        
        <section class="security-benefits">
            <h2>Why Choose ANGA Hub for Security?</h2>
            <div class="benefits-container">
                <div class="benefit-item">
                    <h3>Expert Team</h3>
                    <p>Our security specialists bring years of experience in protecting businesses across various industries.</p>
                </div>
                
                <div class="benefit-item">
                    <h3>Proactive Protection</h3>
                    <p>We don't just react to threats—we anticipate them, implementing preventative measures to keep you secure.</p>
                </div>
                
                <div class="benefit-item">
                    <h3>Tailored Solutions</h3>
                    <p>Every business is unique, and so are our security solutions. We customize our approach to meet your specific needs.</p>
                </div>
                
                <div class="benefit-item">
                    <h3>24/7 Support</h3>
                    <p>Security threats don't follow business hours, and neither do we. Our team is available around the clock.</p>
                </div>
                
                <div class="benefit-item">
                    <h3>Transparent Reporting</h3>
                    <p>Stay informed with regular reports on your security status, threats detected, and actions taken.</p>
                </div>
                
                <div class="benefit-item">
                    <h3>Cost-Effective</h3>
                    <p>Our solutions provide enterprise-level security at prices accessible to businesses of all sizes.</p>
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <div class="cta-content">
                <h2>Ready to Secure Your Digital Assets?</h2>
                <p>Contact our security experts today for a consultation and discover how ANGA Hub can help protect your business.</p>
                <router-link to="/contact" class="cta-button">Get Started</router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SecurityPage',
    mounted() {
        document.title = 'Security | ANGA Hub';
        // Initialize intersection observer for section animations
        this.initSectionAnimations();
    },
    methods: {
        initSectionAnimations() {
            const sections = document.querySelectorAll('.security-page section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Unobserve after animation to improve performance
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Adjust based on when you want animations to trigger
            });
            
            sections.forEach(section => {
                observer.observe(section);
            });
        }
    }
};
</script>

<style scoped>
@import '../assets/styles/securitypage.css';
</style>
