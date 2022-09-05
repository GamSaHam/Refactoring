import {printOwing} from "../../ch6-testable/6-1";

class Console {
    #content = '';
    constructor() {
    }

    log(message) {
        this.#content += `${message}\n`;
    }

    get content() {
        return this.#content
    }
}


class Clock {
    constructor() {
    }

    get today() {
        return {
            getFullYear() {
                return 2022;
            },
            getMonth() {
                return 0;
            },
            getDate() {
                return 21;
            }
        };
    }

}

describe('printOwning', () => {
    it('should pring owning', () => {
        const invoice = {
            orders: [{ amount: 2 }, { amount: 5 }],
            customer: '엘리',
        };

        const expected =
            '***********************\n' +
            '**** Customer Owes ****\n' +
            '***********************\n' +
            'name: 엘리\n' +
            'amount: 7\n' +
            'due: 2/20/2022\n'

        const console = new Console()

        printOwing(invoice, console, new Clock())
        // 동일한 데이터라면 동일한 결과가 나와야 테스트가 가능한다.
        // console.log, Date 항목일 DI해서 테스트 진행해야 한다.
        expect(console.content).toBe(expected)

    })
})
