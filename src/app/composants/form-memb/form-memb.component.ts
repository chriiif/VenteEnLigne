import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-memb',
  templateUrl: './form-memb.component.html',
  styleUrls: ['./form-memb.component.css']
})
export class FormMembComponent {
  memform: any;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
this.memform=this.fb.nonNullable.group({
  prenom:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
  nom:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
  email:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail.com$')]],
  telephone:['' ,  [Validators.pattern('^[0-9]{8}$')]],
  nomprod:[''],
  desc:[''],
  image:[''],
 
})
  }
  public get nom(){
    return this.memform.get('nom');
  }
  public get prenom(){
    return this.memform.get('prenom');
  }
  public get email(){
    return this.memform.get('email');
  }
  public get telephone(){
    return this.memform.get('telephone');
  }
  afficher(){
    this.memform.reset();

  }
  
}
