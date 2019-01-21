import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormsModule,} from '@angular/forms';
import { CommonService } from './common.service';

//import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public val:string;
  constructor(private newService :CommonService,) {  }
  ngOnInit() {
	 this.getMy();
  }
public getMy=()=> {
	this.newService.GetUser().subscribe(Response =>{
		this.val= Response;
	}, (err)=>{
    console.log("err");
  })}
	

/* onSave = function(user,isValid: boolean) {
	user.mode=this.valbutton;
	this.newService.saveUser(user)
	.subscribe(data => {  alert(data.data);
	
	this.ngOnIt();
	}
	, error => this.errorMessage = error )
} */
}