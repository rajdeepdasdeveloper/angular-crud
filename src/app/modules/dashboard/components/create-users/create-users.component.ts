import { Component, OnInit } from '@angular/core';
import { CrudUsersService } from '../../services/crud-users/crud-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.sass']
})
export class CreateUsersComponent implements OnInit {

  public  model: any = {}; // Create New User Data
  public showSuccessMessage = false;
  public showFailedMessage = false;
  constructor(
    private _crudUsersService : CrudUsersService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  // Create New User
  onCreate(){
    this._crudUsersService.createUsers(this.model)
    .subscribe(response => {
      if(response){
        this.showSuccessMessage = true;
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
