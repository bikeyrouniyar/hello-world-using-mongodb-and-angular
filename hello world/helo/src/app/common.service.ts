import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; */

@Injectable()
export class CommonService {
  public url="http://localhost:3000"
  constructor(private http: Http) { }
  
  /* saveUser(){
	  return this.http.post('http://localhost:3000/api/SaveUser/', User)
		.map((response:Response) =>response.json())
} */
public GetUser():Observable<any> {
	return this.http.get(this.url)
		.pipe(map((response: Response) => response.text()));
}
}
