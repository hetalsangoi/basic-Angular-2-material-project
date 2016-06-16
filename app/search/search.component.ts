import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';


@Component({
  selector:'search',
  templateUrl:'app/search/search.html',
  directives:[FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MdButton, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_GRID_LIST_DIRECTIVES],
  providers: [MdIconRegistry]
})


export class SearchComponent{

  public query = '';
  public selectedTest= [];
  public tests = [
  {"tname":"Complete Blood Count","tsubname":["cbc","Hb","TLC","DLC","PCV","MCV","MCHC","AEC","ABC","ALC","P/L"]},
  {"tname":"Blood Grouping","tsubname":["A","B","O","Rh factor"]},
  {"tname":"Complete Haemogram","tsubname":["CBC","ESR","Haemo"]},
  {"tname":"Glucose Fasting","tsubname":["glucose","sugar","fasting"]},
  {"tname":"Urine Examination","tsubname":["UrineR/M","urine"]},
  {"tname":"Thyroid total","tsubname":["T3","T4","TSH","FT3","FT4"]}
  ];
  public results = [];
  filter() 
  {
    this.results=[];
    if (this.query !== "")
    {
      var exist= false;
      for(var i=0; i < this.tests.length; i++)
      {
        if (this.tests[i].tname.toLowerCase().indexOf(this.query.toLowerCase())==0)
        {
        this.results.push(this.tests[i]);
        exist= true;
        }
      }
      
      if(!exist)
      {
        for (var j = 0; j < this.tests.length; j++) {

          for (var i = 0; i < this.tests[j].tsubname.length; i++) {
            if (this.tests[j].tsubname[i].toLowerCase().indexOf(this.query.toLowerCase()) == 0) 
            {
              this.results.push(this.tests[j]);
              break;
            }
          }        
        }
      }
    }
    
  }
 
  select(item)
  {
    this.selectedTest.push(item.tname);
    this.query="";
    this.results= [];
    
  }
  delete(testNAME, $index)
  {    
    this.selectedTest.splice($index, 1);
    
  }

  

}