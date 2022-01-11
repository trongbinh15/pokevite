import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./route/route";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
app.use(createPinia());
app.use(VueLazyLoad);
app.use(router);
app.mount("#app");
