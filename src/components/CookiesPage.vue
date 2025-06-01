<template>
  <div class="cookies-page">
    <div class="container">
      <div class="page-header">
        <h1>Cookie Policy</h1>
      </div>
      
      <div class="content-section">
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        
        <h2>How we use cookies</h2>
        <p>
          ANGA Hub uses cookies to:
        </p>
        <ul>
          <li>Understand how visitors use our website</li>
          <li>Remember your preferences and settings</li>
          <li>Improve your experience on our site</li>
          <li>Enable certain functions and services</li>
          <li>Provide you with relevant content</li>
        </ul>
        
        <h2>Types of cookies we use</h2>
        
        <h3>Essential cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality such as security, 
          network management, and account access. You may disable these by changing your browser settings, but this may 
          affect how the website functions.
        </p>
        
        <h3>Performance cookies</h3>
        <p>
          These cookies collect information about how visitors use a website, for instance which pages visitors go to most often. 
          We use this information to improve our website and provide a better user experience.
        </p>
        
        <h3>Functionality cookies</h3>
        <p>
          These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) 
          and provide enhanced, more personal features.
        </p>
        
        <h3>Targeting/advertising cookies</h3>
        <p>
          These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit 
          the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.
        </p>
        
        <h2>Managing cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert 
          you when cookies are being sent. The following links provide information on how to modify your cookie settings in the most 
          common browsers:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank">Microsoft Edge</a></li>
        </ul>
        
        <p>
          Please note that if you choose to disable cookies, some features of our website may not function properly.
        </p>
        
        <h2>Changes to our cookie policy</h2>
        <p>
          We may update our cookie policy from time to time. Any changes will be posted on this page.
        </p>
        
        <h2>Contact us</h2>
        <p>
          If you have any questions about our cookie policy, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:info@angahub.com">info@angahub.com</a><br>
          Phone: <a href="tel:+23058187657">+230 5818 7657</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesPage',
  mounted() {
    document.title = 'Cookie Policy | ANGA Hub';
    
    // Add animation class after component is mounted
    setTimeout(() => {
      const pageElement = document.querySelector('.cookies-page');
      if (pageElement) pageElement.classList.add('visible');
    }, 100);
  }
}
</script>

<style scoped src="@/assets/styles/cookiespage.css"></style>
