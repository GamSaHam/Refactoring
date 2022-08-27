// 상속에 문제점
// 딱 하나만 상속이 가능함
// 불필요한 기능이 상속됨
// 족보가 꼬일 수 있음 A-> B -> C
// 수정이 어려움
// 상속보다는 컴포지션을 더 선호하라

// 메서드 올리기
// 예시 1
class Employee {
  #name;

  get name() {
    return this.#name;
  }
}

class Salesperson extends Employee {
}

class Engineer extends Employee {
}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
}
class Employee extends Party {
}


/////// Before
// 예시 1
// class Employee {}
//
// class Salesperson extends Employee {
//   get name() {}
// }
//
// class Engineer extends Employee {
//   get name() {}
// }
//
// // 예시 2
// class Party {}
//
// class Department extends Party {
//   get totalAnnualCost() {
//     return this.monthlyCost * 12;
//   }
// }
// class Employee extends Party {
//   get annualCost() {
//     return this.monthlyCost * 12;
//   }
// }
