import Vue from "vue";

import Router from "vue-router";

import Login from "./views/Login.vue";

import Signup from "./views/Signup.vue";

import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
	mode: 'history', //để ko hiện # ở link http://localhost:8080/#/login
	routes: [
		{
			path: "/login",
			component: Login
		},
		{ 
      path:"/signup",
      component: Signup
    },
		{ 
      path:"/",
      component: Home
    },
	],
});


export default router;