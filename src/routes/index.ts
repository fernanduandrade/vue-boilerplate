import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home/index.vue'
import Hello from '../views/Hello/index.vue'

const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: Hello,
    path: '/hello'
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router