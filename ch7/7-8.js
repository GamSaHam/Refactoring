

// (중개자, 위임자) -> 컴포지션
// 사람 -> 전화번호
class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  get manager() {
    return this.#department.manager;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }


  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));
console.log(person.name);

// 외부에 지나치게 노출한 케이스
console.log(person.manager);
console.log(person.chargeCode);


//
// class Person {
//   #name;
//   #department;
//   constructor(name, department) {
//     this.#name = name;
//     this.#department = department;
//   }
//
//   get name() {
//     return this.#name;
//   }
//
//   get department() {
//     return this.#department;
//   }
//
//   set department(arg) {
//     this.#department = arg;
//   }
// }
//
// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }
//
//   get chargeCode() {
//     return this.#chargeCode;
//   }
//
//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }
//
//   get manager() {
//     return this.#manager;
//   }
//
//   set manager(arg) {
//     this.#manager = arg;
//   }
// }
//
// const person = new Person('Tom', new Department('aManager', '999'));
// console.log(person.name);
//
// // 외부에 지나치게 노출한 케이스
// console.log(person.department.manager);
// console.log(person.department.chargeCode);
