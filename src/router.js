import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import WeeklyBeats from "./components/WeeklyBeats"
import GamePage from "./components/GamePage"
import ReleasePage from "./components/ReleasePage"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/weeklybeats",
    name: "WeeklyBeats",
    component: WeeklyBeats
  },
  {
    path: "/game/:id",
    name: "Game",
    component: GamePage,
    props: true,
  },
  {
    path: "/release/:type/:id",
    name: "Release",
    component: ReleasePage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;