"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var input_1 = require('@angular2-material/input');
var progress_bar_1 = require('@angular2-material/progress-bar');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var grid_list_1 = require('@angular2-material/grid-list');
var search_component_1 = require('./search/search.component');
var AppComponent = (function () {
    function AppComponent() {
        this.cards = [
            {
                "tname": "CBC (Complete Blood Count)",
                "lname": "Thyrocare Laboratories",
                "rate": "Rs. 1500",
                "img": "app/home/small.JPG",
                "star": "5"
            },
            {
                "tname": "Whole Body Checkup",
                "lname": "SUBURBAN Diagnostics",
                "rate": "Rs. 2000",
                "img": "app/home/img.jpg",
                "star": "3"
            },
            {
                "tname": "M.R.I.",
                "lname": "NM Medical",
                "rate": "Rs. 2200",
                "img": "app/home/small.JPG",
                "star": "4"
            },
            {
                "tname": "CBC",
                "lname": "SUBURBAN Diagnostics",
                "rate": "Rs. 1850",
                "img": "app/home/img.jpg",
                "star": "3"
            },
            {
                "tname": "CBC",
                "lname": "Apple Diagnostic Centre",
                "rate": "Rs. 1800",
                "img": "app/home/img.jpg",
                "star": "3"
            },
            {
                "tname": "CBC",
                "lname": "Oncquest Laboratories",
                "rate": "Rs. 2000",
                "img": "app/home/img.jpg",
                "star": "3"
            },
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/home/home.html',
            directives: [progress_bar_1.MdProgressBar, toolbar_1.MdToolbar, icon_1.MdIcon, button_1.MdButton, list_1.MD_LIST_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES, search_component_1.SearchComponent],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map