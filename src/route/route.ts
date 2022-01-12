import DetailPokeView from "../components/DetailPokeView.vue";
import FirstPage from "../components/FirstPage.vue";
import SecondPage from "../components/SecondPage.vue";
import Dashboard from "../components/Dashboard.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Dashboard },
  {
    path: "/pokemon/:name",
    name: "detail",
    component: DetailPokeView,
    children: [
      {
        path: "",
        name: "first",
        component: FirstPage,
      },
      {
        path: "evolution",
        name: "second",
        component: SecondPage,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
