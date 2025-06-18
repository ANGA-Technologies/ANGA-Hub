<template>
  <div class="web-page">
    <div class="web-hero">
      <h1>Desktop Applications</h1>
      <p class="tagline">Powerful desktop solutions for your business needs</p>
    </div>
    
    <section class="web-overview">
      <div class="overview-content">
        <h2>Custom Desktop Software Development</h2>
        <p>Unlock the full potential of your business with our custom desktop application development services. We create robust, secure, and scalable desktop solutions that run seamlessly on Windows, macOS, and Linux platforms.</p>
        <p>Our desktop applications are designed to handle complex business processes, work offline when needed, and integrate with your existing systems to provide a complete solution for your operational needs.</p>
      </div>
    </section>
    
    <section class="web-features">
      <h2>Our Desktop Development Expertise</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <h3>Cross-Platform</h3>
          <p>Applications that work seamlessly across Windows, macOS, and Linux.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-database"></i>
          </div>
          <h3>Data Management</h3>
          <p>Robust data handling and storage solutions for complex business needs.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-plug"></i>
          </div>
          <h3>System Integration</h3>
          <p>Seamless integration with your existing software and hardware infrastructure.</p>
        </div>
      </div>
    </section>
    
    <section class="web-benefits">
      <h2>Why Choose Our Desktop Solutions?</h2>
      <div class="benefits-container">
        <div class="benefit-item">
          <h3>Tailored Solutions</h3>
          <p>Custom-built applications designed specifically for your business requirements.</p>
        </div>
        <div class="benefit-item">
          <h3>High Performance</h3>
          <p>Optimized applications that handle complex operations with speed and efficiency.</p>
        </div>
        <div class="benefit-item">
          <h3>Ongoing Support</h3>
          <p>Comprehensive maintenance and updates to ensure your software stays current and secure.</p>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <h2>Ready to Build Your Custom Desktop Solution?</h2>
      <p>Let's create a powerful desktop application that transforms your business operations.</p>
      <router-link to="/contact" class="cta-button">Get Started</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DesktopPage',
  mounted() {
    document.title = 'Desktop Application Development | ANGA Hub';
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped src="@/assets/styles/webpages.css"></style>
