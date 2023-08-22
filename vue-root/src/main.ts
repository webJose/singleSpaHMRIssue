import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerApplication, start } from 'single-spa'

const spas = [
    {
        name: 'spa01',
        module: '@HMRTest/spa01',
        activeWhen: '/spa01'
    }
];

for (let spa of spas) {
    registerApplication({
        name: spa.name,
        app: () => import(spa.module),
        activeWhen: spa.activeWhen
    });
}
start();
createApp(App).mount('#app')
