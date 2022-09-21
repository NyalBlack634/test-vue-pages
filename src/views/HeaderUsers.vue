<template>
  <nav>
    <h2>Users</h2>
    <router-link to="/" active-class="link--active" exact class="link"
      >Home</router-link
    >
    <router-link to="/user:1" active-class="link--active" exact class="link"
      >User</router-link
    >
    <!-- <router-link to="/user/:1" active-class="link--active" exact class="link"
      >User</router-link
    > -->
    <hr />
  </nav>
</template>

<style lang="scss" scoped>
.link {
  margin-right: 5px;

  &--active {
    font-size: 20px;
  }
}
</style>
