Vue.component("blog", {
  props: ["title", "content"],
  data(){
    return {
      claps: 0
    }
  },
	template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{ title }}
        </h3>
        <div class="card-text">
          {{ content }}
        </div>
        <!-- het card text  -->
        
        <div class="text-center text-muted display-4">{{ claps }}</div>

        <button @click="claps++"class="btn btn-info btn-sm">Clap for Me</button> 
        <button @click="deleteArticle"class="btn btn-danger btn-sm">Delete Me</button> 

      </div>
      <!-- het card body  -->
    </div>
    <!-- het card  -->
  
    `,
    methods:{
      deleteArticle(){
        // console.log("article is deleted");
        this.$emit('delete-article', this.title) //đẩy ra v-on ở html dùng hàm khác xử lý ở app
      },
      clapForArticle(){
        this.claps++
      }
    }
});

new Vue({
	el: "#app",
	data: {
		article: [
			{
				title: "Why are you so sad?",
				content: "Because i want to be love more"
			},
			{
				title: "Build fullstack application with laravel and vuejs",
				content: "Ontrary to popular belief, lorem okela"
			},
			{
				title: "Where does it come from?",
				content: "Love you than more i can say"
			},
			{
				title: "1997 by Tasuna okela",
				content: "Tình yêu không thể níu giữ"
			},
		]
  },
  methods:{
    removeArticle(e){
      // console.log("article on parent is deleted");
      console.log(e);
      this.article = this.article.filter( article => article.title != e) //lọc ra chỉ còn lại cái chưa xóa
    }
  }
});
