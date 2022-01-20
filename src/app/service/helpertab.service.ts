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
case "Reset for Call-In in Historical":
  return     environment.SUPP_CIPL_HIS_SEARCH_HELP;
  
break;
case "Create for Call-In":
  return environment.SUPP_CIPL_REQ_CREATE_HELP;
  break;


case "Reset for Call-In in create-request":
  return environment.SUPP_CIPL_REQ_SEARCH_HELP;
  break;
        
  case "Reset for Call-In In Active Request":
    return environment.SUPP_CIPL_ACT_SEARCH_HELP;
    break;

    case "Comment":
return environment.COMMENTS_HELP;
break;
case "Inside the Short Number Links":

return environment.SUPP_CIPL_ITEM_HELP;
break;



case "Welcome":
return environment.WELCOME_HELP;
break;


case "Voucher Details":
return environment.SUPP_VCH_DETAILS_HELP;
break;


case "Voucher":
  return environment.SUPP_VCH_HELP;
break;
case "Search for TPL_Current":
  return environment.SUPP_TPL_CUR_LIST_HELP;
break;



  case "Update for TPL_Current":
    return environment.SUPP_TPL_ITEM_HELP;
    break;

   
      case "Search for TPL_Historical":
        return environment.SUPP_TPL_HIS_LIST_HELP;
        break;
        

        case "Search for Warranty_Claim_Daily":
          return environment.SUPP_WAR_CLAIM_HELP;
          break;

          case "Stack_bar for Warranty_reports":
            return environment.SUPP_REP_PARETO_HELP;
            break;

            case "Overal_summary for Warranty_reports":
              return environment.SUPP_REP_OVER_SUM_HELP;
              break;

              case "Part_summary for Warranty_reports":
                return environment.SUPP_REP_PART_SUM_HELP;
                break;

                case "Claim_details for Warranty_reports":
                  return environment.SUPP_REP_CLAIM_DATA_HELP;
                  break;

                  case "Trend_data for Warranty_reports":
                    return environment.SUPP_REP_TREND_DATA_HELP;
                    break;

                    case "Defect_summary for Warranty_reports":
                      return environment.SUPP_REP_OVER_SUM_HELP;
                      break;
 

}
 



  }

  changenavigatehelpforbutton(navigatebutton)
  {
    this.changenavigateforbutton=navigatebutton;

  }



  changenavigatehelptab(){

  
    switch(this.tabname){


  
  
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
    case "Administration":
  
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


