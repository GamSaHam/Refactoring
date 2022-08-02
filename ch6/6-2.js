// 예제 1
export function rating(driver) {
  return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 너무 불필요하게 Extract 된것을 inline한 예제
// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

// 예제 2
function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return lines;
}

// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(['location', customer.location]);
// }
