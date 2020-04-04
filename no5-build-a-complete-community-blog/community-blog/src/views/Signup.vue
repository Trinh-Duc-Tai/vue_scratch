<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.name, 'is-valid' : !errors.name && this.submitted }" v-model="name" type="text" placeholder="Name" class="form-control" />
            <div class="errors" v-if="errors.name">
              <small class="text-danger" v-for="error in errors.name" :key="error">{{ error }}</small>
            </div>
            <!-- het errors  -->
          </div>
          <!-- het form group  -->
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.email,'is-valid' : !errors.email && this.submitted }" v-model="email" type="text" placeholder="Email" class="form-control" />
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{ error }}</small>
            </div>
            <!-- het errors  -->
          </div>
          <!-- het form group  -->
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.password, 'is-valid' : !errors.password && this.submitted  }" v-model="password" type="password" placeholder="Password" class="form-control" />
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{ error }}</small>
            </div>
            <!-- het errors  -->
          </div>
          <!-- het form group  -->
          <div class="form-group text-center">
            <button :disabled="loading" @click="registerUser()" class="btn form-control btn-success">
              <!-- them fa-spin để quay như thật  -->
              <i class="fas fa-spin fa-spinner" v-if="loading"></i> 
              {{ loading ? '' : 'Signup' }}
            </button>
          </div>
          <!-- het form group  -->
        </div>
        <!-- het card-body  -->
      </div>
      <!-- het card  -->
    </div>
    <!-- het col-md-8 offset-md-2  -->
  </div>
  <!-- het row  -->
</template>

<script>

import Axios from 'axios';
import config from '@/config';

export default {
  beforeRouteEnter(to, from, next) {

    if(localStorage.getItem('auth')){
      return next({ path:'/' });
    }

    next();
  },
  data(){
    return{
      name:'',
      email:'',
      password:'',
      errors: {},
      submitted: false,
      loading: false
    }
  },
  methods:{
    registerUser(){
      this.loading = true;
      console.log(this.name, this.email, this.password)
      Axios.post(`${config.apiUrl}/auth/register`,{
        name: this.name,
        email: this.email,
        password: this.password
      }).then(( response ) =>{
        this.loading = false;
        this.submitted = true;
        const { data  } =  response.data;  
        localStorage.setItem('auth', JSON.stringify(data))
        this.$root.auth = data;

        this.$noty.success("Successfully registed")

        this.$router.push('/');

      }).catch(({response})=>{
        this.loading = false;
        this.submitted = true;
        this.$noty.error("Oops, something went wrong!");
        this.errors = response.data;

      })
    }
  }
}
</script>