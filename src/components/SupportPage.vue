<template>
    <div class="support-page">
        <h1>Support</h1>
        <div class="support-content">
            <section class="support-intro">
                <p>At ANGA Hub, we're committed to providing exceptional support to all our clients. Our dedicated team is here to help you with any questions or technical issues you may encounter.</p>
            </section>
            
            <section class="support-options">
                <h2>How Can We Help You?</h2>
                <div class="support-cards">
                    <div class="support-card">
                        <div class="card-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <h3>Technical Support</h3>
                        <p>Get help with technical issues, troubleshooting, and product functionality.</p>
                        <a href="#contact-form" class="support-link">Request Support</a>
                    </div>
                    
                    <div class="support-card">
                        <div class="card-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <h3>Documentation</h3>
                        <p>Access comprehensive guides, tutorials, and FAQs for our products and services.</p>
                        <a href="#" class="support-link">Browse Docs</a>
                    </div>
                    
                    <div class="support-card">
                        <div class="card-icon">
                            <i class="fas fa-comments"></i>
                        </div>
                        <h3>Live Chat</h3>
                        <p>Connect with our support team in real-time for immediate assistance.</p>
                        <a href="#" class="support-link">Start Chat</a>
                    </div>
                </div>
            </section>
            
            <section class="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-container">
                    <div class="faq-item">
                        <h3>What are your support hours?</h3>
                        <p>Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EAT. For urgent matters, we offer limited weekend support.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h3>How quickly can I expect a response?</h3>
                        <p>We aim to respond to all support requests within 24 hours. For premium clients, our response time is typically under 4 hours.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h3>Do you offer training for your products?</h3>
                        <p>Yes, we provide both standard and customized training sessions for all our products and services. Contact us for more information.</p>
                    </div>
                </div>
            </section>
            
            <section class="contact-form" id="contact-form">
                <h2>Contact Support</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">Submit Request</button>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupportPage',
};
</script>

<style scoped>
@import '../assets/styles/supportpage.css';
</style>
