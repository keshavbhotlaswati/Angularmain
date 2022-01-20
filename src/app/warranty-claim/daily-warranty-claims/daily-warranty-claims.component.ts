import { Component, OnInit } from '@angular/core';
import { HelpertabService } from 'src/app/service/helpertab.service';

@Component({
  selector: 'app-daily-warranty-claims',
  templateUrl: './daily-warranty-claims.component.html',
  styleUrls: ['./daily-warranty-claims.component.css']
})
export class DailyWarrantyClaimsComponent implements OnInit {

  constructor(private helpservice:HelpertabService) { }

  ngOnInit() {
  } 
  
  public show: boolean = false;
  public hide: boolean = true;
  public inner: boolean = false;
  public outer: boolean = true;
  public show1: boolean = false;
  public message:string="";
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }
  toggle1() {
    this.outer = !this.outer;
    this.inner = !this.inner;
  }
  items: any[] = [{id: 1, name: 'model1'}, {id: 2, name: 'model2'}, {id:3, name: 'model3'}];
  selectedItems: any[] = [];
  selectedToAdd: any[] = [];
  selectedToRemove: any[] = [];

  chosenItems(items){
    this.selectedToAdd = items;
  }

  chosenItemsToRemove(items) {
    this.selectedToRemove = items;
  }

  assigne() {
    this.selectedItems = this.selectedItems.concat(this.selectedToAdd);
    this.items = this.items.filter(item => {
      return this.selectedItems.indexOf(item) < 0;
    });

    this.selectedToAdd = [];
  }

  unassigne() {
    this.items = this.items.concat(this.selectedToRemove);
    this.selectedItems = this.selectedItems.filter(item => {
      return this.items.indexOf(item) < 0;
    });
    this.selectedToRemove = [];
  }
  clicksearch() {
    this.show1= true;
    
    this.message="Search for Warranty_Claim_Daily";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);
  }
}
