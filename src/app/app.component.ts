import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ListService } from "./list.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LogiSoftAssignment';
  list:any = [];
  searchText:string='';
   
  constructor(private listService: ListService,private router:Router){}
  ngOnInit(){
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.list = data;
    // })
    this.list=this.listService.list;
}
EditUserDetails(indexOfelement:any):void{
  console.log(indexOfelement);
  this.router.navigate(['userDetails',indexOfelement]);

}
}
