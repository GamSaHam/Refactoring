export class Account {
    constructor(accountType, daysOverdrawn) {
        this.type = accountType;
        this._daysOverdrawn = daysOverdrawn;
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }
}


// 강의자는 타입이라는 정의를 했으므로 account 에 overdraft 에 넣는게 낮다고 본다
export class AccountType {
    constructor(type) {
        this._type = type;
    }

    get isPremium() {
        return this._type === 'Premium';
    }

    // if else 문을 위에서 리턴을 하게끔 수정하고 if else 문을 삼항 연산자로 처리해서 가독성을 높여줌
    overdraftCharge(daysOverdrawn) {
        if(!this.isPremium) {
            return daysOverdrawn * 1.75
        }

        const baseCharge = 10;

        return daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85
    }

}
