import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YugiohArchetypeService {

  constructor(private http: HttpClient){}

  obterArchetype(searchArchetype:string){
    let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + searchArchetype + '';
    return this.http.get(url).toPromise();
  }


  getAll(searchArchetype: string) {
    return new Promise((resolve, reject) => {
 
      let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + searchArchetype + '';
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
 


}
