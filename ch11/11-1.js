// 질의 함수와 변경 함수 분리하기.

// 함수는 하나의 기능을 동작해야한다.
// 예제 1
function totalOutstanding() {
  return customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill(){
  // bill을 보냄
}

// 예제 2
// 질의함수 업데이트 하는 함수 분리
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm,miscreant )
}

function findMiscreant(people) {

  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }

  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}



///////// Before
// 예제 1
// function totalOutstandingAndSendBill() {
//   const result = customer.invoices.reduce(
//       (total, each) => each.amount + total,
//       0
//   );
//   sendBill();
//   return result;
// }
//
// // 예제 2
// export function alertForMiscreant(people, alarm) {
//   for (const p of people) {
//     if (p === 'Don') {
//       setOffAlarms(alarm, p);
//       return 'Don';
//     }
//     if (p === 'John') {
//       setOffAlarms(alarm, p);
//       return 'John';
//     }
//   }
//   return '';
// }
//
// function setOffAlarms(alarm, p) {
//   alarm.setOff('Found Miscreant ' + p);
// }
