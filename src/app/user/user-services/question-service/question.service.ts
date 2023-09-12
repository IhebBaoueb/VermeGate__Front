import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';

const BASIC_URL = environment["BASIC_URL"]

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http:HttpClient ,
    private storageService:LocalStorageService
    ) { }

  postQuestion(questionDto: any) : Observable<any> {
    questionDto.userId= LocalStorageService.getUserId();
    console.log(questionDto);
    return this.http.post<[]>(BASIC_URL + "api/question",questionDto , 
    {
      headers: this.createAutorizationHeader()
    }
    );
  }

  getAllQuestion(pageNumber : number) : Observable <any> {
    return this.http.get<[]>(BASIC_URL + `api/questions/${pageNumber}` , 
    {
      headers : this.createAutorizationHeader()
    });
  }
  getQuestionById(questionId : number) : Observable <any> {
    return this.http.get<[]>(BASIC_URL + `api/question/${questionId}` , 
    {
      headers : this.createAutorizationHeader()
    });
  }
  createAutorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Autorization","Bearer " + LocalStorageService.getToken()
    );
  }
  
}
