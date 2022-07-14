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
    'id'
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
  padding: 8px 4px 8px 8px;
  font-size: 12px;
}
</style>