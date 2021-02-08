import {createRouter, createWebHashHistory, Router} from "vue-router"

let router: Router;
router = createRouter({
  history: createWebHashHistory(),
  routes: [

    {
      path: "/Home",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/Snake",
      name: "snake",
      component: () => import("../views/Snake.vue")
    },
    {
      path: "/todolist",
      name: "todolist",
      component: () => import("../views/todo-list.vue")
    },
    {
      path: "/ilearning",
      name: "ilearning",
      component: () => import("../views/ILearning.vue")
    },
     {
      path: "/meitu",
      name: "meitu",
      component: () => import("../views/Meitu.vue")
    }
  ]
});

export default router;
