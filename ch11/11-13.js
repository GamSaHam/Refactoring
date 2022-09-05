// 예외를 사전확인으로 바꾸기
// 예측 가능한 오류라면 예외를 남용하는것은 안좋다.
const values = [];

function getValueForPeriod(periodNumber) {

    return values[periodNumber] ?? 0

}

let period = getValueForPeriod(-10);
console.log(period)


///////// Before
// const values = [];
// function getValueForPeriod(periodNumber) {
//     const value = values[periodNumber];
//     if (!value) {
//         throw new Error('value is undefined');
//     }
//     return value;
// }
//
// try {
//     getValueForPeriod(-10);
// } catch (error) {
//     console.log('에러 발생!');
// }
