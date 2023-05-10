import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/PageHome.vue";
import Carte from "./pages/PageCarte.vue";
import Menus from "./pages/PageMenus.vue";
import Login from "./components/PageLogin.vue";
import Register from "./components/PageRegister.vue";
// lazy-loaded
const Profile = () => import("./components/PageProfile.vue")
const BoardAdmin = () => import("./components/PageBoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/PageBoardUser.vue")

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/carte",
        component: Carte,
    },
    {
        path: "/menus",
        component: Menus,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path: "/mod",
        name: "moderator",
        // lazy-loaded
        component: BoardModerator,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
