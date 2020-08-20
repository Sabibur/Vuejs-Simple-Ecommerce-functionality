 <template>
  <ul class="list-group">
    <li class="list-group-item font-weight-bolder">
      <span>Name</span>
      <span class="float-right">Price</span>
    </li>
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <span>{{ item.title }}</span>
      <span @click="rmvitem(index)" class="btn btn-danger btn-sm">-</span>
      <span class="float-right">{{ item.price }}</span>
    </li>
    <li class="list-group-item font-weight-bolder">
      <span>Total</span>
      <span class="float-right">${{ totalprice }}</span>
    </li>
    <li v-if="items.length > 0" class="list-group-item">
      <button @click="clrcart()" class="btn btn-block btn-primary">CheckOut</button>
    </li>
  </ul>
</template> 

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalprice() {
      var total = 0;
      this.items.forEach((item) => {
        var price = item.price.replace("$", "");
        total += parseFloat(price);
      });
      return total.toFixed(2);
    },
  },
  methods: {
    rmvitem(index) {
      this.$store.commit("rmvtoCart", index);
    },

    clrcart(index) {
      if (confirm('Are you sure you want to checkout?')) {
        this.$store.commit('clrcart')
      }
    },
  },
};
</script>

<style>
</style>