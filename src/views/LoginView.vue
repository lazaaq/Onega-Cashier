<template>
  <div class="login-page">
    <div class="illustration">
      <div class="text">
        <div class="title">
          Welcome to Onega Cashier
        </div>
        <div class="subtitle">
          The ultimate project boilerplate for next generation web apps.
        </div>
      </div>
      <div class="image">
        <img src="@/assets/illustration/take-away.svg" width="100%">
      </div>
    </div>
    <div class="form">
      <div class="title mb-2">
        Sign in
      </div>
      <div class="subtitle mb-2">
        Enter your Email and password
      </div>
      <div class="wrap-form">
        <TextField 
          name="email" 
          id="email" 
          placeholder="Email" 
          class="mb-2"
        />
        <TextField 
          name="password" 
          id="password" 
          placeholder="Password" 
          class="mb-2"
        />
        <TextField 
          name="cashier" 
          id="cashier" 
          placeholder="Cashier" 
          class="mb-2"
        />
        <div class="d-flex align-items-center">
          <div class="time d-flex align-items-center">
            00:00:00
          </div>
          <div class="ms-auto login-button-wrap" :style="'height=60px'">
            <ButtonField 
              text='Login'
              @click="login()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import TextField from '@/components/form/TextField.vue'
import ButtonField from '@/components/form/ButtonField.vue'

export default {
  components: {
    TextField,
    ButtonField
  },
  methods: {
    login: async function() {
      this.email = document.getElementById('email').value;
      this.password = document.getElementById('password').value;
      
      let loginData = {
        email: this.email,
        password: this.password
      }

      // login
      const response = await axios.post('login', loginData).catch(error => {
        console.log(error);
        return
      });
      
      // set token
      localStorage.setItem('token', response.data.access_token)

      // push to dashboard
      this.$router.push('/')

      // set user
      this.$store.dispatch('user', response.data.data)

      // get products
      const productsResponse = await axios.get('products')
      let products = productsResponse.data.data
      this.$store.dispatch('products', products)

      // get customers
      const customersResponse = await axios.get('customers')
      let customers = customersResponse.data.data
      this.$store.dispatch('customers', customers)

    }
  },
  props: [
    'dataButton'
  ],
  data() {
    return {
      email: '',
      password: '',
      cashier: ''
    }
  }
}
</script>

<style>
.login-page {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.illustration {
  background-color: #047E92;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.illustration .text {
  padding: 0 2rem;
}
.illustration .title {
  color: white;
  font-style: italic;
  font-size: 24px;
  font-weight: 600;
}
.illustration .subtitle {
  color: white;
  font-size: 13px;
  font-weight: 300;
  margin-top: 1rem;
}
.illustration .image {
  width: 80%;
  margin-top: 1.5rem;
}
.form {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form .title {
  font-size: 28px;
  font-weight: 500;
}
.form .subtitle {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}
.form .wrap-form {
  width: 300px;
}
.form .time {
  font-size: 13px;
  font-weight: 500;
}
.form .login-button-wrap {
  height: 40px;
  width: 100px;
}

#cashier {
  background-color: rgba(0,0,0,0.1);
}
</style>