import { Component, OnInit } from '@angular/core';
import { ListService } from "../list.service";
import { ActivatedRoute } from '@angular/router';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  fname:string;
  lname:string;
   gender:string;
   MarriedStatus:string;
   type:string;
   no:number;
   index:any;
   flag:boolean=false;
 contactlist:any = [];
 friendDetails:any;
 count:number=0;
  constructor(private listService:ListService,private route: ActivatedRoute,private router:Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
} 
   }
   
 

  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('indexOfelement');
    this.friendDetails=this.listService.list[this.index];
    console.log(this.friendDetails);
    this.fname=this.friendDetails.first_name;
    this.lname=this.friendDetails.last_name;
    this.gender=this.friendDetails.gender;
    this.contactlist=this.friendDetails.contact;
    this.MarriedStatus=this.friendDetails.MaritalStatus;
    this.flag=this.friendDetails.favorite;
    this.count=this.friendDetails.contact.length;
  }

  editUserDetails():void{
    this.listService.list[this.index].first_name=this.fname;
    this.listService.list[this.index].last_name=this.lname;
    this.listService.list[this.index].gender=this.gender;
    this.listService.list[this.index].contact=this.contactlist;
    
    this.listService.list[this.index].MaritalStatus=this.MarriedStatus;
  }

  deleteUserDetails():void{
    console.log(this.listService.list);
    this.listService.list.splice(this.index,1);
    this.router.navigate(['UserCreation']);
    console.log(this.listService.list);
  }


  goToCreationPage():void{

    this.router.navigate(['UserCreation']);
  }
  toggleIcon():void{
   
    this.flag=!this.flag;
    this.listService.list[this.index].favorite=this.flag;
    console.log(this.listService.list[this.index]);
  }
  addItem():void{
    var contactdetails:any ={};
    this.count=this.count+1;
    // contactdetails.type=this.contactlist[this.count].type;
    // contactdetails.no=this.contactlist[this.count].no;
    
    this.contactlist.push(contactdetails);
    console.log
}
removeItem(index:any):void{
  this.contactlist.splice(index,1);
  this.count=this.count-1;
}
}
