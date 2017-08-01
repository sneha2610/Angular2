import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
newContact:any;
myName:string="Sneha Krishnadas";
  constructor() { }

  ngOnInit() {

  }

onSubmit(value:any){
  console.log(value);
}
}
