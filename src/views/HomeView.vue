<template>
  <div class="home">
    <MyNavbar/>

    <div class="body row" style="margin-right: 0;">
      <div class="wrap col-9 p-2">
        <CashierTab />
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
          <hr>
          <div class="d-flex mb-3">
            <div class="card-title">
              List Order
            </div>
            <div class="scan-wrap" style="margin-left:auto">
              <TextField placeholder="Input or Scan items" name="scan" id="scan"/>
            </div>
          </div>
          <ListTable :thead="thead" :tbody="tbody"/>
          <div class="d-flex">
            <div>
              <SimpleButton src="./../assets/images/plus.png" text="Add On Item" alt="Add"/>
            </div>
            <div style="margin-left:auto">
              <SimpleButton src="./../assets/images/x.png" text="Delete All" alt="Delete" style="color:red"/>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap col-3 p-2">
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
          <button class="checkout-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Checkout
          </button>
        </div>  
        <!-- Modal Checkout -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <div class="d-flex align-items-center">
                  <div class="my-modal-title">ONEGA Store</div>
                  <div class="ms-auto">
                    <div class="nama-kasir">Siti Rahmatullah</div>
                    <div class="cashier">Cashier</div>
                  </div>
                </div>
                <hr class="my-2">
                <div class="d-flex">
                  <div class="me-5">
                    <div class="description-name">
                      ID Transaksi
                    </div>
                    <div class="description-value">
                      ID-3154
                    </div>
                  </div>
                  <div>
                    <div class="description-name">
                      Date
                    </div>
                    <div class="description-value">
                      01-01-2022
                    </div>
                  </div>
                </div>
                <hr class="my-2">
                <div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SKU Code</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Diskon</th>
                        <th scope="col">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                      <tr>
                        <td>SKH-121</td>
                        <td>Sun Kacang Hijau 100gr <span class="item-promo">Promo MERDEKA 5%</span></td>
                        <td>100.000</td>
                        <td>
                          <div class="qty">1</div>
                        </td>
                        <td>
                          <div class="diskon">
                            5.000
                          </div>
                        </td>
                        <td class="d-flex align-items-center">
                          <div class="me-2">Rp 95.000</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr class="my-1">
                <div class="d-flex">
                  <div class="ms-auto">
                    <table class="ringkasan-order mt-2">
                      <tr class="d-flex">
                        <td class="text-end me-5">
                          Subtotal
                        </td>
                        <td class="text-end">
                          Rp125.000
                        </td>
                      </tr>
                      <tr class="d-flex">
                        <td class="text-end me-5">
                          Diskon
                        </td>
                        <td class="text-end">
                          Rp0.0
                        </td>
                      </tr>
                      <tr class="d-flex">
                        <td class="text-end me-5">
                          PPN 11%
                        </td>
                        <td class="text-end">
                          Rp12.500
                        </td>
                      </tr>
                      <tr class="d-flex total-checkout">
                        <td class="text-end me-5">
                          Total
                        </td>
                        <td class="text-end">
                          Rp137.500
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <hr class="mt-1 mb-2">
                <div class="d-flex">
                  <div class="ms-auto me-2">
                    <button type="button" class="border-button">
                      <img src="assets/icon/pencil.png" alt="" width="12px">
                      <span>Notes</span>
                    </button>
                  </div>
                  <div class="me-2">
                    <button type="button" class="border-button">
                      <img src="assets/icon/save.png" alt="" width="12px">
                      <span>Save</span>
                    </button>
                  </div>
                  <div>
                    <button type="button" class="fill-button">
                      <img src="assets/icon/print.png" alt="" width="12px">
                      <span>Print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default {
  name: 'HomeView',
  components: {
    MyNavbar,
    TextField,
    ButtonField,
    ListTable,
    SimpleButton,
    CashierTab
  },
  data() {
    return {
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
          'sku-code': 'SKH-121',
          'item': 'Sun Kacang Hijau 100gr',
          'promo': 'Promo MERDEKA 5%',
          'price': '100.000',
          'qty': '1',
          'diskon': '5.000',  
          'subtotal': '95.000'
        },
        {
          'sku-code': 'SKH-121',
          'item': 'Sun Kacang Hijau 100gr',
          'promo': 'Promo MERDEKA 5%',
          'price': '100.000',
          'qty': '1',
          'diskon': '5.000',  
          'subtotal': '95.000'
        },
        {
          'sku-code': 'SKH-121',
          'item': 'Sun Kacang Hijau 100gr',
          'promo': 'Promo MERDEKA 5%',
          'price': '100.000',
          'qty': '1',
          'diskon': '5.000',  
          'subtotal': '95.000'
        }
      ],
    }
  }
}
</script>

<style scoped>
.body {
  background-color: #EBEFF4;
  height: 100vh;
  padding: 6rem 3rem 2rem 3rem;
  z-index: 1;
}
.body .left-card {
  background-color: white;
  padding: 1.5rem;
}

.body .left-card .card-title {
  font-weight: 600;
  font-style: italic;
  font-size: 18px;
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
}

.body .modal .modal-body {
  margin: 0.5rem 1rem;
}

.body .modal .my-modal-title {
  font-size: 16px;
  font-weight: 600;
}

.body .modal .nama-kasir {
  font-size: 12px;
  font-weight: 600;
}

.body .modal .cashier {
  color: grey;
  font-size: 10px;
}

.body .description-name {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}

.body .description-value {
  font-size: 14px;
  color: black;
}

.body .modal .table th {
  background: white;
  color: black;
  font-weight: 600;
}

.body .modal .table .qty {
  border: none;
  text-align: left;
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

.border-button {
  border: 1px solid #079FB7;
  background: white;
  color: #079FB7;
  font-size: 14px;
  border-radius: 4px;
  padding: 6px;
}

.fill-button {
  border: none;
  background: #079FB7;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  padding: 6px 8px;
}
</style>
