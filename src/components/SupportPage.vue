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
.support-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    color: #F0F0F5;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: #F0F0F5;
}

section {
    margin-bottom: 60px;
}

.support-intro p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px;
}

.support-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

.support-card {
    flex: 1;
    min-width: 280px;
    background: rgba(25, 25, 65, 0.5);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.support-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #8A2BE2;
}

.support-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #F0F0F5;
}

.support-card p {
    margin-bottom: 20px;
    line-height: 1.5;
}

.support-link {
    display: inline-block;
    padding: 10px 20px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: opacity 0.3s ease;
}

.support-link:hover {
    opacity: 0.9;
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-item:last-child {
    border-bottom: none;
}

.faq-item h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #F0F0F5;
}

.faq-item p {
    line-height: 1.5;
}

.contact-form {
    max-width: 700px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

input, textarea {
    width: 100%;
    padding: 12px 15px;
    background: rgba(25, 25, 65, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #F0F0F5;
    font-family: 'Montserrat', sans-serif;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #8A2BE2;
}

.submit-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.submit-btn:hover {
    opacity: 0.9;
}

@media (max-width: 768px) {
    .support-cards {
        flex-direction: column;
    }
    
    .support-card {
        width: 100%;
    }
}
</style>
