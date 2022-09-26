import { createWebHistory, createRouter } from "vue-router";
import DevicesView from "@/views/DevicesView";
import ZonesView from "@/views/ZonesView";


const routes = [
  {
    path: "/",
    name: "Устройства",
    component: DevicesView,
  },
  {
    path: "/zones",
    name: "Структурная схема. Зоны",
    component: ZonesView
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;