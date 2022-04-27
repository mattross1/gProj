import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TdisplayService {

  datau = 'http://ec2-3-87-116-129.compute-1.amazonaws.com:3000/';
  //datau = 'http://localhost:3000/';
  clientIp = '';

  constructor(private http: HttpClient) { }

  async search(params: string | undefined) {
    await this.http.get<string>("http://api.ipify.org/?format=json").subscribe((ipout:any)=>{
      this.clientIp = ipout.ip});
    let searchString: string = '';
    if (this.clientIp == '98.171.203.22')
    {
      searchString  = 'SELECT * FROM iceTable WHERE phone LIKE \'%' + params + '%\'';
    }
    else {
      searchString  = 'SELECT first FROM iceTable WHERE phone LIKE \'%' + params + '%\'';
    }
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: searchString
      }),
      responseType: 'text'
    }
    return this.http.get<String>(this.datau, getPara)
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
    this.http.get(this.datau, getPara).subscribe(subdat => {});
  }

  updateFun(phoneUpIn: string | undefined, punchUpIn: string | undefined) {
    this.http.get<string>("http://api.ipify.org/?format=json").subscribe((ipout:any)=>{
      this.clientIp = ipout.ip});
    let updateString: string = 'update iceTable set punches = ' + 
    punchUpIn + ' where phone = \'' + phoneUpIn + '\';';
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: updateString
      }),
      responseType: 'text'
    }
    if (this.clientIp == '98.171.203.22')
    {
      this.http.get(this.datau, getPara).subscribe(subdat => {});
    }
    
  }
  removeFun(phoneRemIn: string | undefined) {
    this.http.get<string>("http://api.ipify.org/?format=json").subscribe((ipout:any)=>{
      this.clientIp = ipout.ip});
    let removeString: string = 'delete from iceTable where phone = \'' + phoneRemIn + '\';';
    let getPara:Object = {
      headers: new HttpHeaders({
        paras: removeString
      }),
      responseType: 'text'
    }
    if (this.clientIp == '98.171.203.22')
    {
      this.http.get(this.datau, getPara).subscribe(subdat => {});
    }
  }

}
