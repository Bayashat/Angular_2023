import { Injectable } from '@angular/core';
import { Post, Comment } from 'src/app/shared/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = 
  [
    {
      id: 1,
      title: 'Exciting Trip to the Beach',
      body: 'Had a wonderful day at the beach with friends!',
      imageUrl: 'https://previews.123rf.com/images/nd3000/nd30001908/nd3000190801445/128972001-group-of-happy-people-having-fun-at-summer-beach-vacation-friends-travel-concept.jpg',
      username: 'Alice',
      createdAt: new Date('2023-10-24T10:00:00'),
      userId: 1,
      comments: [
        {
          CommentId: 1,
          body: 'Looks like you had an amazing time!',
          username: 'Bob',
          createdAt: new Date('2023-10-24T10:30:00'),
          postId: 1,
          userId: 2,
        },
        {
          CommentId: 2,
          body: 'I wish I was there too!',
          username: 'Charlie',
          createdAt: new Date('2023-10-24T11:15:00'),
          postId: 1,
          userId: 3,
        },
      ],
      likes: 15,
    },
    {
      id: 2,
      title: 'Delicious Homemade Pizza Night',
      body: 'Made some tasty homemade pizzas with the family!',
      imageUrl: 'https://www.foodandwine.com/thmb/Z6diauxVQGwOT95IBswHq12YyC8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/guide-to-homemade-pizza-FT-MAG0322-5269d2b72b9b4d69aa3634c5d182b11b.jpg',
      username: 'Bob',
      createdAt: new Date('2023-10-24T11:30:00'),
      userId: 2,
      comments: [
        {
          CommentId: 3,
          body: 'I love homemade pizza!',
          username: 'Alice',
          createdAt: new Date('2023-10-24T11:45:00'),
          postId: 2,
          userId: 1,
        },
      ],
      likes: 8,
    },
    {
      id: 3,
      title: 'Hiking Adventure in the Mountains',
      body: 'Explored the beautiful mountain trails today.',
      imageUrl: 'https://wildlandtrekking.com/content/uploads/2022/10/jumper6.jpg',
      username: 'Charlie',
      createdAt: new Date('2023-10-24T12:00:00'),
      userId: 3,
      comments: [],
      likes: 20,
    },
    {
      id: 4,
      title: 'Exploring Historical Sites in the City',
      body: 'Visited some amazing historical landmarks today.',
      imageUrl: 'https://media.nomadicmatt.com/2023/historyangkor.jpeg',
      username: 'David',
      createdAt: new Date('2023-10-24T13:00:00'),
      userId: 4,
      comments: [],
      likes: 12,
    },
    {
      id: 5,
      title: 'Family Picnic at the Park',
      body: 'Had a lovely picnic with family and enjoyed the sunshine.',
      imageUrl: 'https://i.pinimg.com/1200x/17/3a/84/173a84d2d2efe54eb5fa37012b9cbe81.jpg',
      username: 'Eleanor',
      createdAt: new Date('2023-10-24T14:30:00'),
      userId: 5,
      comments: [],
      likes: 18,
    },
    {
      id: 6,
      title: 'Gardening Adventures in My Backyard',
      body: 'Spent the weekend gardening and planting new flowers.',
      imageUrl: 'https://www.inhabitre.com/wp-content/uploads/2020/04/IMG-0549-1-1024x768.jpg',
      username: 'Frank',
      createdAt: new Date('2023-10-24T15:45:00'),
      userId: 6,
      comments: [],
      likes: 10,
    },
    {
      id: 7,
      title: 'Sunday Brunch with Friends',
      body: 'Brunch with friends is always a good idea!',
      imageUrl: 'https://glassandvine.com/wp-content/uploads/5-Reasons-Sunday-Brunch-is-the-Most-Important-Meal-of-the-Week.jpg',
      username: 'Grace',
      createdAt: new Date('2023-10-24T16:15:00'),
      userId: 7,
      comments: [],
      likes: 25,
    },
    {
      id: 8,
      title: 'Artistic Expressions: My Latest Painting',
      body: 'Shared my latest painting project with the world!',
      imageUrl: 'https://indianartideas.in/articleimages/1586942784The%20Starry%20Night%20by%20Vincent%20van%20Gogh.png',
      username: 'Henry',
      createdAt: new Date('2023-10-24T17:30:00'),
      userId: 8,
      comments: [],
      likes: 30,
    },
    {
      id: 9,
      title: 'Sunny Day at the Zoo',
      body: 'Spent a sunny day exploring the local zoo.',
      imageUrl: 'https://thumbs.dreamstime.com/z/father-kids-enjoying-sunny-day-zoo-happy-caucasian-family-active-two-blonde-children-laughing-boy-his-toddler-47276628.jpg',
      username: 'Isabella',
      createdAt: new Date('2023-10-24T18:00:00'),
      userId: 9,
      comments: [],
      likes: 22,
    },
    {
      id: 10,
      title: 'Weekend Road Trip Adventures',
      body: 'Weekend road trip to discover new places and enjoy the journey.',
      imageUrl: 'https://i0.wp.com/thedisneyblog.com/wp-content/uploads/2022/08/disneyonice-roadtrip-banner.jpg?fit=800%2C450&ssl=1',
      username: 'James',
      createdAt: new Date('2023-10-24T19:00:00'),
      userId: 10,
      comments: [],
      likes: 17,
    },
  ];

  constructor() { }

  getPostById(id: number): Post {
    return this.getPosts().find(food => food.id == id)!;
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post): void {
    this.posts.push(post);;
  }

  addLike(post: Post): void {
    let posts = this.getPosts();
    let index = posts.findIndex(p => p.id == post.id);
    posts[index].likes++;
  }

  getComments(post: Post): Comment[] {
    let posts = this.getPosts();
    let index = posts.findIndex(p => p.id == post.id);
    return posts[index].comments;
  }

  addComment(post: Post, comment: string): void {
    let posts = this.getPosts();
    let index = posts.findIndex(p => p.id == post.id);
    posts[index].comments.push({
      CommentId: 3,
      body: comment,
      username: 'Foodie',
      createdAt: new Date(),
      postId: post.id,
      userId: 1,
    });
  }


}
