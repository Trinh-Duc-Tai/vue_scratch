# community-blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

🎉  Successfully created project community-blog.
👉  Get started with the following commands:

 $ cd community-blog
 $ npm run serve
----------------------------------------------
 npm install axios == yarn add axios
-----------------------------------------------

<!-- them fa-spin để quay như thật  -->
<i class="fas fa-spin fa-spinner" v-if="loading"></i> 

### mode: 'history', //để ko hiện # ở link http://localhost:8080/#/login

tk test: vi102@gmail.com
mk test: vi102
tk test: taitd@gmail.com
mk test: taitd
---------------------------------------------------------------
### search vue noty xem để add toast notification https://github.com/renoguyon/vuejs-noty
>npm install vuejs-noty

// add noty css 
### import 'vuejs-noty/dist/vuejs-noty.css'

### Vue.use(VueNoty)
>cái này để có thông báo toast
### import VueNoty from 'vuejs-noty'

---------------------------------------------------------------
// beforeRouteEnter bên dưới để bảo vệ sao cho login vào ko vào đc trang login nữa mà đẩy ra trang chủ / 
	beforeRouteEnter(to, from, next) {

    if(localStorage.getItem('auth')){
      return next({ path:'/' });
    }

    next();
  },
--------------------------------------------------------------------------------
có 1 đoạn dòng này khác video 16
<div class="col-md-8 offset-md-2"  v-for="article in articles" :key="article.id">

-------------------------------------------------------------------------------------

### https://disqus.com/   //react

### search vue disqus   https://github.com/ktquez/vue-disqus

>npm install disqus
>npm install --save vue-disqus

import Vue from 'vue'
import VueDisqus from 'vue-disqus'
>cái này để có phần bình luận
# Vue.use(VueDisqus)
>link này tùy từng người: 
>https://community-blog-9tsiomsdoq.disqus.com/admin/install/platforms/universalcode/
------------------------------------------
Không thể sử dụng v-if with v-for ở Home.vue video 21
---------------------------------------
# search vue wysiwyg  https://github.com/chmln/vue-wysiwyg
>npm install vue-wysiwyg --save

> import wysiwyg from "vue-wysiwyg";
> Vue.use(wysiwyg, {});
>cái này để viết content bài viết

------------------------------------------------
# search "vue picture input" https://github.com/alessiomaffeis/vue-picture-input
>npm install --save vue-picture-input
>import "vue-wysiwyg/dist/vueWysiwyg.css";
>Vue.use(wysiwyg, {});

-------------------------------------------
# const form = new FormData(); //FormData() là 1 vue js object available
# https://cloudinary.com/ phải đăng ký tài khoản free trên trang này để up
>dùng tài khoản mình rồi làm theo video up vẫn được nha :> 
>xem ở CreateArticle.vue
----------------------------------------------------------------
>tạo file .env.local cùng cấp .gitignore 

<!-- console.log(process.env) không hiện ra nội dung của file .env.local như video 24  -->

----------------------------------------------------------------------
>đoạn này để xử lý khi trùng token hay sao đó
headers: {
      Authorization: `Bearer ${this.$root.auth.token}`
}
----------------------------------------------------------------------

 Note that the development build is not optimized.
 >To create a production build, run npm run build
<!-- sau khi build xong sẽ xuất hiện 1 thư mục tên dist  -->
-----------------------------------------------
