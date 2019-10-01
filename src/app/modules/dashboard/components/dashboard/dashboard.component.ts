import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudUsersService } from '../../services/crud-users/crud-users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public dashboardListingResponse;
  public usersListing;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private crudUsersService : CrudUsersService
) { 
    if(Number(this.activatedRoute.snapshot.queryParamMap.getAll('page')) > 0 ){ // Getting Data as per query params
      this.crudUsersService.getUsersListing(Number(this.activatedRoute.snapshot.queryParamMap.getAll('page'))).subscribe(data => {
        this.dashboardListingResponse = data;
        this.usersListing = this.dashboardListingResponse.data;
        if(this.usersListing.length == 0){
          this.router.navigate(['/page-not-found']);
        }
      })
    } 
    else if (this.activatedRoute.snapshot.data['ResolveDashboardDataService']) { // Getting Resolve Data
      this.dashboardListingResponse = this.activatedRoute.snapshot.data['ResolveDashboardDataService'];
      this.usersListing = this.dashboardListingResponse.data;
      console.log(this.activatedRoute.snapshot.data['ResolveDashboardDataService']);
    } else {
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit() {
    
  }

  // Delete User
  deleteUser(id : number){
    this.crudUsersService.deleteUser(id).subscribe(data => {
      console.log("Deleted User", data);
    });

    if(Number(this.activatedRoute.snapshot.queryParamMap.getAll('page')) > 0 && Number(this.activatedRoute.snapshot.queryParamMap.getAll('page')) <  (Number(this.dashboardListingResponse.total_pages) + 1)){
      this.crudUsersService.getUsersListing(Number(this.activatedRoute.snapshot.queryParamMap.getAll('page'))).subscribe(data => {
        this.dashboardListingResponse = data;
        this.usersListing = this.dashboardListingResponse.data;
        
      })
    }
  }

  // Logout
  logout(){
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
