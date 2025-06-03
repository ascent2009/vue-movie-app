import Home from '@/views/Home.vue'
import MovieID from '@/components/MovieID.vue'
import NotFound from '@/views/NotFound.vue'
import About from '@/views/About.vue'

export const routes = [
  // dynamic segments start with a colon
  {
    name: 'Home',
    path: '/home',
    redirect: '/',
    component: Home,
    beforeEnter: (to, from, next) => {
      next(() => window.location.reload())
    },
  },
  { name: 'About', path: '/about', component: About },
  {
    name: 'Movie',
    path: '/movie/:id',
    component: MovieID,
  },
  { name: '404', path: '/:*', component: NotFound },
]
