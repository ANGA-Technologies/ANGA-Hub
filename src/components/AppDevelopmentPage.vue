<template>
  <div class="web-page">
    <div class="web-hero">
      <h1>App Development</h1>
      <p class="tagline">Building powerful, scalable applications that drive business growth</p>
    </div>
    
    <section class="web-overview">
      <div class="overview-content">
        <h2>Custom Application Development</h2>
        <p>Transform your business processes with custom applications designed specifically for your needs. Our app development services create powerful solutions that streamline operations, enhance productivity, and deliver real business value.</p>
        <p>Whether you need a progressive web app, a mobile application, or enterprise software, our team of experts will bring your vision to life with cutting-edge technology and innovative solutions.</p>
      </div>
    </section>
    
    <section class="web-features">
      <h2>Our Development Expertise</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Cross-Platform</h3>
          <p>Build once, deploy everywhere with our cross-platform development approach.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-sync"></i>
          </div>
          <h3>Agile Development</h3>
          <p>Iterative development process that adapts to your changing needs and feedback.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Secure & Scalable</h3>
          <p>Enterprise-grade security and architecture that grows with your business.</p>
        </div>
      </div>
    </section>
    
    <section class="web-benefits">
      <h2>Why Choose Our Development Services?</h2>
      <div class="benefits-container">
        <div class="benefit-item">
          <h3>Full-Cycle Development</h3>
          <p>From concept to deployment and beyond, we handle every aspect of the development process.</p>
        </div>
        <div class="benefit-item">
          <h3>User-Centric Design</h3>
          <p>Applications designed with the end-user in mind for maximum engagement and usability.</p>
        </div>
        <div class="benefit-item">
          <h3>Ongoing Support</h3>
          <p>Comprehensive maintenance and updates to keep your application performing at its best.</p>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <h2>Ready to Build Your Next Application?</h2>
      <p>Let's turn your idea into a powerful digital solution that drives results.</p>
      <router-link to="/contact" class="cta-button">Start Your Project</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppDevelopmentPage',
  mounted() {
    document.title = 'App Development Services | ANGA Hub';
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped src="@/assets/styles/webpages.css"></style>
