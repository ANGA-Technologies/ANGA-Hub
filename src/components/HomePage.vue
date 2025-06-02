<template>
  <main>
    <div class="home-container">
      <div class="text">
        <h1>ANGA</h1>
        <h2>HUB</h2>
        <h3> > {{ displayText }}</h3>      
      </div>
      <div class="africa-map">
        <img src="@/assets/images/africa.png" alt="Africa Map" />
      </div>
      <div class="main-background"></div>
    </div>
    
    <!-- Why Us Section -->
    <section class="why-us-section">
      <div class="container">
        <h2 class="section-title">Why Choose Us?</h2>
        <div class="divider"></div>
        
        <div class="why-us-grid">
          <div class="why-us-card">
            <div class="icon-container">
              <i class="icon-expertise"></i>
            </div>
            <h3>African Expertise</h3>
            <p>As a Pan-African company, we understand the unique challenges and opportunities across the continent. Our solutions are tailored specifically for African businesses and contexts.</p>
          </div>
          
          <div class="why-us-card">
            <div class="icon-container">
              <i class="icon-security"></i>
            </div>
            <h3>Security First</h3>
            <p>We prioritize your digital security with enterprise-grade protection. Our comprehensive security solutions safeguard your business against evolving cyber threats.</p>
          </div>
          
          <div class="why-us-card">
            <div class="icon-container">
              <i class="icon-innovation"></i>
            </div>
            <h3>Innovative Solutions</h3>
            <p>We leverage cutting-edge technologies to deliver next-generation solutions that keep your business ahead of the curve in a rapidly evolving digital landscape.</p>
          </div>
          
          <div class="why-us-card">
            <div class="icon-container">
              <i class="icon-support"></i>
            </div>
            <h3>Dedicated Support</h3>
            <p>Our team provides responsive, 24/7 support to ensure your systems run smoothly. We're committed to your success and are always ready to assist.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Tools We Use Section -->
    <section class="tools-section">
      <div class="container">
        <h2 class="section-title">Tools We Use</h2>
        <div class="divider"></div>
        
        <div class="tools-grid">
          <div class="tool-card">
            <img src="@/assets/images/tools/ssl.svg" alt="SSL Certificates" />
            <h3>SSL Certificates</h3>
            <p>We implement industry-standard SSL certificates to secure your website communications and build customer trust.</p>
          </div>
          
          <div class="tool-card">
            <img src="@/assets/images/tools/email-security.svg" alt="Email Security" />
            <h3>Email Security</h3>
            <p>Our advanced email scanning tools protect your business communications from phishing, malware, and other threats.</p>
          </div>
          
          <div class="tool-card">
            <img src="@/assets/images/tools/firewall.svg" alt="Firewall Protection" />
            <h3>Firewall Protection</h3>
            <p>We deploy robust firewall solutions to monitor and filter network traffic, preventing unauthorized access to your systems.</p>
          </div>
          
          <div class="tool-card">
            <img src="@/assets/images/tools/cloud.svg" alt="Cloud Solutions" />
            <h3>Cloud Solutions</h3>
            <p>Our cloud-based services provide scalable, reliable infrastructure for your business applications and data storage needs.</p>
          </div>
          
          <div class="tool-card">
            <img src="@/assets/images/tools/monitoring.svg" alt="Monitoring Tools" />
            <h3>Monitoring Tools</h3>
            <p>We use advanced monitoring systems to ensure your digital assets are performing optimally and to detect issues before they impact your business.</p>
          </div>
          
          <div class="tool-card">
            <img src="@/assets/images/tools/analytics.svg" alt="Analytics" />
            <h3>Analytics</h3>
            <p>Our analytics tools provide valuable insights into your digital performance, helping you make data-driven decisions for your business.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      phrases: [
        "Empowering Africa with Next-Gen Solutions",
        "Africa NextGen Apex Hub",
        "Proud Pan-Africans"
      ],
      currentPhraseIndex: 0,
      displayText: "",
      typingSpeed: 100,
      deletingSpeed: 50,
      isDeleting: false,
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      let i = 0; // Character index

      const type = () => {
        const currentPhrase = this.phrases[this.currentPhraseIndex];

        if (!this.isDeleting && i < currentPhrase.length) {
          // Typing
          this.displayText += currentPhrase.charAt(i);
          i++;
          setTimeout(type, this.typingSpeed);
        } else if (this.isDeleting && i > 0) {
          // Deleting
          this.displayText = this.displayText.slice(0, -1);
          i--;
          setTimeout(type, this.deletingSpeed);
        } else {
          // Pause and switch between typing and deleting
          if (!this.isDeleting) {
            setTimeout(() => {
              this.isDeleting = true;
              type();
            }, 1000); // Pause after typing
          } else {
            this.isDeleting = false;
            this.currentPhraseIndex =
              (this.currentPhraseIndex + 1) % this.phrases.length; // Move to the next phrase
            setTimeout(() => {
              i = 0; // Reset index for the new phrase
              type();
            }, 500); // Pause before starting the next phrase
          }
        }
      };

      type();
    },
  },
};

</script>

<style scoped src="@/assets/styles/homepage.css"></style>
