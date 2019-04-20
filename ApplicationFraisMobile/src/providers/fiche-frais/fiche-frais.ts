import { User } from './../user/user';
import { FicheFrais } from './../../models/fichefrais';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
Generated class for the FicheFraisProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class FicheFraisProvider {
  
  constructor(public http: HttpClient, public userService: User) {
    console.log('Hello FicheFraisProvider Provider');
  }

  url = 'http://localhost:8888/cours/bts/2/ApplicationFrais/ApplicationFrais/ApplicationFraisWeb/';
  
  getAll(){
    return this.http.get(this.url + 'fiche_frais.php?utilisateur=' + this.userService.utilisateurId);
  }

  
  getDetailById(id: string) {
    return this.http.get(this.url + 'detail.php?fiche_frais_id=' + id);
  }
}
