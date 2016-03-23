/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, Input } from 'angular2/angular2';

import {[GNRT_UCCS]Service, [GNRT_UCCS]Model} from 'client/[GNRT_LCCS]-list/[GNRT_UCCS]Service';

import {RouterLink} from 'angular2/router';

@Component({
    selector: '[GNRT_LCCS]-item'
})

@View({
    templateUrl: 'client/[GNRT_LCCS]-item/[GNRT_LCCS]-item.html',
    directives: [RouterLink]
})

export class [GNRT_UCCS]Item {

    @Input() item: [GNRT_UCCS]Model;

    public [GNRT_LCCS]Status:string;
    
    private [GNRT_LCCS]Service: [GNRT_UCCS]Service;
    
    public constructor([GNRT_UCCS]Service:[GNRT_UCCS]Service){
        this.[GNRT_LCCS]Service = [GNRT_UCCS]Service;
    }
    
    onInit() {
        this.[GNRT_LCCS]Status = this.[GNRT_LCCS]Service.[GNRT_LCCS]Status(this.item.public);
    }

}


