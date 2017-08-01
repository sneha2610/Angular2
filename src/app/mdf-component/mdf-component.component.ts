import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-mdf-component',
  templateUrl: './mdf-component.component.html',
  styleUrls: ['./mdf-component.component.css']
})
export class MdfComponentComponent implements OnInit {
  myForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    company:new FormControl(),
    address:new FormGroup({
      city:new FormControl(null,Validators.required),
      state:new FormControl(null,Validators.required),
      postalCode:new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required)
    })
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value:any){
  console.log(value);
}
}
