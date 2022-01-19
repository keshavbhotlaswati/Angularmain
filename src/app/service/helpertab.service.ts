import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelpertabService {

  message1:string="";
  
show:boolean=false;
tabname:string="";
tablink:string="";
changenavigateforbutton:boolean=false;




constructor() { }
public getTabnameAndTablink(tabName,tabLink){


  this.tabname=tabName;
  this.tablink=tabLink;
}
 public  changenavigateforbuttons(message){
  this.message1=message;
  console.log("message");
  console.log(this.message1);
  switch(this.message1){
 
case "Search for Call-In":
  return environment.SUPP_CIPL_LIST_HELP;
  
break;
case "Reset for Call-In":
  return environment.SUPP_CIPL_REQ_SEARCH_HELP;
  
break;
case "Create for Call-In":
  return environment.SUPP_CIPL_REQ_CREATE_HELP;
  break;


}
 



  }

  changenavigatehelpforbutton(navigatebutton)
  {
    this.changenavigateforbutton=navigatebutton;

  }



  changenavigatehelptab(){

  
    switch(this.tabname){
  case "Administration":
  return environment.WELCOME_HELP;
  break;
  
  
    case "Call-in Part List":
      if(this.tablink=="/call-in-part-historical"){
        return environment.SUPP_CIPL_HIS_SEARCH_HELP;
             break;	
        
            }
            else
            if(this.tablink==="/call-in-part-active"){
            
             return environment.SUPP_CIPL_ACT_SEARCH_HELP;
              break;
            }
            
    return environment.SUPP_CIPL_REQ_SEARCH_HELP;
    break;
          
  
  case "Transfer Part List":
    
      
      return environment.SUPP_TPL_SEARCH_HELP;
  break;
  
  case "Voucher":
    return environment.SUPP_VCH_HELP;
    break;
  
  
  case "Warranty Claim":
    
    if(this.tablink==="/daily-warranty-claim"){
      return environment. SUPP_WAR_SEARCH_HELP;
      break
    }
    return environment.SUPP_REP_MAIN_HELP;
    break;
  
  case "Maintenance":
  case "Audit Trail":
  return environment.WELCOME_HELP;
  break;
  
  default:
    return environment.SUPP_HOME_HELP;
  
  }}

 public windowopen1(){	
  let apiurlpart1;
  if(this.changenavigateforbutton){

    apiurlpart1=this.changenavigateforbuttons(this.message1);
  

  }
  else{
    apiurlpart1 =this.changenavigatehelptab();
  
  
  }

    const final_apiurl=`${environment.apiUrl}${apiurlpart1}`; 




  return final_apiurl;
  }


}


