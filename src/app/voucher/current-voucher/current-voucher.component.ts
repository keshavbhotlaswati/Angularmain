import { Component, OnInit } from '@angular/core';
import { HelpertabService } from 'src/app/service/helpertab.service';

@Component({
  selector: 'app-current-voucher',
  templateUrl: './current-voucher.component.html',
  styleUrls: ['./current-voucher.component.css']
})
export class CurrentVoucherComponent implements OnInit {


show1:boolean=false;
message:string="";
  constructor(private helpservice:HelpertabService) { }

  ngOnInit() {
  }



  clickComment(){
    this.show1= true;
    this.message="Comment";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);
  }

  clickVoucherDetails(){
    this.show1= true;
    this.message="Voucher Details";
    this.helpservice.changenavigatehelpforbutton(this.show1);
    this.helpservice.changenavigateforbuttons(this.message);
  }
}
