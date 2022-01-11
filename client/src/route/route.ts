import DetailPokeView from "../components/DetailPokeView.vue";
import FirstPage from "../components/FirstPage.vue";
import SecondPage from "../components/SecondPage.vue";
import Dashboard from "../components/Dashboard.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Dashboard },
  {
    path: "/pokemon/:name",
    component: DetailPokeView,
    children: [
      {
        path: "",
        component: FirstPage,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
