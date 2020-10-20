import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // click counter
  clickCounter: number =0;
  constructor() { }

  // click counter function
  countClick(){
    this.clickCounter += 10;
  }
  ngOnInit(): void {
  }

}
