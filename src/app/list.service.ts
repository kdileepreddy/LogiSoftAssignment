import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: any = [ {
    "first_name": "DORIS ALICE",
    "last_name": "BOOTH",
    "gender": "female",
    "favorite": true,
    "MaritalStatus":"Married",
    "contact": [
        {
            "type": "Mobile Number",
            "no": "7340765896"
        }
    ]
},
{
    "first_name": "WILLIAM JOSEPH",
    "last_name": "BOOTH",
    "gender": "Male",
    "favorite": false,
    "MaritalStatus":"unmarried",
    "contact": [
        {
            "type": "Landline Number",
            "no": "0406245631"
        }
    ]
},
{
    "first_name": "DAVID MARK",
    "last_name": "BRILLER",
    "gender": "female",
    "favorite": true,
    "MaritalStatus":"Married",
    "contact": [
        {
            "type": "Mobile Number",
            "no": "0406245631"
        }
    ]
},
{
    "first_name": "ERIC JOHN",
    "last_name": "BETLOCK",
    "gender": "Male",
    "favorite": false,
    "MaritalStatus":"unmarried",
    "contact": [
        {
            "type": "Mobile Number",
            "no": "950218777"
        }
    ]
}];

  constructor() { }


  UpdateFriendList(newFriend:any): void{
    this.list.push(newFriend);
  }
}
