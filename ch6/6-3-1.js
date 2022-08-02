export function price(order) {

  // quntityDiscount 짧은 버전도 이해가 된다면, 문맥상에서 이해가 된다면 discount를 써서 가독성을 높인다.

  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shipping;;
}


// export function price(order) {
//   // 가격(price) = 기본가격 - 수량할인 + 배송비
//   return (
//       order.quantity * order.itemPrice -
//       Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//       Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }
