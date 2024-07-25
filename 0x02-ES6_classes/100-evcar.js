/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}

const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
