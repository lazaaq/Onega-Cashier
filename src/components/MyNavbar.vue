<template>
  <div class="mynavbar">
    <header class="d-flex">
      <div class="header-left">
        <div class="header-name">Siti Rahmatullah</div>
        <div class="header-date">Kamis, 01 Juli 2022. 15:05 WIB</div>
      </div>
      <div class="header-right">
        <button class="p-0 border-0 bg-white" id="button-logout" @click="logout()">
          <img :src="logoutLogo" class="logout-image">
          <span class="logout-text">Logout</span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyNavbar',
  methods: {
    logout: async function() {
      console.log(localStorage.getItem('token'))
      await axios.post('logout', this.$config).then(() => {
        localStorage.removeItem('token');
        this.$router.push('/login');
        this.$store.dispatch('user', null);
      }).catch(error => {
        console.log(error);
      });
      console.log(localStorage.getItem('token'))
    }
  },
  data() {
    return {
      profileLogo: require('@/assets/icon/profile.png'),
      logoutLogo: require('@/assets/icon/logout.svg')
    }
  }
}
</script>

<style scoped>
.mynavbar {
  position: absolute;
  width: 100%;
  z-index: 2;
}
header {
  background-color: white;
  padding: 0.8rem 3vw;
}

header .header-name {
  font-weight: 600;
  font-size: 12px;
}

header .header-date {
  color: #202020;
  opacity: 40%;
  font-size: 12px;
}

header .header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

header .logout-image {
  width: 20px;
}

header .logout-text {
  font-size: 12px;
}
</style>