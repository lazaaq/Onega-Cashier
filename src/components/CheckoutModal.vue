<template>
  <div class="modal fade" :id="idModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-center">
            <div class="my-modal-title">ONEGA Store</div>
            <div class="ms-auto">
              <div class="nama-kasir">Siti Rahmatullah</div>
              <div class="cashier">Cashier</div>
            </div>
          </div>
          <hr class="my-1">
          <div class="d-flex">
            <div class="me-4">
              <div class="description-name">
                ID Transaksi
              </div>
              <div class="description-value">
                ID-3154
              </div>
            </div>
            <div class="me-4">
              <div class="description-name">
                Date
              </div>
              <div class="description-value">
                01-01-2022
              </div>
            </div>
            <div>
              <div class="description-name">
                Invoice Number
              </div>
              <div class="description-value">
                12345
              </div>
            </div>
          </div>
          <hr class="my-1">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(val, index) in thead" :key="index" :class="index" scope="col">{{ val }}</th>
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
                  <td class="d-flex">
                    <div class="">{{ val['subtotal'] }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr class="my-1">
          <div class="d-flex">
            <div class="ms-auto">
              <table class="ringkasan-order">
                <tr class="">
                  <td class="text-end pe-5">
                    Subtotal
                  </td>
                  <td class="text-end">
                    Rp125.000
                  </td>
                </tr>
                <tr class="">
                  <td class="text-end pe-5">
                    Diskon
                  </td>
                  <td class="text-end">
                    Rp0.0
                  </td>
                </tr>
                <tr class="">
                  <td class="text-end pe-5">
                    PPN 11%
                  </td>
                  <td class="text-end">
                    Rp12.500
                  </td>
                </tr>
                <tr class="total-checkout">
                  <td class="text-end pe-5">
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
          <div class="notes">
            <div class="judul-notes">
              Notes / Terms
            </div>
            <div class="input-notes mt-1">
              <input type="text" name="notes" id="notes" placeholder="Enter notes or terms of service that are visible to your customer">
            </div>
          </div>
          <hr class="mt-1 mb-2">
          <div class="d-flex">
            <div class="ms-auto me-2">
              <button type="button" class="border-button">
                <img src="@/assets/icon/save.png" alt="" width="12px">
                <span>Save</span>
              </button>
            </div>
            <div>
              <button type="button" class="fill-button">
                <img src="@/assets/icon/print.png" alt="" width="12px">
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutModal',
  props: [
    'idModal',
    'thead',
    'tbody'
  ],
}
</script>

<style scoped>
  .table th {
    padding: 0;
  }
  .modal-dialog {
    height: 94vh!important;
    margin-top: 20px!important;
    margin-bottom: 0!important;
  }
  .modal-body {
    padding: 1.75vh 2vw;
  }
  .nama-kasir, .cashier {
    font-size: 10px;
    text-align: right;
  }
  .nama-kasir {
    font-weight: 600;
  }
  .cashier {
    color: grey;
  }
  .my-modal-title {
    font-style: italic;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Averta Demo', 'courier new';
  }
  .description-name {
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
  }
  .description-value {
    font-size: 11px;
    color: black;
  }
  .body .modal .table th {
    background: white!important;
    color: black;
    font-weight: 600;
  }
  .body .modal .table .qty {
    border: none;
    text-align: left;
  }
  .border-button {
    border: 1px solid #079FB7;
    background: white;
    color: #079FB7;
    font-size: 11px;
    border-radius: 4px;
    padding: 6px;
  }
  .fill-button {
    border: none;
    background: #079FB7;
    color: white;
    font-size: 11px;
    border-radius: 4px;
    padding: 6px 8px;
  }

  .table {
    font-size: 11px;
    margin-bottom: 0.5vh;
  }
  .table th {
    font-weight: 400;
    background-color: #079FB7;
    color: white;
    padding: 0.4vh 1vw;
  }
  .table td {
    padding: 0.5vh 1vw;
    font-size: 10px;
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
  .trash-btn img{
    width: 10px;
    margin-left: 4px;
  }
  .ringkasan-order {
    font-size: 10px;
  }
  .ringkasan-order .total-checkout {
    font-size: 13px;
    font-style: italic;
    font-weight: 700;
    color: #079FB7;
  }
  .notes .judul-notes {
    font-size: 14px;
    font-weight: 500;
  } 
  .notes .input-notes input {
    border: none;
    background-color: transparent;
    outline: none;
    width: 100%;
    font-size: 12px;
  }
  .notes .input-notes input::placeholder {
    font-size: 12px;
  }
</style>