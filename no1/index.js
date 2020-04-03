app = new Vue({
  el:"#app",
  data:{
    count: 0,
  },
  methods:{
    reduceCounter(){
      console.log("reduce counter function was called");
      this.count--;
    },
    addCounter(){
      this.count++;
    }
  },
  computed:{
    isEvenNumber(){
      return this.count % 2 === 0;
    }
  }
});

footer = new Vue({
  el:"#footer",
  data:{
    date: new Date()
  },
  methods:{
    
  }
});