import { Component, OnInit } from '@angular/core';

// form validator
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // form controle validator
  info = new FormGroup({
    Name: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)
  });

  employees = [
    {
      name: "David",
      img: "/assets/img/David.jpg",
      age: 32
    },{
      name: "Jim",
      img: "/assets/img/Jim.jpg",
      age: 28
    },{
      name:"Elena",
      img: "/assets/img/Elena.jpg",
      age: 26
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
   }

  }
  
}
