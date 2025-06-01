<template>
  <div class="privacy-policy-page">
    <div class="container">
      <div class="page-header">
        <h1>Privacy Policy</h1>
      </div>
      
      <div class="content-section">
        <p class="last-updated">Last Updated: June 1, 2025</p>
        
        <h2>Introduction</h2>
        <p>
          At ANGA Hub LTD ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
          This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
        
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        
        <h3>Personal Information</h3>
        <ul>
          <li>Name, email address, phone number, and other contact details</li>
          <li>Company information if you are representing a business</li>
          <li>Billing information when you purchase our services</li>
          <li>Information you provide when you contact our support team</li>
        </ul>
        
        <h3>Technical Information</h3>
        <ul>
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referral source</li>
        </ul>
        
        <h2>How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features of our services</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our services</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
          <li>To provide you with news, special offers, and general information about other services we offer</li>
        </ul>
        
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access, 
          alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        
        <h2>Third-Party Services</h2>
        <p>
          We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, 
          perform service-related tasks, or assist us in analyzing how our services are used. These third parties have 
          access to your personal information only to perform these tasks on our behalf and are obligated not to disclose 
          or use it for any other purpose.
        </p>
        
        <h2>Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>The right to access the personal information we have about you</li>
          <li>The right to rectify inaccurate personal information</li>
          <li>The right to request the deletion of your personal information</li>
          <li>The right to restrict the processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to object to the processing of your personal information</li>
          <li>The right to withdraw consent at any time</li>
        </ul>
        
        <h2>Children's Privacy</h2>
        <p>
          Our services are not intended for use by children under the age of 16. We do not knowingly collect personal 
          information from children under 16. If you are a parent or guardian and you are aware that your child has 
          provided us with personal information, please contact us.
        </p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
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
  name: 'PrivacyPolicyPage',
  mounted() {
    document.title = 'Privacy Policy | ANGA Hub';
    
    // Add animation class after component is mounted
    setTimeout(() => {
      const pageElement = document.querySelector('.privacy-policy-page');
      if (pageElement) pageElement.classList.add('visible');
    }, 100);
  }
}
</script>

<style scoped src="@/assets/styles/privacypolicypage.css"></style>
