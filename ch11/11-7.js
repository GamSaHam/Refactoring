
// 세터 제거하기
// 데이터가 읽기/쓰기가가능한지 캡슐화해야한다.
class Person {
  get name() {}
}


/////////// Before
// class Person {
//   get name() {}
//   set name(value) {}
// }
