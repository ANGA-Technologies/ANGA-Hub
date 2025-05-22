import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CompanyPage from '@/components/CompanyPage.vue';
import AboutUsPage from '@/components/AboutUsPage.vue';
import SupportPage from '@/components/SupportPage.vue';
import ServicePage from '@/components/ServicePage.vue';
import ContactPage from '@/components/ContactPage.vue';

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
  // Security section
  {
    path: '/security',
    name: 'Security',
    component: ServicePage, // Using ServicePage as a template for now
  },
  {
    path: '/security/ssl-certificates',
    name: 'SSLCertificates',
    component: ServicePage, // Using ServicePage as a template for now
  },
  {
    path: '/security/email-scanning',
    name: 'EmailScanning',
    component: ServicePage, // Using ServicePage as a template for now
  },
  {
    path: '/security/website-security',
    name: 'WebsiteSecurity',
    component: ServicePage, // Using ServicePage as a template for now
  },
  // Contact
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
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
