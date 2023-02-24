class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return `I have ${this.brand}, it is ${this.model}`;
  }
}

class Mustang extends Car {
  constructor() {
    super("Ford", "Mustang");
  }
}

const myCar = new Mustang();
const carInfo = document.querySelector("#car-info");
carInfo.textContent = myCar.getInfo();
