import { Component, OnInit } from '@angular/core';
import { ListService } from "../list.service";
@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.css']
})
export class UserCreationPageComponent implements OnInit {
  fname:string;
  lname:string;
   gender:string;
   MarriedStatus:string;
   type:string;
   no:number;
   count:number=0;
   
 contactlist:any = [{},{}];
 flag:boolean=false;
  constructor(private listService:ListService) { }

  ngOnInit(): void {
   
  }
  Usercreation(): void{
    console.log(this.contactlist);
      var newFriend : any = {};
      var contactDetails:any={};
     var contact:any=[];
      
        newFriend.first_name=this.fname;
        newFriend.last_name=this.lname;
        newFriend.gender=this.gender;
        newFriend.MaritalStatus=this.MarriedStatus;
        
        contactDetails.type=this.type;
        contactDetails.no=this.no;
        contact.push(contactDetails);
        newFriend.contact=this.contactlist;
        
        newFriend.favorite=this.flag;
        console.log(newFriend);
      this.listService.UpdateFriendList(newFriend);

  }
  toggleIcon():void{
   
    this.flag=!this.flag;
    
    
  }
  addItem():void{
      var contactdetails:any ={};
      this.count=this.count+1;
      
      
      this.contactlist.push(contactdetails);
      console.log
  }
  removeItem(index:any):void{
    this.contactlist.splice(index,1);
    this.count=this.count-1;
  }
}
