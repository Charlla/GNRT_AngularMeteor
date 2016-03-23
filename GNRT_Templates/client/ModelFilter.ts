/// <reference path="../../typings/angular2-meteor.d.ts" />
import {Pipe} from 'angular2/angular2';

@Pipe({
  name: '[GNRT_UCCS]Filter'
})
export class [GNRT_UCCS]Filter{
    transform(value){
        console.log(value);
        return '**=> ' +  value;
    }
}
