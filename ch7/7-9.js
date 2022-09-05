
// 함수라는것도 캡슐화 할수 있다.
// 유닛 테스트가 있다는 가정하에 고처야한다.
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent']

  return people.find((p) => candidates.includes(p) || '')
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
//
// function foundPerson(people) {
//   for (let i = 0; i < people.length; i++) {
//     if (people[i] === 'Don') {
//       return 'Don';
//     }
//     if (people[i] === 'John') {
//       return 'John';
//     }
//     if (people[i] === 'Kent') {
//       return 'Kent';
//     }
//   }
//   return '';
// }
//
// console.log(foundPerson(['John']));
// console.log(foundPerson(['Don', 'John']));
// console.log(foundPerson(['Kent', 'Don', 'John']));
// console.log(foundPerson(['Lisa', 'Don', 'Tom']));

