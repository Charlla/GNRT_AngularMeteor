/// <reference path="../../typings/angular2-meteor.d.ts" />
import {Posts} from '../../collections/Posts';

export class PostModel {
    public name:string = '';
    public description:string = '';
    public location:string = '';
    public public:boolean = false;
}

export class PostService {

    public createPost(newPost:PostModel):void {
        Posts.insert({
            name: newPost.name,
            description: newPost.description,
            location: newPost.location,
            public: newPost.public
        }, (error)=> {
            if (error){
                console.log(error);
            }
        })
    }

    public updatePost(id:string, post:PostModel):void {
        Posts.update(id, {
            $set: {
                name: post.name,
                description: post.description,
                location: post.location,
                public: post.public
            }
        });
    }

    public postStatus(status:boolean) {
        if (status) {
            return 'Public';
        } else {
            return 'Private';
        }
    }

    public deletePost(postId:String):void {
        Posts.remove({_id: postId});
    }
}
