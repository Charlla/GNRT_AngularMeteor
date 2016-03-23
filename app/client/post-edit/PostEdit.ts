/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Input} from 'angular2/angular2';

import {PostService, PostModel} from 'client/post-list/PostService';

import {MeteorComponent} from 'angular2-meteor';

import {Posts} from 'collections/Posts';

@Component({
    selector: 'post-edit'
})

@View({
    templateUrl: '/client/post-edit/post-edit.html'
})

export class PostEdit extends MeteorComponent {

    @Input() id:string;

    public post:PostModel = new PostModel();
    
    private postService: PostService;

    public constructor(PostService:PostService) {
        super();
        this.postService = PostService;
    }
    
    public onInit(){
        this.autorun(()=> {
            this.subscribe('post', this.id, ()=> {
                this.post = <PostModel>Posts.findOne({_id: this.id});
            }, true);
        }, true);
    }

    public openModal():void {
        var element:any = $('#modal2');
        element.openModal();
    }

    public update():void {
        this.postService.updatePost(this.id, this.post);
    }

}


