/// <reference path="../typings/angular2-meteor.d.ts" />

export var Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, post) {
        return true;
    },
    update: function(userId, post, fields, modifier) {
        return true;
    },
    remove: function(userId, post) {
        return true;
    } 
});

