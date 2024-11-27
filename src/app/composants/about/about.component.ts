import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Membre } from 'src/app/classes/membre';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  lesmembres:Membre[]=[];
  constructor(private membreservice:MembreService,private router:Router){}
  ngOnInit():void{
     this.membreservice.getmembre().subscribe(
       data=>{
         this.lesmembres=data
       }
     )
  }
  contacter(){
     this.router.navigate(['/contact']);
  }
  showCustomHeader: boolean = true;
}

