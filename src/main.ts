import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueBlocksTree from "vue3-blocks-tree";
import "vue3-blocks-tree/dist/vue3-blocks-tree.css";
import { router } from "./route/route";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
app.use(createPinia());
app.use(VueLazyLoad);
app.use(VueBlocksTree, { treeName: "blocks-tree" });
app.use(router);
app.mount("#app");
