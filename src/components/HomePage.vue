<template>
  <router-view>
    <main>
      <h1>ANGA</h1>
      <h2>HUB</h2>
      <h3>{{ displayText }}</h3>
    </main>
    <!-- <h1>{{ msg }}</h1> -->
  </router-view>
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
      typingSpeed: 100, // Typing speed (ms)
      deletingSpeed: 50, // Deleting speed (ms)
      isDeleting: false, // Toggle between typing and deleting
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
