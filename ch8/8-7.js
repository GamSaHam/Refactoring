export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(people)}`;

  function youngestAge(people) {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary(people) {
    return people.reduce((total, p) => (total += p.salary), 0)
  }
}

// 2Big(N) 애 엎애 구문을 없앤다. 성능 아직 하지마라를 원칙으로 한다.
let people = [
    {age: 21, salary: 20000},
    {age: 19, salary: 10000}
]

console.log(reportYoungestAgeAndTotalSalary(people));
