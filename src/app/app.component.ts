import { Component } from '@angular/core';
import { LocalStorageService } from './services/storage-service/local-storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VermeGate';

  isUserLoggedIn!: boolean;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.updateUserLoggedInStatus();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.updateUserLoggedInStatus();
      }
    })


  }

  private updateUserLoggedInStatus(): void{
    this.isUserLoggedIn= LocalStorageService.isUserLoggedIn();

  }

  logout() {
    LocalStorageService.logout();
    this.router.navigateByUrl("/")

  }

}
