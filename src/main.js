import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css';
// import './assets/styles/aboutpage.css'
import router from './router';

createApp(App)
    .use(router)
    .mount('#app')
