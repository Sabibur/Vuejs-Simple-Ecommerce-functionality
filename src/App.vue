<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
         <router-view></router-view>
          <!-- <inventory @newcartitem="addcartitem" :items="items"></inventory> -->
        </div>
        <div class="col-sm-3">
          <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navber";
import cart from "./components/cart";
// import inventory from "./components/view/inventory";
// import jsdata from "./jdata.js";

export default {
  components: {
    navbar,
    cart,
    // inventory,
  },
  // data() {
  //   return {
  //     items: [],
  //     cart: [],
  //   };
  // },
  // mounted() {
  //   this.items = jsdata;
  // },
  // methods: {
  //   addcartitem(item) {
  //     this.cart.push(item);
  //   },
  //   rmvi(index) {
  //     this.cart.splice(index, 1);
  //   },
  //   search(keyword) {
  //     this.items = jsdata.filter((item) => {
  //       return item.title.toLowerCase().includes(keyword.toLowerCase());
  //     });
  //   },
  // },
};
</script>

<style>
.container {
  padding-top: 10px;
}
.card {
  margin: 5px;
}
</style>  