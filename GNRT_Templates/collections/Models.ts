/// <reference path="../typings/angular2-meteor.d.ts" />

export var [GNRT_UCCP] = new Mongo.Collection('[GNRT_LCCP]');

[GNRT_UCCP].allow({
    insert: function(userId, [GNRT_LCCS]) {
        return true;
    },
    update: function(userId, [GNRT_LCCS], fields, modifier) {
        return true;
    },
    remove: function(userId, [GNRT_LCCS]) {
        return true;
    } 
});

