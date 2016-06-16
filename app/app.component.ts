import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.html',
  directives: [MdProgressBar, MdToolbar, MdIcon, MdButton, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, SearchComponent],
  providers: [MdIconRegistry]
  

})




export class AppComponent{


  public cards=[
    {
      "tname":"CBC (Complete Blood Count)",
      "lname":"Thyrocare Laboratories",
      "rate":"Rs. 1500",
      "img": "app/home/small.JPG",
      "star":"5"
    },
    {
      "tname":"Whole Body Checkup",
      "lname":"SUBURBAN Diagnostics",
      "rate":"Rs. 2000",
      "img": "app/home/img.jpg",
      "star":"3"
    },
    {
      "tname":"M.R.I.",
      "lname":"NM Medical",
      "rate":"Rs. 2200",
      "img": "app/home/small.JPG",
      "star":"4"
    },
    {
      "tname":"CBC",
      "lname":"SUBURBAN Diagnostics",
      "rate":"Rs. 1850",
      "img": "app/home/img.jpg",
      "star":"3"
    },
    {
      "tname":"CBC",
      "lname":"Apple Diagnostic Centre",
      "rate":"Rs. 1800",
      "img": "app/home/img.jpg",
      "star":"3"
    },
    {
      "tname":"CBC",
      "lname":"Oncquest Laboratories",
      "rate":"Rs. 2000",
      "img": "app/home/img.jpg",
      "star":"3"
    },
  ];

}

