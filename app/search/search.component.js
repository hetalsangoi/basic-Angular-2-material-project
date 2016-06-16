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
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var router_deprecated_1 = require('@angular/router-deprecated');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var grid_list_1 = require('@angular2-material/grid-list');
var next_component_1 = require('../next/next.component');
var SearchComponent = (function () {
    function SearchComponent(router) {
        this.router = router;
        this.query = '';
        this.selectedTest = [];
        this.tests = [
            { "tname": "Complete Blood Count", "tsubname": ["cbc", "Hb", "TLC", "DLC", "PCV", "MCV", "MCHC", "AEC", "ABC", "ALC", "P/L"] },
            { "tname": "Blood Grouping", "tsubname": ["A", "B", "O", "Rh factor"] },
            { "tname": "Complete Haemogram", "tsubname": ["CBC", "ESR", "Haemo"] },
            { "tname": "Glucose Fasting", "tsubname": ["glucose", "sugar", "fasting"] },
            { "tname": "Urine Examination", "tsubname": ["UrineR/M", "urine"] },
            { "tname": "Thyroid total", "tsubname": ["T3", "T4", "TSH", "FT3", "FT4"] }
        ];
        this.results = [];
    }
    SearchComponent.prototype.filter = function () {
        this.results = [];
        if (this.query !== "") {
            var exist = false;
            for (var i = 0; i < this.tests.length; i++) {
                if (this.tests[i].tname.toLowerCase().indexOf(this.query.toLowerCase()) == 0) {
                    this.results.push(this.tests[i]);
                    exist = true;
                }
            }
            if (!exist) {
                for (var j = 0; j < this.tests.length; j++) {
                    for (var i = 0; i < this.tests[j].tsubname.length; i++) {
                        if (this.tests[j].tsubname[i].toLowerCase().indexOf(this.query.toLowerCase()) == 0) {
                            this.results.push(this.tests[j]);
                            break;
                        }
                    }
                }
            }
        }
    };
    SearchComponent.prototype.select = function (item) {
        this.selectedTest.push(item.tname);
        this.query = "";
        this.results = [];
    };
    SearchComponent.prototype.delete = function (testNAME, $index) {
        this.selectedTest.splice($index, 1);
    };
    SearchComponent.prototype.gotoNext = function (tests) {
        var link = ['Next', { selectTests: tests }];
        this.router.navigate(link);
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/search/search.html',
            directives: [common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, icon_1.MdIcon, button_1.MdButton, card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, next_component_1.NextComponent],
            providers: [icon_1.MdIconRegistry, router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: 'search', name: 'Home', component: SearchComponent, useAsDefault: true },
            { path: '../next/next', name: 'Next', component: next_component_1.NextComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map