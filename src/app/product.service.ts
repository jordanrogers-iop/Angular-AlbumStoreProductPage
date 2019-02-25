import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from "./product";

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  getAlbum(id: number): Observable<Album[]> {
    return this._httpClient.get<Album[]>(this._albumUrl);
  }

  getProducts(): Observable<Product[]> { //functions return an Observable of type Product[]. This allows to use the map operator on the get request below.
    return this._httpClient.get<Product[]>(this._productsUrl); //specify the expected TYPE of response to an array of Product. The response object is then automatically mapped to the defined type.
  }

  constructor( private _http: Http, private _httpClient: HttpClient ) { }

}
