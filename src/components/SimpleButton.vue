<template>
  <button class="simple-button">
    <img :src="src-image" :alt="alt">
    <div class="ms-1">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  name: "SimpleButton",
  props: [
    'src-image',
    'text',
    'alt'
  ]
}
</script>

<style>
button.simple-button {
  border: none;
  font-size: 11px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 3px 6px;
  color: #079FB7;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>