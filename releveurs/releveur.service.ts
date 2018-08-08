import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';  
import { Observable } from 'rxjs/Observable';
import { Releveur } from './releveur';
import 'rxjs/add/observable/throw'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import { findIndex } from 'lodash';

@Injectable()
export class ReleveurService{
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url = 'http://localhost:8080/RestExample/rest/releveur';

    constructor(public http:Http){}


    getReleveurs(){
    return this.http.get("http://localhost:8080/RestExample/rest/releveur/getall")
        .map(res=> res.json())
        .catch((error:any) => Observable.throw('Server error'));
    }

    gets(): Promise<Releveur[]> {
    return this.http.get("http://localhost:8080/RestExample/rest/releveur/getall")
          .toPromise()
          .then(response => response.json() as Releveur[])
          .catch(this.handleError);
      }

    saveReleveur(releveur:Releveur):Promise<Releveur>{
        return this.http.post("http://localhost:8080/RestExample/rest/releveur/add",JSON.stringify(releveur),
         { headers: this.headers })
      .toPromise().then(resp=>resp.json() as Releveur)
      .catch(this.handleError);

    }
    updateReleveur(releveur: Releveur): Promise<Releveur> {
        return this.http
          .put("http://localhost:8080/RestExample/rest/releveur/update", JSON.stringify(releveur),
           { headers: this.headers })
          .toPromise()
          .then(() => releveur)
          .catch(this.handleError);
      }
     
      deleteReleveur(id: number ): Promise<void> {
        const url1 = 'http://localhost:8080/RestExample/rest/releveur/delete?id='+id;
        return this.http.delete(url1, { headers: this.headers }).toPromise()
          .then(() => null)
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('Une erreur sest produite' , error);
        return Promise.reject(error.message || error);
      }
}