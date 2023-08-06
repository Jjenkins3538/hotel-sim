import './bootstrap';
import '../css/app.css';
import "primeicons/primeicons.css"; //icons
import "primevue/resources/primevue.min.css"; //core CSS
import "primevue/resources/themes/saga-blue/theme.css"; //theme

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const appName = 'Hotel Management Sim';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue)
            .component('InputText', InputText)
            .component('Button', Button)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
