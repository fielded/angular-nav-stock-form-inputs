import stockFormInputsTemplate from './stock-form-inputs.html'
import StockFormInputsController from './stock-form-inputs.controller'

const stockFormInputs = {
  template: stockFormInputsTemplate,
  bindings: {
    stock: '=',
    products: '<',
    saveToDraft: '&'
  },
  controller: StockFormInputsController
}

export default stockFormInputs
