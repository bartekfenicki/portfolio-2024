import './assets/main.css'
import { initFlowbite } from 'flowbite'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
initFlowbite();
app.use(router)

app.mount('#app')
