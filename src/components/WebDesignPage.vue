<template>
  <div class="web-page">
    <div class="web-hero">
      <h1>Web Design</h1>
      <p class="tagline">Crafting stunning, responsive websites that deliver exceptional user experiences</p>
    </div>
    
    <section class="web-overview">
      <div class="overview-content">
        <h2>Custom Web Design Services</h2>
        <p>In today's digital landscape, your website is often the first impression potential customers have of your business. Our web design services combine stunning aesthetics with seamless functionality to create websites that not only look amazing but also drive results.</p>
        <p>From sleek corporate sites to dynamic e-commerce platforms, we design with your goals in mind, ensuring your website effectively communicates your brand message and converts visitors into customers.</p>
      </div>
    </section>
    
    <section class="web-features">
      <h2>Our Web Design Approach</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <h3>Responsive Design</h3>
          <p>Websites that look and function perfectly on all devices, from desktops to smartphones.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-tachometer-alt"></i>
          </div>
          <h3>Performance Optimized</h3>
          <p>Lightning-fast loading times and smooth performance for better user experience and SEO.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>SEO Friendly</h3>
          <p>Built with search engine optimization in mind to help you rank higher in search results.</p>
        </div>
      </div>
    </section>
    
    <section class="web-benefits">
      <h2>Why Choose Our Web Design Services?</h2>
      <div class="benefits-container">
        <div class="benefit-item">
          <h3>Custom Solutions</h3>
          <p>Every website we create is tailor-made to meet your specific business needs and goals.</p>
        </div>
        <div class="benefit-item">
          <h3>User-Focused Design</h3>
          <p>Intuitive navigation and engaging interfaces that keep visitors on your site longer.</p>
        </div>
        <div class="benefit-item">
          <h3>Ongoing Support</h3>
          <p>Comprehensive maintenance and support to keep your website running smoothly.</p>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <h2>Ready to Transform Your Online Presence?</h2>
      <p>Let's create a website that truly represents your brand and drives results.</p>
      <router-link to="/contact" class="cta-button">Get Started</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WebDesignPage',
  mounted() {
    document.title = 'Web Design Services | ANGA Hub';
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped src="@/assets/styles/webpages.css"></style>
