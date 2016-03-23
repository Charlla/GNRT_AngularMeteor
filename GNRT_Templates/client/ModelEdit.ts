/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Input} from 'angular2/angular2';

import {[GNRT_UCCS]Service, [GNRT_UCCS]Model} from 'client/[GNRT_LCCS]-list/[GNRT_UCCS]Service';

import {MeteorComponent} from 'angular2-meteor';

import {[GNRT_UCCP]} from 'collections/[GNRT_UCCP]';

@Component({
    selector: '[GNRT_LCCS]-edit'
})

@View({
    templateUrl: '/client/[GNRT_LCCS]-edit/[GNRT_LCCS]-edit.html'
})

export class [GNRT_UCCS]Edit extends MeteorComponent {

    @Input() id:string;

    public [GNRT_LCCS]:[GNRT_UCCS]Model = new [GNRT_UCCS]Model();
    
    private [GNRT_LCCS]Service: [GNRT_UCCS]Service;

    public constructor([GNRT_UCCS]Service:[GNRT_UCCS]Service) {
        super();
        this.[GNRT_LCCS]Service = [GNRT_UCCS]Service;
    }
    
    public onInit(){
        this.autorun(()=> {
            this.subscribe('[GNRT_LCCS]', this.id, ()=> {
                this.[GNRT_LCCS] = <[GNRT_UCCS]Model>[GNRT_UCCP].findOne({_id: this.id});
            }, true);
        }, true);
    }

    public openModal():void {
        var element:any = $('#modal2');
        element.openModal();
    }

    public update():void {
        this.[GNRT_LCCS]Service.update[GNRT_UCCS](this.id, this.[GNRT_LCCS]);
    }

}


