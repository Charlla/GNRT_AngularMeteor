/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {[GNRT_UCCS]Form} from 'client/[GNRT_LCCS]-form/[GNRT_UCCS]Form';

import {[GNRT_UCCP]} from 'collections/[GNRT_UCCP]';

import {MeteorComponent} from 'angular2-meteor';

import {[GNRT_UCCS]Service, [GNRT_UCCS]Model} from 'client/[GNRT_LCCS]-list/[GNRT_UCCS]Service';

import {[GNRT_UCCS]Filter} from 'client/[GNRT_LCCS]-list/[GNRT_UCCS]Filter';

import {[GNRT_UCCS]Item} from '../[GNRT_LCCS]-item/[GNRT_UCCS]Item';


@Component({
    selector: '[GNRT_LCCS]-list'
})

@View({
    pipes: [[GNRT_UCCS]Filter],
    templateUrl: '/client/[GNRT_LCCS]-list/[GNRT_LCCS]-list.html',
    directives: [[GNRT_UCCS]Form, NgFor, [GNRT_UCCS]Item, NgIf]
})

export class [GNRT_UCCS]List extends MeteorComponent {

    public pageTitle:string;
    public [GNRT_LCCP]:Mongo.Cursor<any>;

    private service:[GNRT_UCCS]Service;

    private subscription;

    private searchValue:any = "";

    private typing;

    public pagination:{perPage: number, currentPage: number, items: number, totalPages: number, arrayPages: number[]} = {
        perPage: 10,
        currentPage: 1,
        items: 0,
        totalPages: 0,
        arrayPages: []
    };

    public constructor([GNRT_UCCS]Service:[GNRT_UCCS]Service) {
        super();

        this.service = [GNRT_UCCS]Service;

        this.setUpPageDetails();

        this.meteorSubscribe();

    }

    public changePage(page:number):void {
        this.pagination.currentPage = page;
        this.meteorSubscribe();
        this.pagination.totalPages = Math.ceil(this.pagination.items / this.pagination.perPage);

        var pages:number[] = [];

        for (let i = 1; i < this.pagination.totalPages + 1; i++) {
            pages.push(i);
        }

        this.pagination.arrayPages = pages;

    }

    public searchBindingStart(search:string):void {

        clearTimeout(this.typing);
        this.typing = setTimeout(()=> {
            console.log(search);
            this.searchValue = search;
            this.pagination.currentPage = 1;
            this.meteorSubscribe();
        }, 1000);

    }

    public searchBindingStop():void {
        clearTimeout(this.typing);
    }

    public isCurrentPage(page:number):string {
        if (page == this.pagination.currentPage) {
            return 'active';
        }
        return 'waves-effect';
    }

    public onDestroy() {
        if (this.subscription) {
            this.subscription.stop();
        }
    }

    private meteorSubscribe():void {

        if (this.subscription) {
            this.subscription.stop();
        }

        this.subscription = Meteor.subscribe('[GNRT_LCCP]', {
            limit: this.pagination.perPage,
            skip: this.pagination.currentPage * this.pagination.perPage - this.pagination.perPage
        }, this.searchValue, ()=> {
            
        });

        this.autorun(()=> {
            this.[GNRT_LCCP] = [GNRT_UCCP].find();

            Meteor.call('[GNRT_LCCS]Count', this.searchValue, (error:any, results:any)=> {

                if(error){
                    console.log(error);
                }

                let totalPages:number = Math.ceil(results / this.pagination.perPage);

                var pages:number[] = [];

                for (let i = 1; i < totalPages + 1; i++) {
                    pages.push(i);
                }

                this.pagination.arrayPages = pages;

                this.pagination = {
                    perPage: this.pagination.perPage,
                    currentPage: this.pagination.currentPage,
                    items: results,
                    totalPages: Math.ceil(results / this.pagination.perPage),
                    arrayPages: pages
                };
            });
        }, true);


    }
    

    private setUpPageDetails():void {
        this.pageTitle = 'Recent [GNRT_UCCP]';
    }

}