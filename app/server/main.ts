/// <reference path="../typings/angular2-meteor.d.ts" />

import {Posts} from 'collections/Posts';
/*GNRT_IMPORT_COLLECTION*/
import './posts';
/*GNRT_IMPORT_SERVER*/

Meteor.startup(function() {
    // if(Posts.find().count() === 0) {

        // var posts = [
            // {name: 'post 1', description: 'post description is here'},
            // {name: 'post 2', description: 'post description is here'},
            // {name: 'post 3', description: 'post description is here'}
        // ];

        // for(var i = 0; posts.length; i++){
            // Posts.insert({name: posts[i].name, description: posts[i].description});
        // }

    // }
});

