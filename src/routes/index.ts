import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    component: Home,
    path: '/'
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router