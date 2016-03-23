/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/angular2';

import {[GNRT_UCCP]} from '../../collections/[GNRT_UCCP]';

import {[GNRT_UCCS]Service, [GNRT_UCCS]Model} from 'client/[GNRT_LCCS]-list/[GNRT_UCCS]Service';

@Component({
    selector: '[GNRT_LCCS]-form'
})

@View({
    templateUrl: 'client/[GNRT_LCCS]-form/[GNRT_LCCS]-form.html',
    directives: [FORM_DIRECTIVES]
})

export class [GNRT_UCCS]Form {

    public new[GNRT_UCCS]: ControlGroup;

    public service: [GNRT_UCCS]Service;

    public constructor([GNRT_UCCS]Service:[GNRT_UCCS]Service) {
        this.setUp[GNRT_UCCS]Form();
        this.service = [GNRT_UCCS]Service;
    }

    public submitCreate[GNRT_UCCS](new[GNRT_UCCS]: [GNRT_UCCS]Model):void {
        if(this.new[GNRT_UCCS].valid){
            this.service.create[GNRT_UCCS](new[GNRT_UCCS]);
        }
    }

    public openModal():void{
        let element: any = $('#modal1');
        element.openModal();
    }

    private setUp[GNRT_UCCS]Form(): void{
        var formBuilder = new FormBuilder();
        this.new[GNRT_UCCS] = formBuilder.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            public: [false]
        });
    }

}
