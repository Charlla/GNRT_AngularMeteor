/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, NgIf, NgFor} from 'angular2/angular2';

import {MeteorComponent} from 'angular2-meteor';

import {RouterLink, RouteParams} from 'angular2/router';

import {Posts} from 'collections/Posts';

import {PostService, PostModel} from 'client/post-list/PostService';

import {PostEdit} from 'client/post-edit/PostEdit';

import {Router} from 'angular2/router'


@Component({
    selector: 'post-details'
})

@View({
    templateUrl: '/client/post-details/post-details.html',
    directives: [RouterLink, PostEdit, NgIf, NgFor]
})

export class PostDetails extends MeteorComponent {

    private postId:string;

    public post:PostModel = new PostModel();

    public postStatus:string = '';

    private postService:PostService;
    
    private router: Router;

    public constructor(params:RouteParams, PostService:PostService, Router:Router) {
        super();
        
        this.postId = params.get('id');

        this.postService = PostService;
        
        this.router = Router;
        
        this.autorun(()=> {
            this.subscribe('post', this.postId, ()=> {
                this.post = <PostModel>Posts.findOne({_id: this.postId});
                if (this.post){
                    this.postStatus = this.postService.postStatus(this.post.public);
                }
            }, true);
        }, true);
  
    }
    
    public deleteConfirmation(): void {
        var element:any = $('#modal3');
        element.openModal();
    }
    
    public deletePost(): void{
        var element:any = $('#modal3');
        this.postService.deletePost(this.postId)
        element.closeModal();
        this.router.navigate(['/PostList']);
    }
    
    
}


    


