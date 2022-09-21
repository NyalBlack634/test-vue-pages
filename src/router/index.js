import { createRouter, createWebHistory } from "vue-router";
// 遅延ロード
const MyHome = () =>
  import(/* webpackChunkName: "MyHome" */ "@/views/MyHome.vue");
const MyUsers = () =>
  import(/* webpackChunkName: "MyUsers" */ "@/views/MyUsers.vue");
const HelloWorld = () =>
  import(/* webpackChunkName: "HelloWorld" */ "@/components/HelloWorld.vue");
const UsersPost = () =>
  import(/* webpackChunkName: "UsersPost" */ "@/views/UsersPost.vue");
const UserProfile = () =>
  import(/* webpackChunkName: "UserProfile" */ "@/views/UserProfile.vue");
const HeaderHome = () =>
  import(/* webpackChunkName: "HeaderHome.vue" */ "@/views/HeaderHome.vue");
const HeaderUsers = () =>
  import(/* webpackChunkName: "HeaderUsers" */ "@/views/HeaderUsers.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: MyHome,
      header: HeaderHome,
    },
  },
  {
    path: "/user:id",
    // path: "/user/:id",
    // name: "User",
    components: {
      default: MyUsers,
      header: HeaderUsers,
    },
    props: {
      default: true,
      header: false,
    },
    children: [
      { path: "post", component: UsersPost, name: "users-post" },
      { path: "profile", component: UserProfile, name: "users-id-profile" },
    ],
  },
  { path: "/HelloWorld", name: "Hello", component: HelloWorld },
  // { path: "hello", redirect: "/" }
  // { path: "/posts", component: UsersPost, name: "post" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
