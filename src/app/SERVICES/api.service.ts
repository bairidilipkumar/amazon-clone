import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL ='https://61795117aa7f34001740499e.mockapi.io/api/v1/products';
  private _jsonURLm ='https://61793684aa7f34001740487c.mockapi.io/api/v1/productsm';
  private _jsonURLe ='https://61793684aa7f34001740487c.mockapi.io/api/v1/productse';
  private _jsonURLf ='https://61793684aa7f34001740487c.mockapi.io/api/v1/productsf';
  private _jsonURLc ='https://61795117aa7f34001740499e.mockapi.io/api/v1/productsc';
  private _jsonURLh ='https://61793684aa7f34001740487c.mockapi.io/api/v1/productsh';
  private _jsonURLt ='https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/productst';
  constructor(private Http: HttpClient) { }

  getJson():Observable<any>{
    return this.Http.get(this._jsonURL )
  }
  getJsonm():Observable<any>{
    return this.Http.get(this._jsonURLm )
  }
  getJsone():Observable<any>{
    return this.Http.get(this._jsonURLe )
  }
  getJsonf():Observable<any>{
    return this.Http.get(this._jsonURLf )
  }
  getJsonc():Observable<any>{
    return this.Http.get(this._jsonURLc )
  }
  getJsonh():Observable<any>{
    return this.Http.get(this._jsonURLh )
  }
  getJsont():Observable<any>{
    return this.Http.get(this._jsonURLt )
  }
}
