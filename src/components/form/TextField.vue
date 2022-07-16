<template>
  <div class="textfield" style="width: 100%">
    <input type="text" :name="name" :id="id" style="width: 100%;" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: [
    'placeholder',
    'name',
    'id',
    'disabled'
  ]
}
</script>

<style>
.textfield input::-webkit-input-placeholder {
  font-size: 11px;
  padding-left: 8px;
}
.textfield input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.8vh 0.3vw 0.8vh 0.3vw;
  font-size: 12px;
}
.disabled {
  background-color: rgba(0,0,0,0.5)
}
</style>