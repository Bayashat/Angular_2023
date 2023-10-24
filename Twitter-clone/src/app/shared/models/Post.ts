export class Post{
    id!:number;
    title!:string;
    body!:string;
    imageUrl!:string;
    username!:string;
    createdAt!:Date;
    userId!:number;
    comments!:Comment[];
    likes!: number;
}

export class Comment {
    CommentId!: number;
    body!: string;
    username!: string;
    createdAt!: Date;
    postId!: number;
    userId!: number;
}