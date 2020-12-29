import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import WeeklyBeats from "./components/WeeklyBeats"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/weekly-beats",
    name: "WeeklyBeats",
    component: WeeklyBeats
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;