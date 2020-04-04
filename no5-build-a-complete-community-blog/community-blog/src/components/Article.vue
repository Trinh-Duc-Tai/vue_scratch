<template>
  <div class="card my-3">
    <div class="card-header font-weight-bolder">
      {{ article.title }}
    </div>
    <!-- het card heading  -->
    <div class="card-body">
      <div class="my-3" v-html="article.content.substring(0,200)">
      
      </div>
    <router-link :to="`/article/${article.slug}`" class="btn btn-primary">Read more</router-link>
    </div>
    <!-- het card-body  -->
  </div>
  <!-- het card  -->
</template>


<script>

export default {
  props: ['article']  
}

</script>