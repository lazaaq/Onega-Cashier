<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(val, index) in thead" :key="index" scope="col">{{ val }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, index) in items" :key="index">
        <td>
          <div class="w-100">
            <span 
              class="input"
              id="sku-code"
              contenteditable
              @keyup="openSearchSkuCode(index)"
              >{{ val.product ? val.product.skuCode : '' }}
            </span>
          </div>
          <div :id="'search_sku_' + index" class="search-item">
            <ul>
              <li 
                v-for="(product, productIndex) in filteredProductsSku" 
                :key="productIndex"
                @click="addNewItem(product, index, 'skucode')"
                >{{ product.sku_code }}
              </li>
            </ul>
          </div>
        </td>
        <td>
          <div class="w-100">
            <span
              class="input"
              id="product-name"
              role="textbox"
              contenteditable
              @keyup="openSearchProductName(index)"
            > {{ val.product ? val.product.productName : '' }}
            </span>
            <span class="item-promo">Promo Merdeka 5%</span>
          </div>
          <div :id="'search_item_' + index" class="search-item">
            <ul>
              <li 
                v-for="(product, productIndex) in filteredProductsItem" 
                :key="productIndex"
                @click="addNewItem(product, index, 'productname')"
                >{{ product.product_name }}
              </li>
            </ul>
          </div>
        </td>
        <td>
          <span id="price">{{ val.product ? val.product.unitPrice : '' }}</span>
        </td>
        <td>
          <div class="qty-wrap">
            <span 
              class="input qty" 
              :id="'qty_' + index" 
              role="textbox" 
              contenteditable
              @keyup="changeQty(index)"
            > {{ val.quantity }}
            </span>
          </div>
        </td>
        <td>
          <div class="diskon">
            {{ val.product ? (val.product.discount ? val.product.discount.discountAmount : 0) : 0 }}
          </div>
        </td>
        <td class="d-flex align-items-center">
          <span>{{ subtotalItem[index] }}</span>
          <button class="trash-btn" @click="deleteItem(index)">
            <img :src="trashIcon">
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: 'ListTable',
  props: [
    'thead',
    'items',
    'trashIcon'
  ],
  computed: {
    subtotalItem() {
      let subtotal = [];
      this.items.forEach(item => {
        subtotal.push(item.product.unitPrice * item.quantity);
      });
      console.log(subtotal)
      return subtotal;
    },
    filteredProductsSku() {
      let query = this.searchProduct.toLowerCase()
      if (this.searchProduct == '') {
        return this.products
      }
      return this.products.filter(function(el) {
        return el.sku_code.toLowerCase().includes(query)
      });
    },
    filteredProductsItem() {
      let query = this.searchProduct.toLowerCase()
      if (this.searchProduct == '') {
        return this.products
      }
      return this.products.filter(function(el) {
        return el.product_name.toLowerCase().includes(query)
      });
    }
  },
  methods: {
    deleteItem: function (index) {
      this.$emit('deleteItem', index)
    },
    changeQty: function (index) {
      let value = parseInt($('#qty_' + index).text())
      this.$emit('changeQty', {index, value})
    },
    openSearchSkuCode: function (index) {
      let searchElement = document.getElementById("search_sku_" + index)
      searchElement.style.display = "block"
      this.searchProduct = $('#sku-code').text()
    },
    openSearchProductName: function (index) {
      let searchElement = document.getElementById("search_item_" + index)
      searchElement.style.display = "block"
      this.searchProduct = $('#product-name').text()
    },
    addNewItem: function (product, index, inputtype) {
      if (inputtype == 'skucode') {
        $('#sku-code').text(product.sku_code)
      } else {
        $('#product-name').text(product.product_name)
      }
      this.$emit('addNewItem', {product, index})
    }
  },
  async mounted() {
    await axios.get(this.$host + '/products').then(response => {
      this.products = response.data.data
    }).catch(error => {
      console.log(error)
    })

    window.onclick = function(event) {
      if (event.target.class != 'search-item') {
        document.querySelectorAll(".search-item").forEach(
          a => a.style.display = "none"
        );
      }
    }
  },
  data() {
    return {
      products: null,
      searchProduct: '',
    }
  }
}
</script>

<style>
.table {
  font-size: 11px;
  margin-bottom: 0.5vh;
}
.table th {
  font-weight: 400;
  background: #079FB7!important;
  color: white;
  padding: 1vh 1vw;
}
.table td {
  padding: 0.75vh 1vw;
}
.table .item-promo {
  background: #EBEFF4;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 700;
  padding: 4px 6px;
}
.table .search-item {
  display: none;
  position: absolute;
  background-color: white;
  border: 1px solid grey;
  border-radius: 6px;
}
.table .search-item ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.table .search-item ul li {
  border: none;
  background-color: white;
  width: 100%;
  text-align: left;
  padding: 0.5vh 1vw;
  margin: 0;
  cursor: pointer;
}
.table .search-item ul li:hover {
  background-color: rgba(0,0,0,0.2);
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