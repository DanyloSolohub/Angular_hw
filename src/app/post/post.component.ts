import { Component, OnInit } from '@angular/core';
import {Post} from '../models/Post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

userPost: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.postService.getAllPost().subscribe(postsArr => {
      this.activatedRoute.params.subscribe(value => {
        this.userPost = postsArr.filter(value1 => +value1.userId === +value.id);
      });
    });
  }

  ngOnInit(): void {
  }

}
