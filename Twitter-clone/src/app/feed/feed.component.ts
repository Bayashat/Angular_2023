import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Post } from '../shared/models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent{
  newPost: Post = new Post();

  constructor(private router: Router, private postService: PostService) {}


  onSubmit() {
    this.postService.addPost(this.newPost);

    this.router.navigate(['/home']);

  }
}
