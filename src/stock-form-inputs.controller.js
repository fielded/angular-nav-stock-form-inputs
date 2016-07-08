const productTypes = (products) => {
  return Object.keys(products)
}

class StockFormInputsController {
  $onInit () {
    this.productTypes = productTypes(this.products)
  }

  $onChanges (changesObj) {
    if (changesObj.products) {
      this.productTypes = productTypes(this.products)
    }
  }
}

export default StockFormInputsController
