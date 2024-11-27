import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const URL="http://localhost:3000/admin"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  info: Admin[] = [];
  authenticated = false;

  constructor(private adminService: AdminService, private router: Router, private http: HttpClient) {
    this.initAdminInfo();
  }

  private initAdminInfo(): void {
    this.adminService.getAdmin().subscribe(
      data => {
        this.info = data;
      }
    );
  }

  public login(login: string, pwd: string): boolean {
    const isAdminValid = this.info.length > 0 &&
      login === this.info[0].login &&
      pwd === this.info[0].password;

    if (isAdminValid) {
      this.authenticated = true;
      this.router.navigate(['/intadmin']);
    }

    return isAdminValid;
  }
  public authenticat(){
    return this.authenticated;
  }

  changer(id: number, a: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${URL}/${id}`, a);
  }
}
