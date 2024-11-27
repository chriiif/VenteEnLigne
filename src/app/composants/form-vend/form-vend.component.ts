import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-vend',
  templateUrl: './form-vend.component.html',
  styleUrls: ['./form-vend.component.css']
})
export class FormVendComponent {
  vendform: any;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
this.vendform=this.fb.nonNullable.group({
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
    return this.vendform.get('nom');
  }
  public get prenom(){
    return this.vendform.get('prenom');
  }
  public get email(){
    return this.vendform.get('email');
  }
  public get telephone(){
    return this.vendform.get('telephone');
  }
  public get nomprod(){
    return this.vendform.get('nomprod');
  }
  afficher(){
    this.vendform.reset();

  }
}
