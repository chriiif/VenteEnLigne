import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changerad',
  templateUrl: './changerad.component.html',
  styleUrls: ['./changerad.component.css']
})
export class ChangeradComponent {
  admins: Admin[]=[];
  passform: any;
  constructor(private authservice:AuthService,private adminservice:AdminService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.adminservice.getAdmin().subscribe(
      data=>{
        this.admins=data
      }
    )

    this.passform=this.fb.nonNullable.group({
      pass: ['', [Validators.pattern('^[0-9]{4}$')]],
    })
 }
 public get pass(){
  return this.passform.get('pass');
}
  
  // onmodifier(l:string){
  //   this.admins[0].password=l;
  //    this.authservice.changer(this.admins[0].id,{
  //      password: l,
  //      login:this.admins[0].login ,
  //      id:this.admins[0].id
  //    }).subscribe(
  //     data=>console.log(data)
  //    )
  //    this.passform.reset(); 
 
  //  }
  onmodifier(newPassword: string) {
    this.admins[0].password = newPassword;
  
    this.authservice.changer(this.admins[0].id, {
      password: newPassword,
      login: this.admins[0].login,
      id: this.admins[0].id
    }).subscribe(
      data => {
        console.log(data);
        this.passform.reset();
        alert("Le mot de passe a été changé avec succès");
      },
      error => {
        console.error("Erreur lors du changement de mot de passe :", error);
      }
    );
  }
  
}
