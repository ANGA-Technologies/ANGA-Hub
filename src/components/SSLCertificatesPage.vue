<template>
    <div class="ssl-page">
        <div class="ssl-hero">
            <h1>SSL Certificates</h1>
            <p class="tagline">Secure Connections for Your Website and Applications</p>
        </div>
        
        <section class="ssl-overview">
            <div class="overview-content">
                <h2>What Are SSL Certificates?</h2>
                <p>SSL (Secure Sockets Layer) certificates are digital certificates that authenticate the identity of a website and enable an encrypted connection. These certificates are essential for securing sensitive information transmitted between your website and its visitors.</p>
                <p>When a website has a valid SSL certificate, the connection is encrypted and displays the padlock icon in the browser's address bar, indicating a secure connection. This not only protects user data but also builds trust with your audience.</p>
            </div>
            <div class="ssl-visual">
                <div class="ssl-icon">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="ssl-browser">
                    <div class="browser-bar">
                        <span class="padlock">🔒</span>
                        <span class="url">https://yourdomain.com</span>
                    </div>
                    <div class="browser-content">
                        <div class="secure-badge">
                            <span class="badge-icon">✓</span>
                            <span class="badge-text">Secure Connection</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="ssl-benefits">
            <h2>Benefits of SSL Certificates</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Data Protection</h3>
                    <p>Encrypt sensitive information transmitted between your website and users, preventing data theft and interception.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-user-shield"></i>
                    </div>
                    <h3>Build User Trust</h3>
                    <p>The visible security indicators (padlock, HTTPS) reassure visitors that their connection to your site is secure.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>SEO Advantage</h3>
                    <p>Google and other search engines give preference to secure websites, improving your search rankings.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <h3>Payment Security</h3>
                    <p>Essential for e-commerce sites to secure customer payment information and meet PCI compliance requirements.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-fingerprint"></i>
                    </div>
                    <h3>Identity Verification</h3>
                    <p>Validates your website's identity, preventing impersonation and phishing attacks.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Regulatory Compliance</h3>
                    <p>Meet data protection regulations like GDPR that require secure transmission of personal data.</p>
                </div>
            </div>
        </section>
        
        <section class="ssl-types">
            <h2>Types of SSL Certificates We Offer</h2>
            <div class="types-container">
                <div class="ssl-type">
                    <h3>Domain Validation (DV) SSL</h3>
                    <div class="type-details">
                        <div class="validation-level">
                            <span class="level-indicator basic">Basic</span>
                        </div>
                        <p>Verifies domain ownership only. Ideal for blogs, informational websites, and small businesses that don't collect sensitive information.</p>
                        <ul class="features-list">
                            <li>Quick issuance (minutes to hours)</li>
                            <li>Affordable option for basic security</li>
                            <li>Standard encryption strength</li>
                            <li>Displays padlock and HTTPS</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ssl-type">
                    <h3>Organization Validation (OV) SSL</h3>
                    <div class="type-details">
                        <div class="validation-level">
                            <span class="level-indicator intermediate">Intermediate</span>
                        </div>
                        <p>Verifies domain ownership and basic organization information. Suitable for businesses that collect user data or have login functionality.</p>
                        <ul class="features-list">
                            <li>Moderate validation process (1-3 days)</li>
                            <li>Organization details verified</li>
                            <li>Higher trust level than DV</li>
                            <li>Includes organization name in certificate</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ssl-type">
                    <h3>Extended Validation (EV) SSL</h3>
                    <div class="type-details">
                        <div class="validation-level">
                            <span class="level-indicator premium">Premium</span>
                        </div>
                        <p>The highest level of validation, requiring extensive verification of your organization. Ideal for e-commerce, financial institutions, and enterprises.</p>
                        <ul class="features-list">
                            <li>Rigorous validation process (up to 1-2 weeks)</li>
                            <li>Displays company name in browser address bar (in some browsers)</li>
                            <li>Highest level of trust and credibility</li>
                            <li>Recommended for sites handling sensitive data</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ssl-type">
                    <h3>Wildcard SSL</h3>
                    <div class="type-details">
                        <div class="validation-level">
                            <span class="level-indicator special">Special</span>
                        </div>
                        <p>Secures your main domain and unlimited subdomains. Perfect for websites with multiple subdomains (e.g., blog.domain.com, shop.domain.com).</p>
                        <ul class="features-list">
                            <li>Single certificate for multiple subdomains</li>
                            <li>Cost-effective for sites with many subdomains</li>
                            <li>Available in DV or OV validation levels</li>
                            <li>Simplified certificate management</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ssl-type">
                    <h3>Multi-Domain SSL</h3>
                    <div class="type-details">
                        <div class="validation-level">
                            <span class="level-indicator special">Special</span>
                        </div>
                        <p>Secures multiple different domains with a single certificate. Ideal for businesses managing several websites or domains.</p>
                        <ul class="features-list">
                            <li>Protect up to 100 different domains</li>
                            <li>Centralized certificate management</li>
                            <li>Available in DV, OV, or EV validation levels</li>
                            <li>Cost-effective for multiple domains</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="ssl-process">
            <h2>Our SSL Implementation Process</h2>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <h3>Consultation</h3>
                    <p>We assess your website needs and recommend the most appropriate SSL certificate type for your business.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">2</div>
                    <h3>Certificate Purchase</h3>
                    <p>We handle the purchase of your SSL certificate from trusted Certificate Authorities (CAs).</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">3</div>
                    <h3>Validation Process</h3>
                    <p>We guide you through the validation process required by the CA, which varies depending on the certificate type.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">4</div>
                    <h3>Installation & Configuration</h3>
                    <p>Our experts install and configure the SSL certificate on your web server, ensuring proper implementation.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">5</div>
                    <h3>Testing & Verification</h3>
                    <p>We thoroughly test the SSL implementation to ensure all pages are secure and no mixed content issues exist.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">6</div>
                    <h3>Ongoing Monitoring</h3>
                    <p>We monitor your certificate's status and notify you before expiration to ensure continuous protection.</p>
                </div>
            </div>
        </section>
        
        <section class="ssl-faq">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-container">
                <div class="faq-item">
                    <h3>How long does an SSL certificate last?</h3>
                    <p>Most SSL certificates are valid for one year. However, we offer options for multi-year purchases with automatic renewal to ensure continuous protection.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Will an SSL certificate slow down my website?</h3>
                    <p>Modern SSL implementations have minimal impact on website performance. In fact, with HTTP/2 (which requires HTTPS), your site may actually load faster than without SSL.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Do I need SSL if I don't sell products online?</h3>
                    <p>Yes. SSL is recommended for all websites, not just e-commerce sites. It protects user data, improves SEO rankings, and builds trust with your visitors.</p>
                </div>
                
                <div class="faq-item">
                    <h3>What happens if my SSL certificate expires?</h3>
                    <p>Visitors will see security warnings when accessing your site, which can significantly damage trust and lead to lost traffic. Our monitoring service prevents this by alerting you before expiration.</p>
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <div class="cta-content">
                <h2>Ready to Secure Your Website?</h2>
                <p>Contact our security experts today to discuss the right SSL certificate solution for your business.</p>
                <router-link to="/contact" class="cta-button">Get Started</router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SSLCertificatesPage',
    mounted() {
        document.title = 'SSL Certificates | ANGA Hub';
        // Initialize intersection observer for section animations
        this.initSectionAnimations();
    },
    methods: {
        initSectionAnimations() {
            const sections = document.querySelectorAll('.ssl-page section');
            
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
@import '../assets/styles/sslcertificatespage.css';












/* Process Steps */





/* FAQ Section */
.faq-container {
    margin-top: 40px;
}

.faq-item {
    background: rgba(25, 25, 65, 0.3);
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-5px);
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

@media (max-width: 768px) {
    .ssl-overview {
        flex-direction: column;
    }
    
    .benefits-grid,
    .process-steps {
        grid-template-columns: 1fr;
    }
    
    .ssl-browser {
        max-width: 100%;
    }
    
    h1 {
        font-size: 2.8rem;
    }
    
    .tagline {
        font-size: 1.2rem;
    }
    
    .cta-section {
        padding: 40px 25px;
    }
    
    section {
        margin-bottom: 70px;
    }
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
</style>


