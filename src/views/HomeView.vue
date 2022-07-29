<template>
  <div class="home">
    <MyNavbar/>

    <div class="body row mx-0" style="margin-right: 0;">
      <div class="wrap col-9 pl-0 pr-2">
        <CashierTab 
          :activeTab="activeTab" 
          @changetab="updateActiveTab($event)" 
          @addtab="addTab($event)"
          @closetab="closeTab($event)"
        />
        <div class="left-card">
          <div class="card-title mb-2">
            Customer
          </div>
          <div class="d-flex w-100">
            <div class="pr-2" style="width: 90%;">
              <TextField name="search" id="search" placeholder="Nama, Nomor, ID" />
            </div>
            <div class="" style="width: 10%;">
              <ButtonField text='Cari'/>
            </div>
          </div>
          <hr class="my-2">
          <div class="d-flex mb-2 align-items-center">
            <div class="card-title" style="margin-top: auto; margin-bottom: auto;">
              List Order
            </div>
            <div class="scan-wrap" style="margin-left:auto">
              <TextField placeholder="Input or Scan items" name="scan" id="scan"/>
            </div>
          </div>
          <ListTable
            :thead="thead"
            :items="tbody[activeTab-1].items"
            :trashIcon="trashIcon"
            @deleteItem="deleteItem($event)"
            @changeQty="changeQty($event)"
            @addNewItem="addNewItem($event)"
          />
          <div class="d-flex">
            <div>
              <SimpleButton
                :text="'Add On Item'"
                :srcImage="plusIcon"
                @click="addOnItem()"
              />
            </div>
            <div style="margin-left:auto">
              <SimpleButton
                text="Delete All"
                :srcImage="deleteIcon"
                @click="deleteAll()"
                style="color:red"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="wrap col-3 pl-2" style="padding-top: 27.78px">
        <div class="right-card">
          <div class="card-title">
            Detail Order
          </div>
          <hr class="mt-4">
          <div class="d-flex">
            <div class="detail-name">
              Subtotal
            </div>
            <div class="detail-value">
              Rp630.000
            </div>
          </div>
          <hr class="my-2">
          <div class="d-flex">
            <div class="detail-name">
              Discount
            </div>
            <div class="detail-value">
              -Rp90.000
            </div>
          </div>
          <hr class="my-2">
          <div class="d-flex">
            <div class="detail-name">
              PPN 11%
            </div>
            <div class="detail-value">
              Rp63.000
            </div>
          </div>
          <hr class="my-2">
          <div class="d-flex">
            <div class="total-name"> 
              Total
            </div>
            <div class="total-value">
              Rp603.000
            </div>
          </div>
          <button class="checkout-btn" type="button" data-bs-toggle="modal" :data-bs-target="'#' + idCheckoutModal">
            Checkout
          </button>
        </div>
        <CheckoutModal 
          :idModal="idCheckoutModal"
          :thead="thead"
          :items="tbody[activeTab-1].items"
          :trashIcon="trashIcon"
          @print="print($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

import MyNavbar from '@/components/MyNavbar.vue'
import TextField from '@/components/form/TextField.vue'
import ButtonField from '@/components/form/ButtonField.vue'
import ListTable from '@/components/ListTable.vue'
import SimpleButton from '@/components/SimpleButton.vue'
import CashierTab from '@/components/CashierTab.vue'
import CheckoutModal from '@/components/CheckoutModal.vue'

