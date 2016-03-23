/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, provide} from 'angular2/angular2';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

/*GNRT_IMPORT_LIST*/
/*GNRT_IMPORT_SERVICE*/
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
	/*GNRT_ADD_ROUTE_DETAILS*/
	/*GNRT_ADD_ROUTE_LIST*/
])

class Socially {}

bootstrap(Socially, [/*GNRT_ADD_SERVICE*/ , ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);