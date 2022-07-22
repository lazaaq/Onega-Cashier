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
            :tbody="tbody[activeTab-1]"
            :trashIcon="trashIcon"
            @deleteItem="deleteItem($event)"
            @changeQty="changeQty($event)"
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
          <button class="checkout-btn" type="button" data-bs-toggle="modal" data-bs-target="#idCheckoutModal">
            Checkout
          </button>
        </div>
        <CheckoutModal 
          :idModal="idCheckoutModal"
          :thead="thead"
          :tbody="tbody[activeTab-1]"
          :trashIcon="trashIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
  mounted() {
    let bootstrapJS = document.createElement('script')
    bootstrapJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js')
    document.head.appendChild(bootstrapJS)
  },
  methods: {
    updateActiveTab: function (newActiveTab) {
      this.activeTab = newActiveTab
    },
    addTab: function (tabs) {
      this.tbody.push([])
      this.activeTab = tabs
    },
    closeTab: function (index) {
      if (index + 1 <= this.activeTab) {
        this.activeTab -= 1
      }
      this.tbody.splice(index, 1)
      console.log(this.tbody)
      console.log(index)
      console.log(this.activeTab)
    },
    addOnItem: function () {
      let newItem = {
        'sku-code': '',
        'item': '',
        'promo': 'Promo MERDEKA 5%',
        'price': '',
        'qty': 1,
        'diskon': '0',
        'subtotal': 0
      }
      this.tbody[this.activeTab - 1].push(newItem)
    },
    deleteAll: function () {
      this.tbody[this.activeTab - 1] = []
    },
    deleteItem: function (index) {
      this.tbody[this.activeTab - 1].splice(index, 1)
    },
    changeQty: function (param) {
      // change qty
      let index = param[0]
      let value = param[1]
      this.tbody[this.activeTab - 1][index].qty = value

      // change subtotal
      this.tbody[this.activeTab - 1][index].subtotal = value * this.tbody[this.activeTab - 1][index].price
      console.log(this.tbody[this.activeTab - 1][index])
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
        [
          {
            'sku-code': 'SKH-1',
            'item': 'Sun Kacang Hijau 100gr',
            'promo': 'Promo MERDEKA 5%',
            'price': 100000,
            'qty': 1,
            'diskon': '5.000',
          },
          {
            'sku-code': 'SKH-2',
            'item': 'Sun Kacang Hijau 100gr',
            'promo': 'Promo MERDEKA 5%',
            'price': 100000,
            'qty': 1,
            'diskon': '5.000',
          }
        ],
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
