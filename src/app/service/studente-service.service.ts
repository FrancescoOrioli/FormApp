import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Studente} from "../model/studente";
import {Observable} from "rxjs/Observable";
import * as Rx from 'rxjs/Rx';

@Injectable()
export class StudenteServiceService {

  private studente: Studente;
  private baseUrl: string = "http://localhost:8080";

  constructor(private http: Http) {
 this.studente=new Studente() }

 //chiamata di prova
prova() :Observable<Response>{
  console.log("sono in service.prova()")

  return this.http.post(this.baseUrl + "/studente/prova",{headers: this.getHeaders()}).map(this.extractData)
    .catch(this.handleError);


}
 stampaCampiDb():Observable<Response>
 {

   return this.http.post(this.baseUrl +  "/studente/all",{headers: this.getHeaders()});

 }

 //salva in Db
 studentAddInDb(stud:Studente): Observable<Response>
 {
   console.log('Saving person ' + JSON.stringify(stud));

   console.log("sto salvando in Db");
   this.studente.setNome(stud.getNome());
   this.studente.setMatricola(stud.getMatricola());
   this.studente.setCognome(stud.getCognome());
   this.studente.setData(stud.getData());

   return  this.http.post(this.baseUrl+"/studente/add2",stud,{headers: this.getHeaders()});
 }

  //tipo di file per la richiesta
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
