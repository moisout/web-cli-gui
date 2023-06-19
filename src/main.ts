import { createApp, Plugin } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia as Plugin);

app.mount('#app');
