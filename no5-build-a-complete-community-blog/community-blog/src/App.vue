<template>
  <div id="app">
    <Navbar />
    <div class="container">
    <!-- router-view dòng bên dưới là mặc định -->
    <router-view></router-view>
    </div>
    <!-- het container  -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
  *{
    font-family: 'Poppins', sans-serif;
    border-radius: 0px !important;
  }
  body{
    background-color: #f5f3ef;
  }
</style>

