import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CrudUsersService } from '../../services/crud-users/crud-users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.sass']
})
export class EditUsersComponent implements OnInit {

  public  model: any = {}; // Signup Form Data
  private editableUser;
  public showSuccessMessage = false;
  public showFailedMessage = false;
  constructor(
    private activatedRoute : ActivatedRoute,
    private _crudUsersService : CrudUsersService,
    private router : Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => { // Editing user as per route parameter
      this.editableUser = Number(params.get('id'));
      this._crudUsersService.getSingleUser(Number(params.get('id')))
      .subscribe(response => {
        this.model = response.data;
        console.log(this.model)
      })
    });
  }

  onUpdate(){
    this._crudUsersService.updateSingleUser(this.editableUser) // Updating user info and getting response
    .subscribe(response => {
      if(response.data){
        this.showSuccessMessage = true;
        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        },2000)
      }
      else{
        this.showFailedMessage = true;
      }
    })
  }

}
