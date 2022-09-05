
// 중접조건문을 보호구문으로 빼기
export function adjustedCapital(instrument, anInstrument) {
    if(!isEligibleForAdjustedCapital(instrument)) {
        return 0;
    }

    return (instrument.income / instrument.duration) * anInstrument.adjustmentFactor;
}

function isEligibleForAdjustedCapital(instrument) {
    return instrument.capital > 0
    && instrument.interestRate > 0
    && instrument.duration > 0
}


/////////
// export function adjustedCapital(instrument) {
//   let result = 0;
//   if (instrument.capital > 0) {
//     if (instrument.interestRate > 0 && instrument.duration > 0) {
//       result =
//           (instrument.income / instrument.duration) *
//           anInstrument.adjustmentFactor;
//     }
//   }
//   return result;
// }
