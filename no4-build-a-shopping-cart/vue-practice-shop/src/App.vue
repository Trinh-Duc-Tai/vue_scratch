<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="product in products" :key="product.id">
            <product
              :isInCart="isInCart(product)"
              v-on:add-to-cart="addToCart(product)"
              :product="product"
            ></product>
          </div>
        </div>
        <!-- het row  -->
      </div>
      <!-- het col-md-7  -->
      <div class="col-md-5 my-5">
        <cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
      </div>
      <!-- het col-md-5  my-5-->
    </div>
    <!-- het row  -->
  </div>
  <!-- het container  -->
</template>

<script>
import products from "@/products.json";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "App",
  components: {
    Product,
    Cart
  },
  data() {
    return {
      products,
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      // console.log(product);
      this.cart.push(product);
    },
    // het addToCart 
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);

      if (item) {
        return true;
      }
      return false;
    },
    // het isInCart 
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    // het removeFromCart 
    pay(){
      this.cart = []
      alert("Shopping completed !")
    }

  }
};
</script>



<style>
body {
  background-color: #fbf8f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
