import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/classes/evenement';
import { Gallerie } from 'src/app/classes/gallerie';
import { Produit } from 'src/app/classes/produit';
import { GallerieService } from 'src/app/services/gallerie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { EvenementService } from 'src/app/services/evenement.service'; 

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  events: Evenement[] = [];
  galleries: Gallerie[] = [];
  currentPhotoIndex: number = 0;
  lesproduits: Produit[] = [];
  constructor(private galleriservice: GallerieService,private produitservice: ProduitService,private router:Router,private evementservice:EvenementService) {}

  ngOnInit(): void {
    this.galleriservice.getGallerie().subscribe(data => {
      this.galleries = data;
    });

    this.produitservice.getproduit().subscribe((data) => {
      this.lesproduits = data;
    });

    this.evementservice.getevent().subscribe((data) => {
      this.events = data;
    });

  }
  showPhoto(index: number) {
    this.currentPhotoIndex = index - 1;
  }

  previousPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      this.currentPhotoIndex = this.galleries.length - 1;
    }
  }
  
  nextPhoto() {
    if (this.currentPhotoIndex < this.galleries.length - 1) {
      this.currentPhotoIndex++;
    } else {
      this.currentPhotoIndex = 0;
    }
  }
  exolore1(){
    this.router.navigate(['/about'])
  }
  exolore2(){
    this.router.navigate(['/produit'])
  }
  exolore3(){
    this.router.navigate(['/evenement'])
  }
}