import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "../views/Home.vue";
import Config from "../views/Config.vue";
import Saved from "../views/Saved.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Home,
  },
  {
    path: "/guardados",
    name: "guardados",
    component: Saved,
  },
  {
    path: "/configuracion",
    name: "configuracion",
    component: Config,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
