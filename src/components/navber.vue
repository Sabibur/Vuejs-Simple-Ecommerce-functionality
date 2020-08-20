<template>
  <nav class="navbar navbar-dark bg-dark justify-content-center">
    <router-link tag="a" :to="{ path:'/'}">
      <a class="navbar-brand" href="#">Vuejs Simple Ecommerce functionality</a>
    </router-link>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        @keyup="search"
        v-model="keyword"
        placeholder="Search"
        aria-label="Search"
      />
    </form> -->
  </nav>
</template>

<script>
// import jsdata from "../jdata.js";
export default {
  data() {
    return {
      keyword: "",
      
    };
  },

  // methods: {
  //   search() {
  //     this.items = jsdata.filter((item) => {
  //       return item.title.toLowerCase().includes(this.keyword.toLowerCase());
  //     });
  //   },
  // },
};
</script>

<style>
</style>