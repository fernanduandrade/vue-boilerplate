import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import { i18n } from './modules/i18n'
import { store } from './store/user'

createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app')
