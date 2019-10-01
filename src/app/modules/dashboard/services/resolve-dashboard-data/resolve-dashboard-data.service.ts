import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { apis } from '../../../../../environments/api';
@Injectable({
  providedIn: 'root',
})
export class ResolveDashboardDataService { 

  constructor(private httpClient: HttpClient, private router: Router) {}

  resolveDasboardUsersListing() {
    return this.httpClient.get<any>(environment.apiURL + apis.userList + 1);
  } 
}