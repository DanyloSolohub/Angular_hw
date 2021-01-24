import {Component, Input, OnInit} from '@angular/core';
import {Posts} from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: Posts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
