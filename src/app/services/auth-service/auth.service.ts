import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../storage-service/local-storage.service';



const BASIC_URL = environment["BASIC_URL"]
export  const AUTH_HEADER="authorization";
@Injectable({  
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private storageService:LocalStorageService) {}

  register(signUpDTO:any) : Observable<any> {
    return this.http.post<[]>(BASIC_URL + "sign-up", signUpDTO)
  }

  
  login(username:string, password:string) : Observable<any> {
    return this.http.post(BASIC_URL+ "authenticate",{
      username,
      password
    },
      {observe:'response'})
      .pipe(
        tap(__ => this.log("User Authentication")),
        map((res:HttpResponse<any>) => {
          this.storageService.saveUser(res.body);
          const tokenLenght=res.headers.get(AUTH_HEADER)?.length;
          const bearerToken=res.headers.get(AUTH_HEADER)?.substring(7,tokenLenght);
          this.storageService.saveToken(bearerToken!);
          return res;

        })
      );
  }

  log(message:string) : void {
    console.log("User Auth Service" + message)
  }  

   
}
