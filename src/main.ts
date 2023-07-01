import './assets/main.css'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     

//core
import "primevue/resources/primevue.min.css";
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import InlineMessage from 'primevue/inlinemessage';



import App from './App.vue'
import router from './router'

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Dialog',Dialog)
app.component('Divider',Divider)
app.component('InputText',InputText)
app.component('Button', Button)
app.component('InlineMessage',InlineMessage)

app.mount('#app')
