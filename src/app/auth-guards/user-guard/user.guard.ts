import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router:Router , 
    private snackBar:MatSnackBar) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean  {
    if (!LocalStorageService.hasToken()) {
      LocalStorageService.logout();
      this.router.navigateByUrl("/login");
      this.snackBar.open(
        "you are not logged-in , Login first" , "Close", {duration : 5000}
      );
      return false;
    }
    return true ;
  }
  }

