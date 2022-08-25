import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
  ],
});

createApp(App).use(router).mount("#app");
