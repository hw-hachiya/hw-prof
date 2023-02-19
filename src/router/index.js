import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "HW Home", desc: "This is HW Home" },
  },
  {
    path: "/works",
    name: "works",
    component: () => import("../views/WorksView.vue"),
    meta: { title: "Works 実績", desc: "実績をご紹介します。" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About このサイトについて", desc: "HWとは、連絡先など..." },
  },
  {
    path: "/limited/:aid",
    name: "limited",
    component: () => import("../views/LimitedView.vue"),
    meta: { title: "期間限定公開", desc: "この機会をお見逃しなく！" },
    props: true,
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/FormView.vue"),
    meta: { title: "Form 入力はこちらから", desc: "画面遷移するフォーム" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
