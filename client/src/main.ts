import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./index.css";
import { router } from "./route/route";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
