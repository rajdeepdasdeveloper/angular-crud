import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../../services/login-register/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor(
    private _loginRegisterService : LoginRegisterService,
    private router: Router
  ) { }
  public  model: any = {}; // Signup Form Data
  public showSuccessMessage = false;
  public showFailedMessage = false;
  
  onSubmit(){
    this._loginRegisterService.login(this.model).subscribe( response  => {
      if (response.error){
        this.showFailedMessage = true;
      }
      else if(!response.error){
        if (typeof Storage !== 'undefined'){
          localStorage.setItem('token', response.token);
          // Success
          this.showSuccessMessage = true;
          console.log("Success");
          setTimeout(()=>{
            this.router.navigate(['/dashboard']);
          }, 3000)
        }
        else{
          alert("Your device does not have the basic requirements to run the application. Please try another device.")
        }
      }
      else{
        // Wrong data format from back end
      }
    })
  }
  
  ngOnInit(){

  }

}
