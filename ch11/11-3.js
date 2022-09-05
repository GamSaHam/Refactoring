// 플래그 인수 제거하기
// 예제 1

// 함수를 두개로 분리
function setWidth(value) {
  this._width = value
}

function setHeight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}

  #book(customer, isPremium) {} // 내부적으로 사용하는것은 Ok
}

// 예제 3
function switchOn() {
}
function switchOff() {
}


/////////// Before
// 예제 1
// function setDimension(name, value) {
//   if (name === 'height') {
//     this._height = value;
//     return;
//   }
//   if (name === 'width') {
//     this._width = value;
//     return;
//   }
// }
//
// // 예제 2
// class Concert {
//   book(customer, isPremium) {}
// }
//
// // 예제 3
// function setSwitch(on);
