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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.security-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    color: #333;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
}

h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    font-weight: 700;
    letter-spacing: -1px;
    animation: fadeInDown 1s ease-out;
}

h2 {
    font-size: 2rem;
    margin-bottom: 25px;
    color: #222;
    position: relative;
    font-weight: 600;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    border-radius: 3px;
}

section h2 {
    text-align: center;
}

section h2::after {
    left: 50%;
    transform: translateX(-50%);
}

p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555;
    font-weight: 400;
}

section {
    margin-bottom: 100px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Hero Section */
.security-hero {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    padding: 60px 0;
    animation: fadeIn 1s ease-out;
}

.security-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.05) 0%, rgba(211, 47, 47, 0.05) 100%);
    border-radius: 20px;
    z-index: -1;
    transform: skewY(-2deg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.tagline {
    font-size: 1.4rem;
    max-width: 700px;
    margin: 0 auto;
    color: #666;
    font-weight: 300;
    animation: fadeInUp 1s ease-out 0.3s both;
}

/* Security Overview */
.security-overview {
    background: #fff;
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
    border: 1px solid #f0f0f0;
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;
}

.security-overview::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.05) 0%, rgba(211, 47, 47, 0.05) 100%);
    border-radius: 50%;
    z-index: 0;
}

.overview-content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.overview-content h2 {
    text-align: center;
    margin-bottom: 40px;
}

/* Security Services */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
    margin-top: 60px;
}

.service-card {
    background: #fff;
    border-radius: 16px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.03) 0%, rgba(211, 47, 47, 0.03) 100%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-card:hover::before {
    opacity: 1;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 30px;
    color: #8A2BE2;
    transition: all 0.5s ease;
    position: relative;
}

.service-icon::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(211, 47, 47, 0.1) 100%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.5s ease;
}

.service-card:hover .service-icon {
    transform: scale(1.1) translateY(-5px);
}

.service-card:hover .service-icon::after {
    transform: translate(-50%, -50%) scale(1.2);
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #222;
    font-weight: 600;
    transition: all 0.3s ease;
}

.service-card:hover h3 {
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.learn-more {
    margin-top: auto;
    display: inline-block;
    padding: 12px 25px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    color: white;
    border-radius: 50px;
    font-weight: 500;
    margin-top: 25px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.learn-more::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(103.88deg, #D32F2F 0%, #8A2BE2 100%);
    transition: all 0.5s ease;
    z-index: -1;
}

.service-card:hover .learn-more::before {
    width: 100%;
}

/* Security Approach */
.approach-pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;
    margin-top: 60px;
}

.approach-item {
    background: #fff;
    border-radius: 16px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;
    overflow: hidden;
}

.approach-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.approach-icon {
    font-size: 2.2rem;
    margin-bottom: 25px;
    color: #8A2BE2;
    height: 80px;
    width: 80px;
    line-height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(211, 47, 47, 0.1) 100%);
    margin: 0 auto 25px;
    transition: all 0.5s ease;
}

.approach-item:hover .approach-icon {
    transform: rotateY(180deg);
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(211, 47, 47, 0.15) 100%);
}

.approach-item h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #222;
    font-weight: 600;
    transition: all 0.3s ease;
}

.approach-item:hover h3 {
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Benefits Section */
.security-benefits {
    position: relative;
}

.security-benefits::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.03) 0%, rgba(211, 47, 47, 0.03) 100%);
    border-radius: 20px;
    z-index: -1;
    transform: skewY(-1deg);
}

.security-benefits h2 {
    text-align: center;
    margin-bottom: 50px;
}

.benefits-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    padding: 20px;
}

.benefit-item {
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.benefit-item::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

.benefit-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.benefit-item:hover::before {
    transform: scaleX(1);
}

.benefit-item h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #222;
    font-weight: 600;
    position: relative;
    padding-bottom: 15px;
}

.benefit-item h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    transition: width 0.3s ease;
}

.benefit-item:hover h3::after {
    width: 60px;
}

/* CTA Section */
.cta-section {
    background: #fff;
    border-radius: 20px;
    padding: 70px 50px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
    border: 1px solid #f0f0f0;
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.05) 0%, rgba(211, 47, 47, 0.05) 100%);
    z-index: 0;
}

.cta-content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.cta-button {
    display: inline-block;
    margin-top: 30px;
    padding: 16px 45px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(103.88deg, #D32F2F 0%, #8A2BE2 100%);
    transition: all 0.5s ease;
    z-index: -1;
}

.cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(138, 43, 226, 0.4);
}

.cta-button:hover::before {
    width: 100%;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .services-grid,
    .approach-pillars,
    .benefits-container {
        grid-template-columns: 1fr;
    }
    
    .security-overview,
    .cta-section {
        padding: 40px 25px;
    }
    
    h1 {
        font-size: 2.8rem;
    }
    
    .tagline {
        font-size: 1.2rem;
    }
    
    section {
        margin-bottom: 70px;
    }
}
</style>
