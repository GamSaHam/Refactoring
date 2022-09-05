// low level, high level 추상화 레벨
class Bird {
  #name;
  constructor(name) {
    this.#name = name;
    this._name = name;

  }

  get plumage() {
    return this.#name;
  }

  get airSpeedVelocity() {
    return null;
  }

  get name() {
    return this._name;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  #numberOfCoconuts
  constructor() {
    super('AfricanSwallow');
  }

  get plumage() {
    return this.#numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.#numberOfCoconuts;
  }

  set numberOfCoconuts(numberOfCoconuts) {
    this.#numberOfCoconuts = numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  #voltage
  #isNailed

  constructor() {
    super('NorwegianBlueParrot');
  }

  get plumage() {
    return this.#voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.#isNailed ? 0 : 10 + this.#voltage / 10;
  }

  set voltage(value) {
    this.#voltage = value;
  }

  set isNailed(value) {
    this.#isNailed = value;
  }
}

function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
console.log('result', result)

////
// export function plumages(birds) {
//   let map = birds.map((b) => [b.name, plumage(b)]);
//   let map1 = new Map(map);
//   return map1;
// }
// export function speeds(birds) {
//   return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
// }
// export function plumage(bird) {
//   switch (bird.type) {
//     case 'EuropeanSwallow':
//       return 'average';
//     case 'AfricanSwallow':
//       return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
//     case 'NorwegianBlueParrot':
//       return bird.voltage > 100 ? 'scorched' : 'beautiful';
//     default:
//       return 'unknown';
//   }
// }
// export function airSpeedVelocity(bird) {
//   switch (bird.type) {
//     case 'EuropeanSwallow':
//       return 35;
//     case 'AfricanSwallow':
//       return 40 - 2 * bird.numberOfCoconuts;
//     case 'NorwegianBlueParrot':
//       return bird.isNailed ? 0 : 10 + bird.voltage / 10;
//     default:
//       return null;
//   }
// }
