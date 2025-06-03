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
    
    <!-- Animated Section Transition -->
    <div class="section-transition"></div>
    
    <!-- Tools We Use Section -->
    <section class="tools-section">
      <div class="container">
        <h2 class="section-title">Tools We Use</h2>
        
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
  data() {
    return {
      displayText: '',
      fullText: 'Secure. Innovate. Connect.',
      index: 0,
      isDeleting: false,
      typingSpeed: 150,
      parallaxX: 0,
      parallaxY: 0,
      scrollY: 0,
      ticking: false
    }
  },
  mounted() {
    this.typeText();
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('scroll', this.handleScroll);
    this.initParallaxElements();
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initParallaxElements() {
      // Add data attributes to elements we want to animate on scroll
      const cards = document.querySelectorAll('.why-us-card, .tool-card');
      cards.forEach((card, index) => {
        card.setAttribute('data-depth', (0.1 + (index % 3) * 0.05).toFixed(2));
        card.setAttribute('data-direction', index % 2 === 0 ? '1' : '-1');
      });
      
      // Initialize with current scroll position
      this.handleScroll();
    },
    
    handleScroll() {
      this.scrollY = window.scrollY;
      
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateParallaxElements();
          this.ticking = false;
        });
        this.ticking = true;
      }
    },
    
    updateParallaxElements() {
      // Apply parallax effect to section titles
      const titles = document.querySelectorAll('.section-title');
      titles.forEach(title => {
        const speed = 0.15;
        const rect = title.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportHeight = window.innerHeight;
        const distanceFromCenter = centerY - viewportHeight / 2;
        const translateY = -distanceFromCenter * speed;
        
        title.style.transform = `translateX(-50%) translateY(${translateY}px)`;
      });
      
      // Apply 3D effect to cards based on scroll position
      const cards = document.querySelectorAll('.why-us-card, .tool-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const depth = parseFloat(card.getAttribute('data-depth') || 0.1);
        const direction = parseInt(card.getAttribute('data-direction') || 1);
        
        // Only animate cards that are visible in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercentage = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const rotateX = (scrollPercentage * 10 - 5) * depth;
          const rotateY = (scrollPercentage * 10 - 5) * depth * direction;
          
          card.style.transform = `
            translateY(-${scrollPercentage * 15}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${1 + scrollPercentage * 0.05})
          `;
        }
      });
      
      // Parallax for background elements
      const mainBackground = document.querySelector('.main-background');
      if (mainBackground) {
        mainBackground.style.transform = `translateY(${this.scrollY * 0.05}px)`;
      }
    },
    typeText() {
      const current = this.index % this.fullText.split('.').length;
      const fullWord = this.fullText.split('.')[current];

      if (this.isDeleting) {
        this.displayText = fullWord.substring(0, this.displayText.length - 1);
      } else {
        this.displayText = fullWord.substring(0, this.displayText.length + 1);
      }

      let typeSpeed = this.typingSpeed;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.displayText === fullWord) {
        typeSpeed = 1000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.displayText === '') {
        this.isDeleting = false;
        this.index++;
        typeSpeed = 500;
      }

      setTimeout(() => this.typeText(), typeSpeed);
    },
    handleMouseMove(event) {
      // Calculate mouse position relative to the center of the window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      
      // Set parallax values (smaller values for subtle effect)
      this.parallaxX = mouseX * 0.01;
      this.parallaxY = mouseY * 0.01;
      
      // Apply the parallax effect to elements
      const mainBackground = document.querySelector('.main-background');
      const africaMap = document.querySelector('.africa-map img');
      const homeContainer = document.querySelector('.home-container');
      
      if (mainBackground) {
        mainBackground.style.transform = `translate(${this.parallaxX * -1}px, ${this.parallaxY * -1}px) translateY(${this.scrollY * 0.05}px)`;
      }
      
      if (africaMap) {
        africaMap.style.transform = `translate(${this.parallaxX * 2}px, ${this.parallaxY * 2}px) rotate(${this.parallaxX * 0.05}deg)`;
      }
      
      if (homeContainer) {
        homeContainer.style.transform = `perspective(1000px) rotateX(${this.parallaxY * 0.01}deg) rotateY(${this.parallaxX * -0.01}deg)`;
      }
    }
  }
};
</script>

<style scoped src="@/assets/styles/homepage.css"></style>
