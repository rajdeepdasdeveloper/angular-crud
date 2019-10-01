import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CrudUsersService } from '../../services/crud-users/crud-users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  public  model: any = {}; // Signup Form Data
  private viewableUser;
  public showSuccessMessage = false;
  public showFailedMessage = false;
  constructor(
    private activatedRoute : ActivatedRoute,
    private _crudUsersService : CrudUsersService,
    private router : Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => { // Getting Data on init as per route parameter
      this.viewableUser = Number(params.get('id'));
      this._crudUsersService.getSingleUser(this.viewableUser)
      .subscribe(response => {
        this.model = response.data;
        console.log(this.model)
      })
    });
  }

  deleteUser(id : number){
    this._crudUsersService.deleteUser(id).subscribe(response => { // Deleting as per route parameter
      if(response){
        this.showSuccessMessage = true;
        console.log("Success");
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        }, 3000)
      }
      else{
        this.showFailedMessage = true;
      }
    })
  }

}
