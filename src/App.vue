<template>
  <div id="app" class="container">
    <header>
      <div class="logo">
        <img src="@/assets/images/Logo 3.0.png" alt="Logo" />
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <div v-if="!isMenuOpen" class="menu-icon">☰</div>
        <div v-else class="close">✕</div>
      </div>
      <nav :class="{ open: isMenuOpen }">
        <ul @click="toggleMenu">
          <li>
            <router-link to="/">
              <span>
                <img width="30" src="@/assets/images/home.png" alt="home icon" /> HOME
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <span>
                <img width="30" src="@/assets/images/about.png" alt="about icon" /> ABOUT
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/services">
              <span>
                <img width="30" src="@/assets/images/services.png" alt="service icon" /> SERVICES
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <span>
                <img width="30" src="@/assets/images/contact.png" alt="contact icon" /> CONTACT
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
