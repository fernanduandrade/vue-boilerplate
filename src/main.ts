import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import { i18n } from './modules/i18n'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
