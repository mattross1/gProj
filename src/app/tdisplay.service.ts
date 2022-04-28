import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Unauthorized } from 'http-errors'



@Injectable({
  providedIn: 'root'
})
export class TdisplayService {

  datau = 'http://iceteam.ddns.net:3000/';
  //datau = 'http://localhost:3000/';
  clientIp = '';

  constructor(private http: HttpClient) { }

  async getIP()
  {
    const ipWait = await this.http.get<string>("http://api.ipify.org/?format=json").subscribe((ipout:any)=>{
      this.clientIp = ipout.ip});
  }

  search(params: string | undefined) {
    let searchString: string = '';
    console.log("IP WAS: ", this.clientIp);
    if (this.clientIp != '98.171.200.74')
    {
      searchString  = 'SELECT * FROM iceTable WHERE phone LIKE \'%' + params + '%\'';
    }
    else {
      searchString  = 'SELECT * FROM iceTable WHERE phone =\'' + params + '\'';
    }
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: searchString
      }),
      responseType: 'text'
    }
    return this.http.get<any>(this.datau, getPara)
  }

  signupFun(firstIn: string | undefined, lastIn: string | undefined, emailIn: string | undefined, phoneIn: string | undefined) {
    let signString: string  = 'insert into iceTable (first, last, email, phone, punches) values (\'' + firstIn + 
    '\', \'' + lastIn + 
    '\', \'' + emailIn +
    '\', \'' + phoneIn + '\', \'0\');';
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: signString
      }),
      responseType: 'text'
    }
    return this.http.get<any>(this.datau, getPara)
  }

  updateFun(phoneUpIn: string | undefined, punchUpIn: string | undefined) {
    let updateString: string = 'update iceTable set punches = \'' + 
    punchUpIn + '\' where phone = \'' + phoneUpIn + '\';';
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: updateString
      }),
      responseType: 'text'
    }
    if (this.clientIp != '98.171.200.74')
    {
      return this.http.get<any>(this.datau, getPara)
    }

    throw throwError(Unauthorized)

    
    
  }
  removeFun(phoneRemIn: string | undefined) {
    let removeString: string = 'delete from iceTable where phone = \'' + phoneRemIn + '\';';
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: removeString
      }),
      responseType: 'text'
    }
    if (this.clientIp != '98.171.200.74')
    {
      return this.http.get<any>(this.datau, getPara)
    }

    throw throwError(new Error)

    
  }

}
