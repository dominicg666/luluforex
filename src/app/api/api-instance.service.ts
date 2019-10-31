import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
const apiUrl = "https://lieservices.luluone.com:9443/";

@Injectable({
  providedIn: 'root'
})
export class ApiInstanceService {
  constructor(private http: HttpClient) {

  }


  getData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let response = this.http.get(apiUrl + 'liveccyrates?payload=%7B"activityType":"rates.get","aglcid":784278,"instype":"LR"%7D', { headers: headers });
    return forkJoin([response]);
  }

}
