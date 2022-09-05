// 수정된 값 반환하기

// 함수내부에서 외부에 값을 수정하면 사이드이팩트를 만드는 요소
// 자바스크립트에 클로져 기능으로 인해 가능했한 구문
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;

    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }

    return result
  }

  let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}


// Before
// export function ascentVelocity(points, totalMinutes) {
//   function calculateAscent() {
//     for (let i = 1; i < points.length; i++) {
//       const verticalChange = points[i].elevation - points[i - 1].elevation;
//       totalAscent += verticalChange > 0 ? verticalChange : 0;
//     }
//   }
//
//   let totalAscent = 0;
//   calculateAscent([{ elevation: 10 }, { elevation: 20 }]);
//
//   return totalAscent / totalMinutes;
// }
