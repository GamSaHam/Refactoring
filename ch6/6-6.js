class Person {
    #lastName;
    #firstName;

    constructor(data) {
        this.#lastName = data.lastName;
        this.#firstName = data.firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get firstName() {
        return this.#firstName;
    }
}



let defaultOwner = new Person({firstName: '마틴', lastName: '파울러'});

// 클래스를 새로만들어서 리턴을 한다.
export function getDefaultOwner() {
    return defaultOwner;
}


// let defaultOwner = { firstName: '마틴', lastName: '파울러' };
//
// export function getDefaultOwner() {
//   return defaultOwner;
// }
