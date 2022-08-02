export class Order {

  // #을 통해서 private 필드를 표현할 수 있다.
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {

    return this.basePrice - this.discount + this.shipping;
  }

  get basePrice(){
    return this.quantity * this.itemPrice
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100)
  }
}


// constructor(aRecord) {
//   this._data = aRecord;
// }
//
// get quantity() {
//   return this._data.quantity;
// }
// get itemPrice() {
//   return this._data.itemPrice;
// }
//
// get price() {
//   return (
//       this.quantity * this.itemPrice -
//       Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
//       Math.min(this.quantity * this.itemPrice * 0.1, 100)
//   );
// }
// }
