<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(val, index) in thead" :key="index" scope="col">{{ val }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, index) in tbody" :key="index">
        <td>
          <span id="sku-code">{{ val['sku-code'] }}</span>
        </td>
        <td>
          <span class="input" role="textbox" contenteditable>{{ val['item'] }}</span>
          <span class="item-promo">{{ val['promo'] }}</span>
        </td>
        <td>
          <span id="price">{{ val['price'] }}</span>
        </td>
        <td>
          <div class="qty-wrap">
            <span 
              class="input qty" 
              :id="'qty_' + index" 
              role="textbox" 
              contenteditable
              @keyup="changeQty(index)"
            > {{ val['qty'] }}
            </span>
          </div>
        </td>
        <td>
          <div class="diskon">
            {{ val['diskon'] }}
          </div>
        </td>
        <td class="d-flex align-items-center">
          <span>{{ val['subtotal'] }}</span>
          <button class="trash-btn" @click="deleteItem(index)">
            <img :src="trashIcon">
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: 'ListTable',
  props: [
    'thead',
    'tbody',
    'trashIcon'
  ],
  methods: {
    deleteItem: function (index) {
      this.$emit('deleteItem', index)
    },
    changeQty: function (index) {
      let value = parseInt($('#qty_' + index).text())
      this.$emit('changeQty', [index, value])
    },
  },
  mounted() {
    // $('[contenteditable]').on('keyup', function () {
      // console.log(this.innerText)
      // let qtyId = this.id;
      // let index = qtyId.split('_')[1];
      // index = parseInt(index);
      // this.tbody[index]['subtotal'] = parseInt(this.innerText) * parseInt(this.tbody[index]['price']);
    // })
  }
}
</script>

<style scoped>
.table {
  font-size: 11px;
  margin-bottom: 0.5vh;
}
.table th {
  font-weight: 400;
  background-color: #079FB7;
  color: white;
  padding: 1vh 1vw;
}
.table td {
  padding: 0.75vh 1vw;
}
.table input {
  border: none;
  width: auto;
}

.table .item-promo {
  background: #EBEFF4;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 700;
  padding: 4px 6px;
}

.table .qty-wrap {
  padding: 0!important;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  text-align: center;
  margin: 0;
}

.table .diskon {
  background: #3BB06A;
  width: fit-content;
  padding: 3px 6px;
  font-size: 10px;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
}

.table .trash-btn {
  border: none;
  background: none;
  padding: 0;
  color: red;
  display: block;
}

.trash-btn img{
  width: 10px;
  margin-left: 4px;
}
</style>