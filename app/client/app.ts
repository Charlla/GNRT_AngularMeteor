/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, provide} from 'angular2/angular2';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {PostList} from 'client/post-list/PostList';
/*GNRT_IMPORT_LIST*/
import {PostService} from 'client/post-list/PostService';
/*GNRT_IMPORT_SERVICE*/
import {PostDetails } from 'client/post-details/PostDetails';
/*GNRT_IMPORT_DETAILS*/

@Component({
    selector: 'app'
})

@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', redirectTo: '/'}
, { path: '/post/:id', as: 'PostDetails', component: PostDetails }
/*GNRT_ADD_ROUTE_DETAILS*/
, { path: '/posts', as: 'PostList', component: PostList }
/*GNRT_ADD_ROUTE_LIST*/
])

class Socially {}

bootstrap(Socially, [PostService, /*GNRT_ADD_SERVICE*/ , ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);/// <reference path="../typings/angular2-meteor.d.ts" />
