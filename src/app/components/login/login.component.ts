import { HttpResponse } from '@angular/common/http';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  validateForm !: FormGroup;
  isSpinning=false;


  constructor(
    private authService : AuthService,
    private fb: FormBuilder,
    private router:Router,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  /*login() {
    console.log(this.validateForm.value)
    this.authService.login(this.validateForm.get(['username'])!.value,this.validateForm.get(['username'])!.value)
      .subscribe((res:any) => {

      console.log(res); 

    })  
  } */

  
  login() :void {
    console.log(this.validateForm.value);
    this.authService.login(
      this.validateForm.get(['username'])!.value,
      this.validateForm.get(['password'])!.value,
      ).subscribe(
      response => {
      this.router.navigateByUrl("user/informations");
      },

      error => {
        console.log(error)
        this.snackBar.open('Bad credentials','Close', {
          duration:5000,
          panelClass:'error-snackbar'
        });
      }
    )
  }
  
}


