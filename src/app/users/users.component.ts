import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() {
  }
  users = [];

  name = new FormControl();
  age = new FormControl();
  email = new FormControl();


  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });

  ngOnInit(): void {
  }


  action(): void {
    this.users.push(this.myForm.value);
  }
}
