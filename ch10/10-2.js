function disabilityAmount(employee) {
    return isNotEligibleForDisability(employee) ? 0 : 1;
}

function isNotEligibleForDisability(employee) {
    return employee.seniority < 2
    || employee.monthsDisabled > 12
    || employee.isPartTime
}

// function disabilityAmount(employee) {
//   if (employee.seniority < 2) return 0;
//   if (employee.monthsDisabled > 12) return 0;
//   if (employee.isPartTime) return 0;
//   return 1;
// }
