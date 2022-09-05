function calculateCharge(date, quantity, plan) {

    return isSummer() ? summerCharge() : regularsCharge();

    // 내부 함수
    function isSummer() {
        return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
    }

    function summerCharge() {
        return quantity * plan.summerRate;
    }

    function regularsCharge() {
        return quantity * plan.regularRate + plan.regularServiceCharge;
    }

}

