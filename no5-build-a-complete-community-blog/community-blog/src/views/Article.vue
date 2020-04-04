<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="card" v-if="!loading">
          <!-- {{ $route.params }} -->
          <img  height="420px" :src="article.imageUrl" alt class="card-img-top" />
          <div class="card-body">
            <h1 class="card-title text-center my-3">{{ article.title }}</h1>
            <div class="article-content" v-html="article.content"></div>
            <div class="comments my-4">
              <!-- http://localhost:8080/article/${article.slug}  == window.location.href -->
              <!-- <vue-disqus shortname="community-blog" :identifier="article.slug" :url="`window.location.href`"></vue-disqus> -->
              <vue-disqus shortname="community-blog" :identifier="article.slug" :url="url"></vue-disqus>
            </div>
          </div>
          <!-- het card body  -->
        </div>
        <!-- het card  -->
        <div class="loader text-center" v-else>
          <i class="fas fa-5x fa-spin fa-spinner"></i>
        </div>
        <!-- het loader  -->
      </div>
      <!-- het col-md-10 offset-md-1  -->
    </div>
    <!-- het row  -->
  </div>
</template>

<script>
import Axios from "axios";
import config from "@/config";

export default {
  data() {
    return {
      article: {},
      loading: true,
      url: window.location.href
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      Axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(
        response => {
          this.loading = false;
          this.article = response.data.data;
          console.log(this.article+'1211');
        }
      );
    }
  }
};
</script>