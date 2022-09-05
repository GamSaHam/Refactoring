// 명령을 함수로 바꾸기

// 객체를 생성할 필요없고 일회성이면 아래같이 사용해도 된다.
// Math.max를 예시로둠
export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;

}

///////// Before
// export class ChargeCalculator {
//   constructor(customer, usage, provider) {
//     this._customer = customer;
//     this._usage = usage;
//     this._provider = provider;
//   }
//   get baseCharge() {
//     return this._customer.baseRate * this._usage;
//   }
//   get charge() {
//     return this.baseCharge + this._provider.connectionCharge;
//   }
// }
