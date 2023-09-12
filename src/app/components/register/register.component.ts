import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  validateForm! : FormGroup;
  isSpinning=false;
  confirmationvalidator = (control:FormControl): {[s:string] : boolean} => {
    if (!control.value) {
      return { required:true}
    } else if(control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true , error:true}
    }
    return{}
  }

  constructor(private fb: FormBuilder , 
    private authService:AuthService ,
    private router:Router,
    public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.validateForm = this.fb.group( {
      name: [null,[Validators.required, Validators.email]],
      email: [null,[Validators.required]],
      password: [null,[Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationvalidator]]


    })

  }
  register() {
    console.log(this.validateForm.value);
    this.authService.register(this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if (res.id != null) {
        this.snackBar.open(
          "You are registered successfully !", 'close' , {duration: 6000}
        );
        this.router.navigateByUrl('/login')
      } else {
        this.snackBar.open(res.message , 'Close' , {duration: 5000})

      }
    }, (error:any) => {
      this.snackBar.open("Registration failed , Please try again later ", 'close',{duration:5000})
    })
    }

    
  }
  