export default {
  name: 'HomeView',
  components: {
    MyNavbar,
    TextField,
    ButtonField,
    ListTable,
    SimpleButton,
    CashierTab,
    CheckoutModal
},
  async mounted() {
    let bootstrapJS = document.createElement('script')
    bootstrapJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js')
    document.head.appendChild(bootstrapJS)

    let cart = null
    this.tbody[0].id = 1
    await axios.get(this.$host + '/carts/' + this.tbody[0].id).then(response => {
      cart = response.data.data
      console.log(cart)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    updateActiveTab: function (newActiveTab) {
      this.activeTab = newActiveTab
    },
    addTab: async function (tabs) {
      const todayDate = new Date().toISOString().slice(0, 10);
      let newCart = {
        id: null,
        customer_id: null,
        cart_date: todayDate,
        subtotal: 0,
        discount: 0,
        tax: 0,
        total_price: 0,
        notes: 'notes',
        items: [],
      }
      this.tbody.push(newCart)
      this.activeTab = tabs
      console.log(this.tbody)
    },
    closeTab: function (index) {
      if (index + 1 <= this.activeTab) {
        this.activeTab -= 1
      }
      this.tbody.splice(index, 1)
    },
    addOnItem: function () {
      // create new cart item data
      const newItem = {
        product: {},
        quantity: 1,
      }
      this.tbody[this.activeTab - 1].items.push(newItem)
    },
    deleteAll: function () {
      this.tbody[this.activeTab - 1].cartId = 0
      this.tbody[this.activeTab - 1].items = []
    },
    deleteItem: function (index) {
      this.tbody[this.activeTab - 1].items.splice(index, 1)
    },
    changeQty: function(param) {
      // change qty
      let index = param.index
      let value = param.value
      this.tbody[this.activeTab - 1].items[index].quantity = value
    },
    addNewItem: function(param) {
      // console.log(param)
      let product = param.product
      let index = param.index
      this.tbody[this.activeTab - 1].items[index].product = {
        id: product.id,
        skuCode: product.sku_code,
        productName: product.product_name,
        description: product.description,
        unitPrice: product.unit_price,
        discount: {
          id: product.discount ? product.discount.id : 0,
          name: product.discount ? product.discount.name : '',
          discountAmount: product.discount ? product.discount.discount_amount : 0,
        }
      }
      console.log(this.tbody[this.activeTab - 1].items[index].product)
    },
    print: async function (param) {
      let notes = param.notes
      let ppn = param.ppn
      let subtotalItems = param.subtotalItems
      let subtotalOrder = param.subtotalOrder
      let totalOrder = param.totalOrder

      // store to make_invoice 
      let items = []
      let i = 0
      this.tbody[this.activeTab - 1].items.forEach(item => {
        items.push({
          product_id: item.product ? item.product.id : 0,
          quantity: item.quantity,
          subtotal: subtotalItems[i],
        })
        i += 1
      })
      let invoice = {
        customer_id: 1,
        subtotal: subtotalOrder,
        discount: 0,
        tax: ppn,
        total_price: totalOrder,
        notes: notes,
        items: items,
      }
      await axios.post(this.$host + '/invoices/make_invoice', invoice).then(() => {
        console.log('success make invoice')
      }).catch(error => {
        console.log(error)
      })
    }
  },
  data() {
    return {
      trashIcon: require('@/assets/icon/trash.png'),
      plusIcon: require('@/assets/icon/plus.png'),
      deleteIcon: require('@/assets/icon/delete-red.png'),
      idCheckoutModal: 'idCheckoutModal',
      thead: [
        'SKU Code',
        'Item',
        'Price',
        'Qty',
        'Diskon',
        'Subtotal'
      ],
      tbody: [
        {
          id: 0,
          customer_id: 0,
          cart_date: new Date().toISOString().slice(0, 10),
          subtotal: 0,
          discount: 0,
          tax: 0,
          total_price: 0,
          notes: 'notes',
          items: [],
        }
      ],
      activeTab: 1,
    }
  }
}
</script>

<style scoped>
.body {
  background-color: #EBEFF4;
  height: 100vh;
  padding: 10vh 3vw 6vh 3vw;
  z-index: 1;
}
.body .left-card {
  background-color: white;
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
}
.body .left-card .card-title {
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
}
.body .right-card {
  background-color: white;
  padding: 1.5rem;
}
.body .right-card .card-title {
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
}
.body .right-card .detail-name {
  font-weight: 400;
  font-size: 14px;
  color: #202020;
  opacity: 50%;
}
.body .right-card .detail-value {
  font-weight: 400;
  font-size: 14px;
  margin-left: auto;
}
.body .right-card .total-name {
  font-weight: 400;
  font-size: 14px;
}
.body .right-card .total-value {
  font-weight: 700;
  font-size: 20px;
  margin-left: auto;
  color: #079FB7;
}
.body .right-card .checkout-btn {
  width: 100%;
  border: none;
  background: #079FB7;
  color: white;
  padding: 10px;
  border-radius: 6px;
  margin-top: 14px;
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
}
.body .ringkasan-order {
  font-size: 12px;
}
.total-checkout {
  font-size: 16px;
  font-weight: 700;
  color: #079FB7;
  font-style: italic;
}
</style>
