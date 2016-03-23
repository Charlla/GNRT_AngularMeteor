import {Posts} from 'collections/Posts';

Meteor.publish('posts', function(options: any, regex: string) {
    console.log("Posts ", options);
    return Posts.find({name: new RegExp(regex, "g")}, options);
});

Meteor.publish('post', function(postId: string) {
    return Posts.find({_id: postId});
});

Meteor.methods({
    updatePost: function(id: string, data: any){
        Posts.update({_id: id}, {$set: {name: 'updated'}})
    },
    postCount: function(regex: string){
        return Posts.find({name: new RegExp(regex, "g")}).count();
    }
});
 