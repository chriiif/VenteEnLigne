import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { VendeurService } from 'src/app/services/vendeur.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  lesproduits: Produit[] = [];
  idProduct: number = 0;
  constructor(
    private produitservice: ProduitService,
    private vendeurservice: VendeurService,
    private activatedRoute: ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.produitservice.getproduit().subscribe(
      (data) => {
        this.lesproduits = data;
      }
    );
    this.idProduct = +this.activatedRoute.snapshot.params['identif'];
  }
  
}
