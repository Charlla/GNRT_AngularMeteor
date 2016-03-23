/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/angular2';

import {Posts} from '../../collections/Posts';

import {PostService, PostModel} from 'client/post-list/PostService';

@Component({
    selector: 'post-form'
})

@View({
    templateUrl: 'client/post-form/post-form.html',
    directives: [FORM_DIRECTIVES]
})

export class PostForm {

    public newPost: ControlGroup;

    public service: PostService;

    public constructor(PostService:PostService) {
        this.setUpPostForm();
        this.service = PostService;
    }

    public submitCreatePost(newPost: PostModel):void {
        if(this.newPost.valid){
            this.service.createPost(newPost);
        }
    }

    public openModal():void{
        let element: any = $('#modal1');
        element.openModal();
    }

    private setUpPostForm(): void{
        var formBuilder = new FormBuilder();
        this.newPost = formBuilder.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            public: [false]
        });
    }

}
