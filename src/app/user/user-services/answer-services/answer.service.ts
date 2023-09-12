import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';
import { environment } from 'src/environments/environment';

const BASIC_URL = environment["BASIC_URL"]

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http : HttpClient) { }

  postAnswer(answerDto: any) : Observable<any> {
    return this.http.post<[]>(BASIC_URL + "api/answer",answerDto , 
    {
      headers: this.createAutorizationHeader()
    }
    );
  }

  createAutorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Autorization","Bearer " + LocalStorageService.getToken()
    );
  }
}
