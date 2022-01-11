import DetailPokeView from "../components/DetailPokeView.vue";
import Dashboard from "../components/Dashboard.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/pokemon/:name", component: DetailPokeView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
