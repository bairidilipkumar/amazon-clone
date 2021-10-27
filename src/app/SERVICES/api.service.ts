import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL ='assets/DATA/products.json';
  private _jsonURLm ='assets/DATA/productsm.json';
  private _jsonURLe ='assets/DATA/productse.json';
  private _jsonURLf ='assets/DATA/productsf.json';
  private _jsonURLc ='assets/DATA/productsc.json';
  private _jsonURLh ='assets/DATA/productsh.json';
  private _jsonURLt ='assets/DATA/productst.json';
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
