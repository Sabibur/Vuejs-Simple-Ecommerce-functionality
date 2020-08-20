<template>
  <div  class="row" >
       <div class="col-6">
      <img :src="items.photo" class="card-img-top" alt="..." />
    </div>
    <div class="col-6">
      <h5 class="card-title">{{ items.title }}</h5>
      <p class="card-text">{{ items.price }}</p>
      <p class="card-text">{{ items.title }} Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.</p>
      <button @click="additem(items)" class="btn btn-primary">Add To Cart</button>
   </div>
   
  </div>
</template>

<script>
import jsdata from "../../jdata.js";
export default {
  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.items = jsdata[(this.$route.params.id - 1)];
  },
  methods: {
    additem(items) {
      this.$store.commit("addtoCart", items);
    },
  },
};
</script>

<style>
</style>