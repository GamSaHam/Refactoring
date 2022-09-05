// 생성자를 팩터리 함수로 바꾸기
// 생성자가 복잡할때 팩터리 함수로 만든다.
// 자바스크립트는 private 생성자를 만들수 없음
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E')
  }

  static createSalesman(name) {
    return new Employee(name, 'S')
  }

  static createManager(name) {
    return new Employee(name, 'M')
  }

}


const employee = Employee.createEngineer('엘리')


/////// Before
// export class Employee {
//   constructor(name, typeCode) {
//     this._name = name;
//     this._typeCode = typeCode;
//   }
//   get name() {
//     return this._name;
//   }
//
//   get type() {
//     return Employee.legalTypeCodes[this._typeCode];
//   }
//
//   static get legalTypeCodes() {
//     return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
//   }
// }
