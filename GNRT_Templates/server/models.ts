import {[GNRT_UCCP]} from 'collections/[GNRT_UCCP]';

Meteor.publish('[GNRT_LCCP]', function(options: any, regex: string) {
    console.log("[GNRT_UCCP] ", options);
    return [GNRT_UCCP].find({name: new RegExp(regex, "g")}, options);
});

Meteor.publish('[GNRT_LCCS]', function([GNRT_LCCS]Id: string) {
    return [GNRT_UCCP].find({_id: [GNRT_LCCS]Id});
});

Meteor.methods({
    update[GNRT_UCCS]: function(id: string, data: any){
        [GNRT_UCCP].update({_id: id}, {$set: {name: 'updated'}})
    },
    [GNRT_LCCS]Count: function(regex: string){
        return [GNRT_UCCP].find({name: new RegExp(regex, "g")}).count();
    }
});
 