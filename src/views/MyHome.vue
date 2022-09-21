<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <!-- <p>{{ count }}</p> -->
    <p>{{ doubleCount }}</p>
    <!-- <p>{{ myComponentDoubleCount }}</p> -->
    <!-- <button @click="increment">+1</button> -->
    <!-- mapMutationsを利用する場合の引数は() -->
    <button @click="increment(number)">+1</button>
    <!-- <button @click="decrement">-1</button> -->
    <button @click="decrement(number)">-1</button>
    <br />
    <!-- <input type="text" :value="message" @input="updateMessage" /> -->
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      number: 2,
    };
  },
  computed: {
    // スプレッド演算子を使うことでmapGettersとほかのcomputedを同時使える
    ...mapGetters("count", ["doubleCount"]),
    // message() {
    //   return this.$store.getters.message;
    // },
    // v-modelを使いたい場合は以下のように
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
  },
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount", // 名前を変更もできる
  // }),
  // computed: {
  //   count() {
  //     console.log(this);
  //     return this.$store.state.count;
  //     // return 1;
  //   },
  //   doubleCount() {
  //     // return this.$store.state.count;
  //    namespaced: trueの場合はmodule/methodのようにしなければならない
  //     return this.$store.getters["count/doubleCount"];
  //   },
  // },
  methods: {
    // ...mapMutations(["increment", "decrement"]),
    ...mapActions("count", ["increment", "decrement"]),
    // increment() {
    //   this.$store.dispatch("increment", this.number);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", this.number);
    // },
    updateMessage(e) {
      this.$store.dispatch("updateMessage", e.target.value);
    },
    toUsers() {
      // paramsに{id: ?}を指定すれば名前付き同様に飛べる
      // nameが必要
      this.$router.push({ path: "user:1" });
      // this.$router.push({ path: "user/:1" });
    },
    // 直接ではなく, commitを使う
    // increment() {
    //   this.$store.commit("increment", 2);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 2);
    // },
  },
};
</script>
