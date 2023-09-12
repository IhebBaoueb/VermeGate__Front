import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router:Router) {}


  canActivate(next : ActivatedRouteSnapshot , state : RouterStateSnapshot 
    ): boolean {
      if(LocalStorageService.hasToken()) {
        this.router.navigateByUrl("/user/dashboard");
        return false ; 

      }
      return true ; 
  }
  
}
