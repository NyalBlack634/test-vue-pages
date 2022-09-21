<template>
  <div>
    <h3>Users</h3>
    <router-link to="/user:1">ユーザー１</router-link>
    <!-- <router-link to="/user/:1">ユーザー１</router-link> -->
    <router-link to="/user:2">ユーザー2</router-link>
    <!-- <router-link to="/user/:2">ユーザー2</router-link> -->
    <hr />
    <!-- <h1>User No. {{ $route.params.id }}</h1> -->
    <h1>User No. {{ id }}</h1>
    <!-- <router-link :to="'/user:' + nextPage()">次のページ</router-link> -->
    <!-- 名前付きで指定するとなぜか動く...なぞだ -->
    <router-link
      :to="{
        name: 'users-id-profile',
        params: { id: nextPage() },
        query: { lang: 'ja', page: 2 },
      }"
      >次のページ(プロフィール)</router-link
    >
    <router-link :to="{ name: 'users-post', params: { id: nextPage() } }"
      >次のページ(投稿)</router-link
    >

    <!-- なんか使えん.パスで呼び出しても404 -->
    <router-view></router-view>
    <div style="height: 700px">
      <router-link
        :to="{ name: 'users-id-profile', params: { id: nextPage() } }"
        >次のページ</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);
  //   }
  // }
  methods: {
    nextPage() {
      // console.log(this.id);
      // console.log(Number(this.id.replace(":", "")));
      // 頭に:がついているため整形必須！！！
      return Number(this.id.replace(":", "")) + 1;
    },
  },
  beforeRouteEnter(to, from, next) {
    // next(vm => {
    //   console.log(vm.id);
    // });
    // console.log("beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log("beforeRouteLeave");
    const isLeave = window.confirm("本当にこのページを離れますか？");

    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
