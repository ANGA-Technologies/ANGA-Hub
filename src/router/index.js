import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CompanyPage from '@/components/CompanyPage.vue';
import AboutUsPage from '@/components/AboutUsPage.vue';
import SupportPage from '@/components/SupportPage.vue';
import ServicePage from '@/components/ServicePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import SecurityPage from '@/components/SecurityPage.vue';
import SSLCertificatesPage from '@/components/SSLCertificatesPage.vue';
import EmailScanningPage from '@/components/EmailScanningPage.vue';
import WebsiteSecurityPage from '@/components/WebsiteSecurityPage.vue';
import CookiesPage from '@/components/CookiesPage.vue';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage.vue';
import TermsAndConditionsPage from '@/components/TermsAndConditionsPage.vue';
import AICustomerSupportPage from '@/components/AICustomerSupportPage.vue';
import AIConsultationPage from '@/components/AIConsultationPage.vue';
import AIPromptSupportPage from '@/components/AIPromptSupportPage.vue';
import WebDesignPage from '@/components/WebDesignPage.vue';
import AppDevelopmentPage from '@/components/AppDevelopmentPage.vue';
import DesktopPage from '@/components/DesktopPage.vue';
import AndroidPage from '@/components/AndroidPage.vue';
import IOSPage from '@/components/IOSPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Legacy route - redirects to company/about-us
  {
    path: '/about',
    redirect: '/company/about-us'
  },
  // Company section
  {
    path: '/company',
    name: 'Company',
    component: CompanyPage,
  },
  {
    path: '/company/about-us',
    name: 'AboutUs',
    component: AboutUsPage,
  },
  {
    path: '/company/support',
    name: 'Support',
    component: SupportPage,
  },
  // Services section
  {
    path: '/services',
    name: 'Services',
    component: ServicePage,
  },
  // AI Services section
  {
    path: '/services/ai-customer-support',
    name: 'AICustomerSupport',
    component: AICustomerSupportPage,
  },
  {
    path: '/services/ai-consultant',
    name: 'AIConsultation',
    component: AIConsultationPage,
  },
  {
    path: '/services/ai-prompt-support',
    name: 'AIPromptSupport',
    component: AIPromptSupportPage,
  },
  // Web Development Services
  {
    path: '/services/web-design',
    name: 'WebDesign',
    component: WebDesignPage,
  },
  {
    path: '/services/app-development',
    name: 'AppDevelopment',
    component: AppDevelopmentPage,
  },
  // Mobile Development Services
  {
    path: '/services/android',
    name: 'Android',
    component: AndroidPage,
  },
  {
    path: '/services/ios',
    name: 'IOS',
    component: IOSPage,
  },
  {
    path: '/services/desktop',
    name: 'Desktop',
    component: DesktopPage,
  },
  // Security section
  {
    path: '/security',
    name: 'Security',
    component: SecurityPage,
  },
  {
    path: '/security/ssl-certificates',
    name: 'SSLCertificates',
    component: SSLCertificatesPage,
  },
  {
    path: '/security/email-scanning',
    name: 'EmailScanning',
    component: EmailScanningPage,
  },
  {
    path: '/security/website-security',
    name: 'WebsiteSecurity',
    component: WebsiteSecurityPage,
  },
  // Contact
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  // Legal Pages
  {
    path: '/cookies',
    name: 'Cookies',
    component: CookiesPage,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyPage,
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditionsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top when navigating to a new route
    return { top: 0 }
  },
});

export default router;
