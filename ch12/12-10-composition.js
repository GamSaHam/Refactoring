// 컴포지션(위임)
class Printer {
    #printerHeader // Delegate 항목을 바꾸어 Header 바꿈

    constructor(printerHeader) {
        this.#printerHeader = printerHeader
    }

    print() {
        this.#printerHeader
            ? this.#printerHeader.print()
            : console.log('기본적인 출력!')
    }
}

class RedPrinterHeader {
    print() {
        console.log('🔴 출력!');
    }
}

class BlackPrinterHeader {
    print() {
        console.log('⚫️ 출력!');
    }

}

const printers = [
    new Printer()
    , new Printer(new RedPrinterHeader())
    , new Printer(new BlackPrinterHeader())
]

printers.forEach((printer) => printer.print())

