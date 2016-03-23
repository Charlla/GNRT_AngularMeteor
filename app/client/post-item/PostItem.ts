/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, Input } from 'angular2/angular2';

import {PostService, PostModel} from 'client/post-list/PostService';

import {RouterLink} from 'angular2/router';

@Component({
    selector: 'post-item'
})

@View({
    templateUrl: 'client/post-item/post-item.html',
    directives: [RouterLink]
})

export class PostItem {

    @Input() item: PostModel;

    public postStatus:string;
    
    private postService: PostService;
    
    public constructor(PostService:PostService){
        this.postService = PostService;
    }
    
    onInit() {
        this.postStatus = this.postService.postStatus(this.item.public);
    }

}


