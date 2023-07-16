import './assets/main.css'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     

//core
import "primevue/resources/primevue.min.css";
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import InlineMessage from 'primevue/inlinemessage';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Toast from 'primevue/toast';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Paginator from 'primevue/paginator';
import Chips from 'primevue/chips';
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBC03_bomkionbzzjqXn3O1U6enbNSTlU",
  authDomain: "crud-dfaa6.firebaseapp.com",
  databaseURL: "https://crud-dfaa6-default-rtdb.firebaseio.com",
  projectId: "crud-dfaa6",
  storageBucket: "crud-dfaa6.appspot.com",
  messagingSenderId: "519008237770",
  appId: "1:519008237770:web:46edfcdbf765999b6c1c33"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Dialog',Dialog)
app.component('Divider',Divider)
app.component('InputText',InputText)
app.component('Button', Button)
app.component('InlineMessage',InlineMessage)
app.component('Checkbox', Checkbox)
app.component('Paginator', Paginator)
app.component('Chips',Chips)
app.component('TextArea', Textarea)
app.component('InputText',InputText)
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('ColumnGroup',ColumnGroup)
app.component('Row',Row)
app.component('Toast',Toast)
app.mount('#app')
