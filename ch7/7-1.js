class Organization {
    #name;
    #country;
    #data;

    constructor(data) {
        this.#data = data;
        this.#name = data.name;
        this.#country = data.country;
    }

    get name() {
        return this.#name;
    }

    get country() {
        return this.#country;
    }

    set country(value) {
        this.#country = value;
    }

    get rawData() {
        return {...this.#data} // 얉은복사, cloneDeep
    }

}

const organization = new Organization({name:'Acme Gooseberries', country:'GB'});

// organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);


// const organization = { name: 'Acme Gooseberries', country: 'GB' };
//
// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);
