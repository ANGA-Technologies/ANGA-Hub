<template>
  <div class="terms-conditions-page">
    <div class="container">
      <div class="page-header">
        <h1>Terms and Conditions</h1>
      </div>
      
      <div class="content-section">
        <p class="last-updated">Last Updated: June 1, 2025</p>
        
        <h2>Introduction</h2>
        <p>
          These Terms and Conditions ("Terms") govern your use of the ANGA Hub website and services 
          (collectively, the "Services") operated by ANGA Hub LTD ("we", "our", or "us"). 
          By accessing or using our Services, you agree to be bound by these Terms. If you disagree 
          with any part of the Terms, you may not access the Services.
        </p>
        
        <h2>Use of Services</h2>
        <p>
          You may use our Services only for lawful purposes and in accordance with these Terms. 
          You agree not to use our Services:
        </p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation</li>
          <li>To impersonate or attempt to impersonate ANGA Hub, an ANGA Hub employee, another user, or any other person or entity</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm ANGA Hub or users of the Services</li>
        </ul>
        
        <h2>Account Registration</h2>
        <p>
          Some parts of our Services may require you to create an account. You are responsible for 
          maintaining the confidentiality of your account and password and for restricting access to your 
          computer. You agree to accept responsibility for all activities that occur under your account.
        </p>
        
        <h2>Intellectual Property</h2>
        <p>
          The Services and their original content, features, and functionality are and will remain the 
          exclusive property of ANGA Hub LTD and its licensors. The Services are protected by copyright, 
          trademark, and other laws of both Mauritius and foreign countries. Our trademarks and trade dress 
          may not be used in connection with any product or service without the prior written consent of ANGA Hub LTD.
        </p>
        
        <h2>User Content</h2>
        <p>
          Our Services may allow you to post, link, store, share and otherwise make available certain information, 
          text, graphics, videos, or other material. You are responsible for the content that you post to the 
          Services, including its legality, reliability, and appropriateness.
        </p>
        
        <h2>Payment Terms</h2>
        <p>
          If you choose to purchase any of our paid Services, you agree to provide accurate and complete 
          information about yourself and your payment method. You authorize us to charge your payment method 
          for all purchases you make. Prices for our Services may change at any time, and we do not provide 
          price protection or refunds in the event of a price reduction or promotional offering.
        </p>
        
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Services immediately, without prior 
          notice or liability, under our sole discretion, for any reason whatsoever and without limitation, 
          including but not limited to a breach of the Terms.
        </p>
        
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall ANGA Hub LTD, nor its directors, employees, partners, agents, suppliers, or affiliates, 
          be liable for any indirect, incidental, special, consequential or punitive damages, including without 
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
          to or use of or inability to access or use the Services.
        </p>
        
        <h2>Disclaimer</h2>
        <p>
          Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" 
          basis. The Services are provided without warranties of any kind, whether express or implied, including, 
          but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement 
          or course of performance.
        </p>
        
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Mauritius, without regard 
          to its conflict of law provisions.
        </p>
        
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
          revision is material we will provide at least 30 days' notice prior to any new terms taking effect. 
          What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <p>
          Email: <a href="mailto:info@angahub.com">info@angahub.com</a><br>
          Phone: <a href="tel:+23058187657">+230 5818 7657</a><br>
          Address: Port Louis, Mauritius
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditionsPage',
  mounted() {
    document.title = 'Terms and Conditions | ANGA Hub';
    
    setTimeout(() => {
      const pageElement = document.querySelector('.terms-conditions-page');
      if (pageElement) pageElement.classList.add('visible');
    }, 100);
  }
}
</script>

<style scoped src="@/assets/styles/termsandconditionspage.css"></style>
