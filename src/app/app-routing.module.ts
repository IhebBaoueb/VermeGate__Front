import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserModule } from './user/user.module';
import { NoAuthGuard } from './auth-guards/noAuth-guard/no-auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"register", component:RegisterComponent , canActivate : [NoAuthGuard]},
  {path:"login", component:LoginComponent , canActivate:[NoAuthGuard]},
  {path:"user", loadChildren: ()=> import("./user/user.module").then(m => m.UserModule)}
  
  

];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
