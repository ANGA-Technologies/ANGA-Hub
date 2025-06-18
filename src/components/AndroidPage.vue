<template>
  <div class="web-page">
    <div class="web-hero">
      <h1>Android App Development</h1>
      <p class="tagline">Building powerful Android applications that engage users and drive business growth</p>
    </div>
    
    <section class="web-overview">
      <div class="overview-content">
        <h2>Custom Android Development</h2>
        <p>Transform your business with custom Android applications designed for performance and user engagement. Our Android development services leverage the latest technologies to create apps that stand out in the Google Play Store and deliver exceptional user experiences.</p>
        <p>From concept to deployment, we handle every aspect of the development process, ensuring your app meets the highest standards of quality and performance.</p>
      </div>
    </section>
    
    <section class="web-features">
      <h2>Our Android Development Expertise</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fab fa-android"></i>
          </div>
          <h3>Native Development</h3>
          <p>High-performance apps built with Kotlin and Java for optimal performance and user experience.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Material Design</h3>
          <p>Beautiful, intuitive interfaces following Google's Material Design guidelines for consistency and usability.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-sync"></i>
          </div>
          <h3>Cross-Platform</h3>
          <p>Solutions that work across different Android devices and versions for maximum reach.</p>
        </div>
      </div>
    </section>
    
    <section class="web-benefits">
      <h2>Why Choose Our Android Development?</h2>
      <div class="benefits-container">
        <div class="benefit-item">
          <h3>Expert Team</h3>
          <p>Certified Android developers with years of experience building successful applications.</p>
        </div>
        <div class="benefit-item">
          <h3>Full-Cycle Development</h3>
          <p>End-to-end services from concept to deployment and ongoing support.</p>
        </div>
        <div class="benefit-item">
          <h3>Quality Assurance</h3>
          <p>Rigorous testing across multiple devices to ensure flawless performance.</p>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <h2>Ready to Build Your Android App?</h2>
      <p>Let's create an Android application that stands out in the Google Play Store.</p>
      <router-link to="/contact" class="cta-button">Start Your Project</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AndroidPage',
  mounted() {
    document.title = 'Android App Development | ANGA Hub';
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped src="@/assets/styles/webpages.css"></style>
