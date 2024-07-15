<template>
  <div class="container-fluid bg-lilac mb-5">
    <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
      <h1 class="font-weight-semi-bold text-dark text-uppercase mb-3">Shopping Cart</h1>
      <div class="d-inline-flex">
        <p class="m-0"><a href="" class="text-dark">Home</a></p>
        <p class="m-0 px-2 text-dark">-</p>
        <p class="m-0 text-dark">Shopping Cart</p>
      </div>
    </div>
  </div>

  <!-- Cart Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5">
      <div class="col-lg-8 table-responsive mb-5">
        <table class="table table-bordered text-center mb-0">
          <thead class="bg-light-green text-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody class="align-middle">
            <tr>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <img src="../assets/img/Prod1-3.jpg" alt="Product Image" style="width: 100px; margin-right: 10px;">
                  <span>Proteina</span>
                </div>
              </td>
              <td class="align-middle">$150</td>
              
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-minus">-</button>
                  </div>
                  <input type="text" class="form-control form-control-sm bg-light text-center" value="1">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-plus">+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <button class="btn btn-sm btn-light-purple">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <img src="../assets/img/Prod1-4.jpg" alt="Product Image" style="width: 100px; margin-right: 10px;">
                  <span>Combo</span>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-minus">-</button>
                  </div>
                  <input type="text" class="form-control form-control-sm bg-light text-center" value="1">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-plus">+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <button class="btn btn-sm btn-light-purple">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <img src="../assets/img/Prod1-2.jpg" alt="Product Image" style="width: 100px; margin-right: 10px;">
                  <span>Suplementos alimenticios</span>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-minus">-</button>
                  </div>
                  <input type="text" class="form-control form-control-sm bg-light text-center" value="1">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-plus">+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <button class="btn btn-sm btn-light-purple">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <img src="../assets/img/Prod4-2.jpg" alt="Product Image" style="width: 100px; margin-right: 10px;">
                  <span>Proteína wp100</span>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-minus">-</button>
                  </div>
                  <input type="text" class="form-control form-control-sm bg-light text-center" value="1">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-light-purple btn-plus">+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">$150</td>
              <td class="align-middle">
                <button class="btn btn-sm btn-light-purple">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <form class="mb-5" action="">
          <div class="input-group">
            <input type="text" class="form-control p-4" placeholder="Coupon Code">
            <div class="input-group-append">
              <button class="btn btn-light-purple">Apply Coupon</button>
            </div>
          </div>
        </form>
        <div class="card border-light-purple mb-5">
          <div class="card-header bg-light-purple border-0">
            <h4 class="font-weight-semi-bold text-light m-0">Cart Summary</h4>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3 pt-1">
              <h6 class="font-weight-medium">Subtotal</h6>
              <h6 class="font-weight-medium">$150</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">$10</h6>
            </div>
          </div>
          <div class="card-footer border-light-purple bg-transparent">
            <div class="d-flex justify-content-between mt-2">
              <h5 class="font-weight-bold">Total</h5>
              <h5 class="font-weight-bold">$160</h5>
            </div>
            <button class="btn btn-block btn-light-purple my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  .bg-light-purple {
    background-color: #7e23c0ca;
  }

  .btn-light-purple {
    background-color: #7e23c0ca;
    color: #fff;
  }

  .btn-light-purple:hover {
    background-color: #7e23c0ca;
    color: #fff;
  }

  .bg-light-green {
    background-color: #98FB;
  }

  .border-light-purple {
    border-color: #D8BFD8;
  }

  .text-light-purple {
    color: #D8BFD8;
  }

  .text-light-green {
    color: #98FB;
  }
  .btn-light-purple {
  background-color: #b19cd9; /* color lila claro */
  color: white;
}

.bg-light-purple {
  background-color: #b19cd9; /* color lila claro */
  color: white;
}

</style>
