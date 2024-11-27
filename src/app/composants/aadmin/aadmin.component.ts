import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aadmin',
  templateUrl: './aadmin.component.html',
  styleUrls: ['./aadmin.component.css']
})
export class AadminComponent {
  
  loginForm!: FormGroup;

    constructor(private authService: AuthService, private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        login: ['',[Validators.required, Validators.pattern('^[a-z][a-zA-Z]+$')]],
        password: ['', [Validators.pattern('^[0-9]{4}$')]],
      });
    }
    public get loginn(){
      return this.loginForm.get('login');
    }
    public get password(){
      return this.loginForm.get('password');
    }
  
    login(l: string, p: string) {
      this.authService.login(l, p);
    }

}
