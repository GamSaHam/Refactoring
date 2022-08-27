// 상속

// 흑백 프린터, 다른 프린터가 생길경우나
// Network를 상속해야하는데 다중상속안된다.
// 프린터 상속이 맞지 않는다.

class Printer {
    print() {
        console.log('기본적인 출력!')
    }
}

class Network {
    send();
}

class RedPrinter extends Printer {

    print() {
        console.log('🔴 출력!');
    }

}

const printers = [new Printer(), new RedPrinter()]

printers.forEach((printer) => printer.print())

