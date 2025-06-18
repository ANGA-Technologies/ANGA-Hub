<template>
  <div class="web-page">
    <div class="web-hero">
      <h1>iOS App Development</h1>
      <p class="tagline">Creating elegant and powerful iOS applications for iPhone and iPad</p>
    </div>
    
    <section class="web-overview">
      <div class="overview-content">
        <h2>Custom iOS Development</h2>
        <p>Transform your business with beautifully designed iOS applications that deliver exceptional user experiences. Our iOS development services leverage Swift and the latest Apple technologies to create apps that stand out in the App Store and delight your users.</p>
        <p>From concept to deployment, we follow Apple's Human Interface Guidelines to ensure your app meets the highest standards of quality and performance.</p>
      </div>
    </section>
    
    <section class="web-features">
      <h2>Our iOS Development Expertise</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fab fa-apple"></i>
          </div>
          <h3>Native Development</h3>
          <p>High-performance apps built with Swift and SwiftUI for the best possible user experience on Apple devices.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>iOS Design</h3>
          <p>Beautiful, intuitive interfaces following Apple's Human Interface Guidelines for consistency and usability.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-sync"></i>
          </div>
          <h3>Cross-Device</h3>
          <p>Universal apps that work seamlessly across iPhone, iPad, and other Apple devices.</p>
        </div>
      </div>
    </section>
    
    <section class="web-benefits">
      <h2>Why Choose Our iOS Development?</h2>
      <div class="benefits-container">
        <div class="benefit-item">
          <h3>Expert Team</h3>
          <p>Certified iOS developers with extensive experience in building successful App Store applications.</p>
        </div>
        <div class="benefit-item">
          <h3>Full-Cycle Development</h3>
          <p>End-to-end services from concept to App Store submission and ongoing support.</p>
        </div>
        <div class="benefit-item">
          <h3>Quality Assurance</h3>
          <p>Rigorous testing across multiple Apple devices to ensure flawless performance.</p>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <h2>Ready to Build Your iOS App?</h2>
      <p>Let's create an iOS application that stands out in the App Store.</p>
      <router-link to="/contact" class="cta-button">Start Your Project</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IOSPage',
  mounted() {
    document.title = 'iOS App Development | ANGA Hub';
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped src="@/assets/styles/webpages.css"></style>
