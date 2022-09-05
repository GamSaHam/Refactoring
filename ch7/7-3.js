// NumberRange 항목처럼 진행
export class Order {

  constructor(priority) {
    this.priority = priority;
  }

  // 내부에 책임을 두고 재사용성을 높인다.
  isHighPriority(other) {
      // 유틸리티 함수
      return this.priority.higherThan(other);
  }
}

// 강의자가 추가한 애용
class Priority {
  #value;
  constructor(value) {

    if(Priority.legalValues().includes(value)){
      this.#value = value;
    }else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }


  // #index private getter
  get index() {
    return Priority.legalValues().indexOf(this.#value)
  }

  equal(other) {
    return this.index === other.index;
  }

  higherThan(other) {

    return this.index > other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }
}


const orders = [
  new Order(new Priority('normal')),
  new Order(new Priority('high')),
  new Order(new Priority('rush')),
];

var priority = new Priority('normal');

// 외부에 로직이 있다.
const highPriorityCount = orders.filter(
  (o) => o.isHighPriority(priority)
).length;

console.log(highPriorityCount)
