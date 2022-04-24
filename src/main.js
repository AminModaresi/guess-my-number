import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import "@/assets/style/main.scss";
// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'
import BaseContainer from './components/UI/BaseContainer.vue'

const app = createApp(App)

app.component("base-container", BaseContainer) 

app.use(store)

app.mount('#app')
