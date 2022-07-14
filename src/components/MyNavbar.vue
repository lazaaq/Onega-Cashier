<template>
  <div class="mynavbar">
    <header class="d-flex">
      <div class="header-left">
        <div class="header-name">Siti Rahmatullah</div>
        <div class="header-date">Kamis, 01 Juli 2022. 15:05 WIB</div>
      </div>
      <div class="header-right">
        <button class="p-0 border-0 bg-white">
          <img src="./../assets/icon/profile.png" alt="Profile Icon" width="30px">
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MyNavbar'
}
</script>

<style>
header {
  background-color: white;
  padding: 1.3rem 3rem;
}

header .header-name {
  font-weight: 600;
}

header .header-date {
  color: #202020;
  opacity: 40%;
  font-size: 14px;
}

header .header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>