import { Injectable } from '@angular/core';

@Injectable()
export class CarServiceService {
  cars:any;
  constructor() {
    this.cars = [];
      this.cars.push({label: 'Audi', value: 'Audi'});
      this.cars.push({label: 'BMW', value: 'BMW'});
      this.cars.push({label: 'Fiat', value: 'Fiat'});
      this.cars.push({label: 'Ford', value: 'Ford'});
      this.cars.push({label: 'Honda', value: 'Honda'});
      this.cars.push({label: 'Jaguar', value: 'Jaguar'});
      this.cars.push({label: 'Mercedes', value: 'Mercedes'});
      this.cars.push({label: 'Renault', value: 'Renault'});
      this.cars.push({label: 'VW', value: 'VW'});
      this.cars.push({label: 'Volvo', value: 'Volvo'});
  }
  getCars(){
    return (this.cars);
  }
}
