import { Component, OnInit } from '@angular/core';
import { HelpertabService } from 'src/app/service/helpertab.service';

@Component({
  selector: 'app-historical',
  templateUrl: './tpl-historical.component.html',
  styleUrls: ['./tpl-historical.component.css']
})
export class TplHistoricalComponent implements OnInit {
  public show: boolean = false;
  public hide: boolean = true;
  public inner: boolean = false;
  public outer: boolean = true;
  public external: boolean = false;
  public show1: boolean = false;
  public message:string="";
  constructor(private helpservice:HelpertabService ) { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }

  toggle1() {
    this.inner = !this.inner;
    this.outer = !this.outer;
  }
  toggleComments() {
    this.external = !this.external;
    this.inner = !this.inner;
  }
  clicksearch() {
    this.show1= true;
    
    this.message="Search for TPL_Historical";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);
  }

  clickreset(){
    this.show1= true;
    this.message="Welcome";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);

  }
  updateClick(){
    this.show1= true;
    this.message="Update for TPL_Current";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);

  }
  commentClick(){
    this.show1= true;
    this.message="Comment";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);
  }
}
