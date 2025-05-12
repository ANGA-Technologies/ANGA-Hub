<template>
  <div id="app" class="container">
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
          <li>
            <router-link to="/about" class="nav-link">
              <span class="nav-text">ABOUT</span>
            </router-link>
          </li>
          <li>
            <router-link to="/services" class="nav-link">
              <span class="nav-text">SERVICES</span>
            </router-link>
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
          <li>
            <router-link to="/about" @click="closeMenu">
              <span class="nav-text">ABOUT</span>
            </router-link>
          </li>
          <li>
            <router-link to="/services" @click="closeMenu">
              <span class="nav-text">SERVICES</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">
              <span class="nav-text">CONTACT</span>
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
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
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
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
