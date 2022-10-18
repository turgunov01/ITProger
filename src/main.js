import {
    createApp
} from 'vue'
import App from './App.vue'
import "./assets/style.css";
import "./assets/media.css";
import Aos from 'aos';

Aos.init();

createApp(App).mount('body')