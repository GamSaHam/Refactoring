class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if(!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }

    return this.findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}


let data ={number: 100, currentId: 10}

const customerRepository = new CustomerRepository()
const order = new Order(data.number, customerRepository.registerCustomer(data.currentId));

// 불변성이 좋다.
