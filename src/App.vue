<template>
  <div>
    <!-- test -->
    <router-view name="header"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade {
  &-enter {
    opacity: 0;
    &-active {
      transition: opacity 0.5s;
    }
    &-to {
      opacity: 1;
    }
  }

  // &-leave {
  //   &-to {
  //     opacity: 0;
  //   }
  //   &-active {
  //     transition: opacity 0.5s;
  //   }
  // }
}
</style>
