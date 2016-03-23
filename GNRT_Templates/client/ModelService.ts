/// <reference path="../../typings/angular2-meteor.d.ts" />
import {[GNRT_UCCP]} from '../../collections/[GNRT_UCCP]';

export class [GNRT_UCCS]Model {
    public name:string = '';
    public description:string = '';
    public location:string = '';
    public public:boolean = false;
}

export class [GNRT_UCCS]Service {

    public create[GNRT_UCCS](new[GNRT_UCCS]:[GNRT_UCCS]Model):void {
        [GNRT_UCCP].insert({
            name: new[GNRT_UCCS].name,
            description: new[GNRT_UCCS].description,
            location: new[GNRT_UCCS].location,
            public: new[GNRT_UCCS].public
        }, (error)=> {
            if (error){
                console.log(error);
            }
        })
    }

    public update[GNRT_UCCS](id:string, [GNRT_LCCS]:[GNRT_UCCS]Model):void {
        [GNRT_UCCP].update(id, {
            $set: {
                name: [GNRT_LCCS].name,
                description: [GNRT_LCCS].description,
                location: [GNRT_LCCS].location,
                public: [GNRT_LCCS].public
            }
        });
    }

    public [GNRT_LCCS]Status(status:boolean) {
        if (status) {
            return 'Public';
        } else {
            return 'Private';
        }
    }

    public delete[GNRT_UCCS]([GNRT_LCCS]Id:String):void {
        [GNRT_UCCP].remove({_id: [GNRT_LCCS]Id});
    }
}
