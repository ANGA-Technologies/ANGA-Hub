<template>
  <div id="app">
    <header :class="{ 'scrolled': isScrolled }">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      
      <nav class="desktop-nav">
        <ul>
          <li>
            <router-link to="/" class="nav-link">
              <span class="nav-text">HOME</span>
            </router-link>
          </li>
          <li class="has-dropdown">
            <router-link to="/company" class="nav-link">
              <span class="nav-text">COMPANY</span>
            </router-link>
            <div class="dropdown-menu">
              <router-link to="/company/about-us" class="dropdown-item">About Us</router-link>
              <router-link to="/company/support" class="dropdown-item">Support</router-link>
            </div>
          </li>
          <li class="has-dropdown">
            <router-link to="/services" class="nav-link">
              <span class="nav-text">SERVICES</span>
            </router-link>
            <div class="dropdown-menu">
              <div class="dropdown-item has-submenu">
                <span class="dropdown-link">Web Development</span>
                <div class="submenu">
                  <router-link to="/services/web-design" class="submenu-item">Web Design</router-link>
                  <router-link to="/services/app-development" class="submenu-item">App Development</router-link>
                </div>
              </div>
              <div class="dropdown-item has-submenu">
                <span class="dropdown-link">Mobile Development</span>
                <div class="submenu">
                  <router-link to="/services/android" class="submenu-item">Android</router-link>
                  <router-link to="/services/ios" class="submenu-item">iOS</router-link>
                </div>
              </div>
              <router-link to="/services/desktop" class="dropdown-item">Desktop</router-link>
              <div class="dropdown-item has-submenu">
                <span class="dropdown-link">AI</span>
                <div class="submenu">
                  <router-link to="/services/ai-customer-support" class="submenu-item">AI Customer Support</router-link>
                  <router-link to="/services/ai-consultant" class="submenu-item">AI Consultant</router-link>
                  <router-link to="/services/ai-prompt-support" class="submenu-item">AI Prompt Support</router-link>
                </div>
              </div>
            </div>
          </li>
          <li class="has-dropdown">
            <router-link to="/security" class="nav-link">
              <span class="nav-text">SECURITY</span>
            </router-link>
            <div class="dropdown-menu">
              <router-link to="/security/ssl-certificates" class="dropdown-item">SSL Certificates</router-link>
              <router-link to="/security/email-scanning" class="dropdown-item">Email Scanning & Filtering</router-link>
              <router-link to="/security/website-security" class="dropdown-item">Website Security & Malware Protection</router-link>
            </div>
          </li>
          <li>
            <router-link to="/contact" class="nav-link">
              <span class="nav-text">CONTACT</span>
            </router-link>
          </li>
        </ul>
      </nav>
      
      <div class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <div class="hamburger" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div class="mobile-nav" :class="{ 'open': isMenuOpen }">
        <ul>
          <li>
            <router-link to="/" @click="closeMenu">
              <span class="nav-text">HOME</span>
            </router-link>
          </li>
          <li class="mobile-dropdown">
            <div class="mobile-dropdown-header" @click="toggleMobileSubmenu('company')">
              <router-link to="/company" @click.stop="closeMenu">
                <span class="nav-text">COMPANY</span>
              </router-link>
              <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'company' }">▼</span>
            </div>
            <div class="mobile-submenu" :class="{ 'open': mobileSubmenuOpen === 'company' }">
              <router-link to="/company/about-us" @click="closeMenu">About Us</router-link>
              <router-link to="/company/support" @click="closeMenu">Support</router-link>
            </div>
          </li>
          <li class="mobile-dropdown">
            <div class="mobile-dropdown-header" @click="toggleMobileSubmenu('services')">
              <router-link to="/services" @click.stop="closeMenu">
                <span class="nav-text">SERVICES</span>
              </router-link>
              <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'services' }">▼</span>
            </div>
            <div class="mobile-submenu" :class="{ 'open': mobileSubmenuOpen === 'services' }">
              <div class="mobile-submenu-group">
                <div class="mobile-submenu-header" @click="toggleMobileSubmenu('web')">
                  <span>Web Development</span>
                  <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'web' }">▼</span>
                </div>
                <div class="mobile-nested-submenu" :class="{ 'open': mobileSubmenuOpen === 'web' }">
                  <router-link to="/services/web-design" @click="closeMenu">Web Design</router-link>
                  <router-link to="/services/app-development" @click="closeMenu">App Development</router-link>
                </div>
              </div>
              <div class="mobile-submenu-group">
                <div class="mobile-submenu-header" @click="toggleMobileSubmenu('mobile')">
                  <span>Mobile Development</span>
                  <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'mobile' }">▼</span>
                </div>
                <div class="mobile-nested-submenu" :class="{ 'open': mobileSubmenuOpen === 'mobile' }">
                  <router-link to="/services/android" @click="closeMenu">Android</router-link>
                  <router-link to="/services/ios" @click="closeMenu">iOS</router-link>
                </div>
              </div>
              <router-link to="/services/desktop" @click="closeMenu">Desktop</router-link>
              <div class="mobile-submenu-group">
                <div class="mobile-submenu-header" @click="toggleMobileSubmenu('ai')">
                  <span>AI</span>
                  <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'ai' }">▼</span>
                </div>
                <div class="mobile-nested-submenu" :class="{ 'open': mobileSubmenuOpen === 'ai' }">
                  <router-link to="/services/ai-customer-support" @click="closeMenu">AI Customer Support</router-link>
                  <router-link to="/services/ai-consultant" @click="closeMenu">AI Consultant</router-link>
                  <router-link to="/services/ai-prompt-support" @click="closeMenu">AI Prompt Support</router-link>
                </div>
              </div>
            </div>
          </li>
          <li class="mobile-dropdown">
            <div class="mobile-dropdown-header" @click="toggleMobileSubmenu('security')">
              <router-link to="/security" @click.stop="closeMenu">
                <span class="nav-text">SECURITY</span>
              </router-link>
              <span class="dropdown-arrow" :class="{ 'open': mobileSubmenuOpen === 'security' }">▼</span>
            </div>
            <div class="mobile-submenu" :class="{ 'open': mobileSubmenuOpen === 'security' }">
              <router-link to="/security/ssl-certificates" @click="closeMenu">SSL Certificates</router-link>
              <router-link to="/security/email-scanning" @click="closeMenu">Email Scanning & Filtering</router-link>
              <router-link to="/security/website-security" @click="closeMenu">Website Security & Malware Protection</router-link>
            </div>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">
              <span class="nav-text">CONTACT</span>
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <main class="page-container">
      <router-view></router-view>
    </main>
    <footer-component :class="{ 'visible': showFooter }"></footer-component>
    <div class="background"></div>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    FooterComponent
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      showFooter: false,
      mobileSubmenuOpen: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Prevent scrolling when menu is open
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.mobileSubmenuOpen = null;
      document.body.style.overflow = '';
    },
    toggleMobileSubmenu(submenu) {
      this.mobileSubmenuOpen = this.mobileSubmenuOpen === submenu ? null : submenu;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      
      // Show footer when scrolled near the bottom of the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when scrolled more than 60% down the page
      this.showFooter = scrollPosition > (documentHeight - windowHeight) * 0.4;
    }
  },
};
</script>

