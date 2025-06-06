<template>
    <div class="contact-page">
        <h1>Contact Us</h1>
        <div class="contact-container">
            <div class="contact-info-panel">
                <h2>Contact Information</h2>
                <p class="contact-subtitle">Get in touch with our team for any inquiries or support.</p>
                
                <ul class="contact-details">
                    <li>
                        <div class="icon-wrapper">
                            <img src="@/assets/images/call.png" alt="Phone" />
                        </div>
                        <div class="contact-text">
                            <span>Call Us</span>
                            <a href="tel:+23058187657">+230 5818 7657</a>
                        </div>
                    </li>
                    <li>
                        <div class="icon-wrapper">
                            <img src="@/assets/images/mail.png" alt="Email" />
                        </div>
                        <div class="contact-text">
                            <span>Email Us</span>
                            <a href="mailto:info@angahub.com">info@angahub.com</a>
                        </div>
                    </li>
                    <li>
                        <div class="icon-wrapper">
                            <img src="@/assets/images/location.png" alt="Location" />
                        </div>
                        <div class="contact-text">
                            <span>Visit Us</span>
                            <p>Port Louis, Mauritius</p>
                        </div>
                    </li>
                </ul>
                
                <div class="social-links">
                    <h3>Connect With Us</h3>
                    <div class="social-icons">
                        <a href="https://x.com/angahub" target="_blank" class="social-icon twitter">
                            <img src="@/assets/images/x.png" alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/angahub" target="_blank" class="social-icon linkedin">
                            <img src="@/assets/images/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://wa.link/9c0dh4" target="_blank" class="social-icon whatsapp">
                            <img src="@/assets/images/whatsapp.png" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-panel">
                <h2>Send Us a Message</h2>
                <p class="form-subtitle">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form id="contactForm" @submit.prevent="handleSubmit">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" placeholder="John" required />
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" placeholder="Doe" required />
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        </div>
                        <div class="form-group">
                            <label for="phone-number">Phone Number</label>
                            <input type="text" id="phone-number" name="phone" placeholder="+230 XXXX XXXX" required />
                        </div>
                    </div>
                    
                    <div class="form-group subject-group">
                        <label>Subject</label>
                        <div class="subject-options">
                            <label class="radio-label">
                                <input type="radio" name="subject" value="General Inquiry" checked />
                                <span class="radio-text">General Inquiry</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="subject" value="Pricing Inquiry" />
                                <span class="radio-text">Pricing Inquiry</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="subject" value="Company Inquiry" />
                                <span class="radio-text">Company Inquiry</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="subject" value="Technical Inquiry" />
                                <span class="radio-text">Technical Inquiry</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
                    </div>
                    
                    <div class="form-group recaptcha-container">
                        <div ref="recaptcha" class="g-recaptcha" data-sitekey="6Lcu7DcrAAAAAOWhkI-XaibtaLPcjRqCavHgeDsT"></div>
                        <div v-if="recaptchaError" class="recaptcha-error">Please complete the reCAPTCHA verification</div>
                    </div>
                    
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>
        </div>
        
        <!-- Success/Error Modal -->
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-container" :class="{ success: modalSuccess, error: !modalSuccess }">
                <div class="modal-icon">
                    <i :class="modalSuccess ? 'success-icon' : 'error-icon'"></i>
                </div>
                <h3>{{ modalSuccess ? 'Thank You!' : 'Oops!' }}</h3>
                <p>{{ modalMessage }}</p>
                <button @click="closeModal" class="modal-button">Close</button>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
  data() {
    return {
      showModal: false,
      modalMessage: '',
      modalSuccess: true, // To style the modal based on success or error
      recaptchaError: false,
      recaptchaLoaded: false
    };
  },
  mounted() {
    // Load Google reCAPTCHA script
    if (!document.getElementById('recaptcha-script')) {
      const recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('id', 'recaptcha-script');
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
      recaptchaScript.setAttribute('async', 'true');
      recaptchaScript.setAttribute('defer', 'true');
      document.head.appendChild(recaptchaScript);
      
      recaptchaScript.onload = () => {
        this.recaptchaLoaded = true;
      };
    } else {
      this.recaptchaLoaded = true;
    }
  },
  methods: {
    async handleSubmit() {
      // Reset recaptcha error state
      this.recaptchaError = false;
      
      // Verify reCAPTCHA
      const recaptchaResponse = window.grecaptcha && window.grecaptcha.getResponse();
      if (!recaptchaResponse) {
        this.recaptchaError = true;
        return; // Stop form submission if reCAPTCHA is not completed
      }
      
      const form = document.getElementById('contactForm');
      const formData = new FormData(form);
      
      // Create a data object from the form data
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      
      // Add the reCAPTCHA response to the form data
      formDataObj['g-recaptcha-response'] = recaptchaResponse;

      try {
        // Use our secure backend API instead of directly submitting to Formspree
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/contact' 
          : 'http://localhost:3000/api/contact';
          
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formDataObj),
          credentials: 'same-origin' // Important for security
        });

        const data = await response.json();

        if (response.ok && data.success) {
          this.modalMessage = 'Thank you for your message! We will get back to you soon.';
          this.modalSuccess = true;
          form.reset(); // Clear the form
        } else {
          this.modalMessage = data.message || 'Oops! Something went wrong. Please try again.';
          this.modalSuccess = false;
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.modalMessage = 'An error occurred while submitting the form. Please try again later.';
        this.modalSuccess = false;
      }

      // Show the modal
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>


<style scoped src="@/assets/styles/contactpage.css"></style>

    