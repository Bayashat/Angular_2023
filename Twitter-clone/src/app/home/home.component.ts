import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Post } from '../shared/models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  posts: Post[] = []; 
  liked: boolean = false;
  showComments: boolean = false;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  likePost(post: Post) {
    if(!this.liked){
      this.liked = true;
      post.likes++;
    }
    else{
      post.likes--;
      this.liked = false;
    }
  }

  commentOnPost(post: Post) {
    this.postService.getComments(post);
  }

  
  goToAddPostPage() {
    this.router.navigate(['/feed']);
  }

  toggleComments(post: Post) {
    this.showComments = !this.showComments;
  }
}