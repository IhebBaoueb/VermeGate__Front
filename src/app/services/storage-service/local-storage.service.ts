import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

const TOKEN="c_token";
const USERID ="C_user";
//const USERROLE="C_role"
const USER ='c_user';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() { }

  public saveUser(user:any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));

  }

  static getUserId() : string {
    const user = this.getUser();
    if (user==null) {return '';}
    return user.userId;
  }

  public saveToken(token:string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }

  static getToken(): string | null{
    return localStorage.getItem(TOKEN);
  }

  static hasToken(): boolean {
    if (this.getToken()===null) {
      return false;
    }
    return true;
  }


  static getUser() : any {
    const userString =localStorage.getItem(USER);
    if (userString !== null) {
      return JSON.parse(userString); 
    }
    
  }

  static getUserRole() : string {
  
    const user= this.getUser();
    if (user==null) {return'' ;}
    return user.role;
  }



  static isUserLoggedIn() {
    if (this.getToken()== null) {
      return false;
    }
    return true

  }

  static isAdminLoggedIn() : boolean {
    if (this.getToken()=== null) {
      return false;
    }
    const role : string = this.getUserRole() ; 
    return role== '1';
  }

  static logout() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);


  }
}
