#vue create vue-practice-shop

 $ cd vue-practice-shop
 $ npm run serve 

 App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.8:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

  có 1 đoạn fix: <div  class="col-md-6" v-for="product in products" :key="product.id">
  return this.item.reduce((acc, item)=> acc + Number(item.price),0) //hàm reduce tính tổng giá bắt đầu từ 0