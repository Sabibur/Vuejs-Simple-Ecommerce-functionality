<template>
  <div class="row text-center">
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 16rem;">
      <router-link tag='a' :to="{ path:'/items/'+ item.id}">
        <img :src="item.photo" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">{{ item.title }}</h5>
        </div>
      </router-link>
      <div class="card-footer">
        <span class="card-text">{{ item.price }}</span>
        <button @click="additem(item)" class="btn btn-primary btn-sm float-right">Add To Cart</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import jsdata from "../../jdata.js";

export default {
  computed: {
    items() {
      return this.$store.getters.getInventory;
    },
  },
  mounted() {
    this.$store.commit("setInven", jsdata);
  },
  methods: {
    additem(item) {
      this.$store.commit("addtoCart", item);
    },
  },
};
</script>

<style>
</style>