import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { getCookie } from './Cookiee';

@Injectable()
export class DataService {
  myWebServer = "https://tinycard-n4-server.herokuapp.com";
  // myWebServer= "http://localhost:9000";
  constructor( private http:Http) { }
  logIn(value){
    let url=this.myWebServer+"/login";
    return this.http.post(url,value)
    .toPromise()
    .then(res =>
      res.json()
    )
    .catch( err => false)
  }

  signUp(value){
    let url=this.myWebServer+"/signup";
    return this.http.post(url,value)
    .toPromise()
    .then(res =>
      true
    )
    .catch( err => false)
  }
  getListFavoriteCollection(){
    let url = this.myWebServer+"/list/FavoriteCardCollection/userName="+getCookie("userName");
    // console.log(getCookie("userName"));
    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .catch(err => false);
  }
  getListCardCollection(){
    let url = this.myWebServer+"/list/CardCollection";
    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .catch(err => false);
  }

  getCardCollection(cardID){
    let url=this.myWebServer+"/CardCollection/cardID="+cardID;
    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .catch(err => false);
  }

  sendNewCardCollection(value){
    console.log(value);
    let url=this.myWebServer+"/newCardCollection";
    return this.http.post(url,value)
    .toPromise()
    .then( res => true)
    .catch( err => false)
  }

  addFavorite( userName, collectionID){
    let url=this.myWebServer+"/addFavorite/collectionID="+collectionID+"/userName="+userName;
    return this.http.get(url)
    .toPromise()
    .then( res => true)
    .catch(err => false);
  }

  removeFavorite(userName,collectionID){
    let url=this.myWebServer+"/removeFavorite/collectionID="+collectionID+"/userName="+userName;;
    return this.http.get(url)
    .toPromise()
    .then( res => true)
    .catch(err => false);
  }
  
}