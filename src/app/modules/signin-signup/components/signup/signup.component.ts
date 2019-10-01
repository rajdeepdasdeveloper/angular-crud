import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../../services/login-register/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(
    private _loginRegisterService : LoginRegisterService,
    private router : Router
  ) { }
  public  model: any = {}; // Signup Form Data
  public showSuccessMessage = false;
  public showFailedMessage = false;
  
  onSubmit(){
    this._loginRegisterService.register(this.model).subscribe( response  => {
      if(response){
        // Success
        this.showSuccessMessage = true;
        console.log("Success");
        setTimeout(()=>{
          this.router.navigate(['/signin']);
        }, 3000)
      }
      else if (response.status == "500"){
        this.showFailedMessage = true;
      }
      else{
        // Wrong data format from back end
      }
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {

  }

}
