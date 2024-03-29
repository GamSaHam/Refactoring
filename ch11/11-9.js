// 함수를 명령으로 바꾸기

// 긴함수를 명령객체로 바꾸기
export function score(candidate, medicalExam, scoringGuide) {
  return new Score(candidate, medicalExam, scoringGuide).execute()
}

class Score {

  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate
    this.medicalExam = medicalExam
    this.scoringGuide = scoringGuide
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }

}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}

////// Before
// export function score(candidate, medicalExam, scoringGuide) {
//   let result = 0;
//   let healthLevel = 0;
//   let highMedicalRiskFlag = false;
//
//   if (medicalExam.isSmoker) {
//     healthLevel += 10;
//     highMedicalRiskFlag = true;
//   }
//   let certificationGrade = 'regular';
//   if (scoringGuide.stateWithLowCertification(candidate.originState)) {
//     certificationGrade = 'low';
//     result -= 5;
//   }
//   // lots more code like this
//   result -= Math.max(healthLevel - 5, 0);
//   return result;
// }
//
// export class ScoringGuide {
//   stateWithLowCertification(state) {
//     return state < 5;
//   }
// }
