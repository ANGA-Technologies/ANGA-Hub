<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <div class="footer-logo">
          <img src="@/assets/logo.png" alt="ANGA Hub Logo" />
        </div>
        <p>Africa NextGen Apex - Empowering Africa with Next-Gen Solutions</p>
      </div>
      
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p><i class="icon-location"></i> Port Louis, Mauritius</p>
        <p><i class="icon-mail"></i> <a href="mailto:info@angahub.com">info@angahub.com</a></p>
        <p><i class="icon-phone"></i> <a href="tel:+23058187657">+230 5818 7657</a></p>
        <div class="social-icons">
          <a href="https://wa.link/9c0dh4" target="_blank" class="social-icon whatsapp"><img src="@/assets/images/whatsapp.png" alt="WhatsApp" /></a>
          <a href="https://www.linkedin.com/company/angahub" target="_blank" class="social-icon linkedin"><img src="@/assets/images/linkedin.png" alt="LinkedIn" /></a>
          <a href="#" class="social-icon instagram"><img src="@/assets/images/instagram.png" alt="Instagram" /></a>
          <a href="mailto:info@angahub.com" class="social-icon email"><img src="@/assets/images/mail.png" alt="Email" /></a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} ANGA Hub LTD. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped src="@/assets/styles/footer.css"></style>
