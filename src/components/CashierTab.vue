<template>
  <div class="wrap-tabs d-flex">
    <div v-for="(val, index) in tabs" :key="index" class="wrap-tab {{ index+1 == activeTabs ? 'active' : '' }}">
      <button @click="activeTabs = index+1" class="tab">Tab {{ index + 1 }}</button>
      <button type="button" class="x-button ml-1" @click="tabs -= 1">x</button>
    </div>
    <div class="d-flex align-items-center px-2"><button class="plus-button" @click="tabs += 1">+</button></div>
  </div>
</template>

<script>
export default {
  name: "CashierTab",
  method: {
    addTab: function() {
      this.tabs += 1;
      console.log(this.tabs);
    }
  },
  data() {
    return {
      tabs: 1,
      activeTabs: 1,
    }
  }
}
</script>

<style scoped>
.wrap-tab {
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;
  padding: 0.5rem 1rem;
}

.wrap-tab .tab {
  border: 0;
  background-color: transparent;
  padding: 0;
}
.wrap-tabs .x-button {
  border: 0;
  background-color: transparent;
  padding: 0;
  color: rgba(0, 0, 0, 0.2);
}

.wrap-tabs .plus-button {
  color: #047E92;
  border: 0;
  background-color: transparent;
  padding: 0;
}
</style>