<style scoped>
/* Modern Navigation Styles */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

header {
  padding: 18px 5%;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  color: #F0F0F5;
  background: linear-gradient(135deg, rgba(25, 25, 65, 0.9) 0%, rgba(8, 8, 35, 0.95) 100%);
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

header.scrolled {
  padding: 12px 5%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, rgba(20, 20, 55, 0.95) 0%, rgba(5, 5, 25, 0.98) 100%);
}

.logo {
  width: 80px;
  height: 80px;
  transition: all 0.3s ease;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
}

.desktop-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.desktop-nav li {
  margin: 0 20px;
}

.nav-link {
  color: #F0F0F5;
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.nav-text {
  position: relative;
  transition: all 0.3s ease;
}

.nav-text::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.router-link-active .nav-text {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.router-link-active .nav-text::after,
.nav-link:hover .nav-text::after {
  width: 100%;
}

.nav-link:hover .nav-text {
  color: #ffffff;
  transform: translateY(-2px);
}

/* Hamburger Menu */
.hamburger {
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: none;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #F0F0F5;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.active span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.active span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(25, 25, 65, 0.95) 0%, rgba(8, 8, 35, 0.98) 100%);
  backdrop-filter: blur(20px);
  transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 999;
  display: none;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav ul {
  list-style: none;
  padding: 100px 40px 30px;
  margin: 0;
  height: 100%;
  overflow-y: auto;
}

.mobile-nav li {
  margin: 30px 0;
  text-align: center;
}

.mobile-nav a {
  color: #F0F0F5;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  transition: all 0.3s ease;
  padding: 10px 0;
}

.mobile-nav a:hover {
  transform: translateY(-3px);
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* Desktop Dropdown Menu Styles */
.has-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background: linear-gradient(135deg, rgba(25, 25, 65, 0.95) 0%, rgba(8, 8, 35, 0.98) 100%);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  opacity: 0;
  visibility: hidden;
  transform-origin: top center;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  padding: 10px 0;
  margin-top: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: rgba(25, 25, 65, 0.95);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #F0F0F5;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.dropdown-link {
  display: block;
  cursor: default;
}

/* Submenu Styles */
.has-submenu {
  position: relative;
}

.submenu {
  position: absolute;
  top: 0;
  right: 100%;
  min-width: 200px;
  background: linear-gradient(135deg, rgba(25, 25, 65, 0.95) 0%, rgba(8, 8, 35, 0.98) 100%);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  padding: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1001;
}

.has-submenu:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.submenu-item {
  display: block;
  padding: 12px 20px;
  color: #F0F0F5;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.submenu-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

/* Mobile Dropdown Styles */
.mobile-dropdown {
  position: relative;
}

.mobile-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.dropdown-arrow {
  font-size: 12px;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.mobile-submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  padding-left: 15px;
}

.mobile-submenu.open {
  max-height: 1000px;
}

.mobile-submenu-group {
  margin: 10px 0;
}

.mobile-submenu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: #F0F0F5;
  font-weight: 500;
  cursor: pointer;
}

.mobile-nested-submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 15px;
}

.mobile-nested-submenu.open {
  max-height: 500px;
}

.mobile-nested-submenu a {
  padding: 8px 0;
  font-size: 16px;
  opacity: 0.9;
}

.mobile-nav .router-link-active {
  color: #ffffff;
  position: relative;
}

.mobile-nav .router-link-active::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
  border-radius: 2px;
}

.menu-toggle {
  display: none;
  z-index: 1000;
  cursor: pointer;
}

@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
  
  .menu-toggle,
  .hamburger {
    display: block;
  }
  
  .mobile-nav {
    display: block;
  }
  
  .logo {
    width: 70px;
    height: 70px;
  }
}
</style>
