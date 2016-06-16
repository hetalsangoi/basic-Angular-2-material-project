import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';


@Component({
	selector:'next',
	templateUrl:'app/next/next.html',
	directives:[ROUTER_DIRECTIVES],
	providers:[ROUTER_PROVIDERS]
})



export class NextComponent implements OnInit{
	constructor(private routeParams: RouteParams){

	}
	ngOnInit() {
    let sample = +this.routeParams.get('selectTests');
  }
}
