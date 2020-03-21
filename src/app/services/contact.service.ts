import {Injectable} from '@angular/core';
import {Config} from "../config/config";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from 'rxjs/operators'
import {Contact} from "../models/contact.model";
import {throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getListContact() {
    //let contacts = Config.FAKE_LIST_CONTACT;
    return this.http.get<Contact[]>(
      Config.SERVER_URL + 'contact/'
    ).pipe(
      map(datas => datas.map(data => new Contact().deserialize(data))),
      catchError(this.handleHttpError)
    );
  }

  handleHttpError(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        console.log("Error 404");
        break;
      }
    }
    return throwError(error);
  }

  createContact(nom: string, prenom: string, numero: string) {
    const datas = JSON.stringify({
      nom,
      prenom,
      numero
    });
    return this.http.post<{string}>(Config.SERVER_URL + 'contact/', datas);
  }


  updateFavValue(id: number, favoris: boolean) {
    const datas = JSON.stringify({
      id,
      favoris
    });
    return this.http.put<string>(Config.SERVER_URL + 'contact/', datas);
  }

}
