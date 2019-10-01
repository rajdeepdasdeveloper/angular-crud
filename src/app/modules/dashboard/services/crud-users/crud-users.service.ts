import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { apis } from '../../../../../environments/api';

@Injectable()
export class CrudUsersService {

  constructor(
    private httpClient : HttpClient
  ) { }

  deleteUser(id: number) {
    return this.httpClient.delete<any>(environment.apiURL + apis.deleteUser + id);
  }

  getUsersListing(pageNo: number){
    console.log(pageNo)
    return this.httpClient.get<any>(environment.apiURL + apis.userList + pageNo);
  }

  getSingleUser(userID : number){
    return this.httpClient.get<any>(environment.apiURL + apis.singleUser + userID);
  }

  updateSingleUser(uniqueID: any){ // Should be an unique identifier
    return this.httpClient.post<any>(environment.apiURL + apis.singleUser, uniqueID);
  }

  createUsers(newUserData : any){
    return this.httpClient.post<any>(environment.apiURL + apis.createUser, newUserData);
  }

}
