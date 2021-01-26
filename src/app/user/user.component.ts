import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  @Output()
  bubleUpUser = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getUserPosts(user: User): void {
    this.bubleUpUser.emit(user);
  }
}
