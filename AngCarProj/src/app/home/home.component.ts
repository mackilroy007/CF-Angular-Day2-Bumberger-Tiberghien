import { Component, OnInit } from '@angular/core';

// form validator
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // form controle validator
  update = new FormGroup({
    model: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    hp: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  // cars
  cars = [
    {
      model: "Audi A8",
      img: "/assets/img/Audi-A8.jpg",
      hp: "500 Hp",
      price: 100000
    }, {
      model: "BMW Z4",
      img: "/assets/img/BMW-Z4.jpg",
      hp: "400 Hp",
      price: 65000
    }, {
      model: "Toyota Supra",
      img: "/assets/img/Supra.jpg",
      hp: "400 Hp",
      price: 50000
    }, {
      model: "Tesla Model S",
      img: "/assets/img/Tesla-S.jpg",
      hp: "375 kW",
      price: 70000
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.update.valid) {
      var b = this.update.value;
      console.table(b);
      this.cars.push(b);
    }

  }

}
