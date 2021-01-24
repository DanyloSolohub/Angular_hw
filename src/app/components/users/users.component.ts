import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Posts} from '../../models/Posts';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  posts: Posts[];
  userPost: Posts[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this
      .httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.users = value);
    this
      .httpClient
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(value => this.posts = value);
  }

  getBubbleUser(user: User): void {
    this.userPost = this.posts.filter(value => value.userId === user.id);
    console.log(this.userPost);
  }
}
