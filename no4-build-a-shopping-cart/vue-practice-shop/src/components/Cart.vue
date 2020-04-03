<template>
<!-- them v-if="items.length!==0" để khi items.length khác 0 thì mới hiện  -->
  <!-- <div id="nai" v-if="items.length!==0">  -->
    <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        {{ item.title }} - ${{ Number(item.price).toFixed() }}
        <button
          @click="$emit('remove-from-cart',item)"
          class="btn badge badge-danger float-right"
        >Remove from cart</button>
      </li>
    </ul>

    <div class="card p-3 my-5">
      <h4 class="text-center">$ {{ total }}</h4>
    </div>
    <!-- het card p-3 my-5  -->

    <button :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-info form-control">Pay Now</button>
  </div>
</template>

<script>
export default {
  props: ["items"],
  computed:{
    total(){
      return this.items.reduce((acc, item)=> acc + Number(item.price),0) //hàm reduce tính tổng giá
    }
  }
};
</script>

<style scoped>
#nai{
  /* position:fixed để lúc nào thanh mua hàng cũng hiện  */
  position: fixed; 
}
</style>