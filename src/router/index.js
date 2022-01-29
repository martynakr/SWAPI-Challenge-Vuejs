import { createRouter, createWebHistory } from 'vue-router'
import Films from '../views/Films';
import Starships from '../views/Starships';
import Film from "../views/Film"
import Starship from '../views/Starship'

const routes = [
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships
  },
  {
    path: '/films/:id/',
    name: "Film",
    component: Film
  },
  {
    path: '/starships/:id/',
    name: "Starship",
    component: Starship
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
