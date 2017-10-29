import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPost} from '../services/formPost.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=["Nodejs","AngularJs","ReactJs"];
  model = new Employee('','',true,'female','default',0,"");
  hasErrorLang=false;

  FirstToUpper(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
    else
      this.model.firstName=value;
  }
  constructor(private _formPoster:FormPost){

  }
  submitForm(form:NgForm){
    console.log(form.value)
    this._formPoster.postEmployee(this.model)
      .subscribe(
        data=>console.log('suucess',data),
        err => console.log('error:',err)
      )
  }
  validateLang(event){
    if(this.model.codeLang=="default")
      this.hasErrorLang=true;
    else
      this.hasErrorLang=false;
  }
}
/*
ng-untouched   ng-pristine ng-valid
ng-touch        ng-dirty    ng-invalid*/