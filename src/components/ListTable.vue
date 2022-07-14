<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(val, index) in thead" :key="index" scope="col">{{ val }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, index) in tbody" :key="index">
        <td>{{ val['sku-code'] }}</td>
        <td>{{ val['item'] }} <span class="item-promo">{{ val['promo'] }}</span></td>
        <td>{{ val['price'] }}</td>
        <td>
          <div class="qty">{{ val['qty'] }}</div>
        </td>
        <td>
          <div class="diskon">
            {{ val['diskon'] }}
          </div>
        </td>
        <td class="d-flex align-items-center">
          <div class="me-2">{{ val['subtotal'] }}</div> 
          <button class="trash-btn"><img src="./../assets/icon/trash.png" alt="Trash Button" width="80%"></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListTable',
  props: [
    'thead',
    'tbody'
  ]
}
</script>

<style scoped>
.table {
  font-size: 12px;
}

.table th {
  font-weight: 400;
  background-color: #079FB7;
  color: white;
}

.table .item-promo {
  background: #EBEFF4;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 700;
  padding: 4px 6px;
}

.table .qty {
  padding: 0!important;
  border-bottom: 1px solid;
  text-align: center;
  width: 60%;
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
</style>