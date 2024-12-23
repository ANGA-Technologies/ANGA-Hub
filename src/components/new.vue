<template>  
  <div class="background"></div>
  <header>
    <div class="logo">
      ANGA Hub
      <!-- <img src="@/assets/logo.png" alt="Logo"> -->
    </div>
    <button class="menu-toggle" @click="toggleMenu">
      <span class="menu-icon">☰</span>
    </button>
    <nav :class="{ open: isMenuOpen }">
      <ul  @click="toggleMenu">
        <li><router-link to="/">
              <span>
                <img width="30" src="@/assets/images/home.png" alt="home icon"/> HOME
              </span>
            </router-link></li>
        <li><router-link to="/about">              
              <span>
                <img width="30" src="@/assets/images/about.png" alt="about icon"/> ABOUT
              </span>
            </router-link></li>
        <li><router-link to="/services">
              <span>
                <img width="30" src="@/assets/images/services.png" alt="service icon"/> SERVICES
              </span>
            </router-link></li>
        <li><router-link to="/contact">
              <span>
                <img width="30" src="@/assets/images/contact.png" alt="contact icon"/> CONTACT
              </span>
            </router-link></li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
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

<!-- <style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style> -->
