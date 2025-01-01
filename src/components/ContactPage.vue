<template>
    <main>
        <h1>Contact Us</h1>
        <div class="content">
            <div class="contacts">
                <h2>Contact Information</h2>
                <ul>
                    <li><span><img src="@/assets/images/call.png" /></span> <a href="tel:+23058187657"> +230 5818 7657 </a></li>
                    <li><span><img src="@/assets/images/mail.png" /></span><a href="mailto:info@angahub.com"> info@angahub.com</a></li>
                    <li><span><img src="@/assets/images/location.png" /></span> Port Louis, Mauritius </li>
                </ul>
                <div class="links">
                    <a href="https://x.com/angahub" target="_blank"><img src="@/assets/images/x.png" /></a>
                    <a href="https://www.linkedin.com/company/angahub" target="_blank"><img src="@/assets/images/linkedin.png" /></a>
                    <a href="" target="_blank"><img src="@/assets/images/whatsapp.png" /></a>
                </div>
            </div>
            <div class="forms">
                <h3>Any question or remarks? Just write us a message!</h3>
                <form id="contactForm" @submit.prevent="handleSubmit">
                    <div class="horizontal-group">
                        <div class="input-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" placeholder="Happy" required />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" placeholder="Doe" required />
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="happy@doe.com" required />

                            <label for="phone-number">Phone Number</label>
                            <input type="text" id="phone-number" name="phone" placeholder="+1 012 3456 789" required />
                        </div>
                    </div>
                    <div class="input-group">
                        <fieldset>
                            <legend>Select Subject?</legend>
                            <div class="radio-group">
                                <label><input type="radio" name="subject" value="General Inquiry" checked> General Inquiry</label>
                                <label><input type="radio" name="subject" value="Pricing Inquiry"> Pricing Inquiry</label>
                                <label><input type="radio" name="subject" value="Company Inquiry"> Company Inquiry</label>
                                <label><input type="radio" name="subject" value="Technical Inquiry"> Technical Inquiry</label>
                            </div>
                        </fieldset>
                    </div>
                    <div class="input-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write your message.." required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>

            </div>
            <div v-if="showModal" class="modal">
                <div class="modal-content" :class="{ success: modalSuccess, error: !modalSuccess }">
                    <p>{{ modalMessage }}</p>
                    <button @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </main>
</template>
    
<script>
export default {
  data() {
    return {
      showModal: false,
      modalMessage: '',
      modalSuccess: true, // To style the modal based on success or error
    };
  },
  methods: {
    async handleSubmit() {
      const form = document.getElementById('contactForm');
      const formData = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/mgvvnbgl', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: formData,
        });

        if (response.ok) {
          this.modalMessage = 'Thank you for your message! We will get back to you soon.';
          this.modalSuccess = true;
          form.reset(); // Clear the form
        } else {
          this.modalMessage = 'Oops! Something went wrong. Please try again.';
          this.modalSuccess = false;
        }
      } catch (error) {
        this.modalMessage = 'An error occurred: ' + error.message;
        this.modalSuccess = false;
      }

      // Show the modal
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>


<style scoped src="@/assets/styles/contactpage.css"></style>

    