import { Component } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  lesproduits: Produit[] = [];
  pagesArray: number[] = [];
  selectedCategory: string = '';
  produitsParPage = 3;
  pageActuelle = 1;

  constructor(private produitservice: ProduitService) {}

  ngOnInit(): void {
    this.produitservice.getproduit().subscribe((data) => {
      this.lesproduits = data;
      this.selectedCategory = '';
      this.updatePagesArray();
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.pageActuelle = 1;
    this.updatePagesArray();
  }

  updatePagesArray(): void {
    const filteredProducts = this.lesproduits.filter(
      (product) => this.selectedCategory === '' || product.categorie === this.selectedCategory
    );
    this.pagesArray = Array(Math.ceil(filteredProducts.length / this.produitsParPage)).fill(0).map((x, i) => i + 1);
  }

  get displayedProducts(): Produit[] {
    const startIndex = (this.pageActuelle - 1) * this.produitsParPage;
    const endIndex = startIndex + this.produitsParPage;
    const filteredProducts = this.lesproduits.filter(
      (product) => this.selectedCategory === '' || product.categorie === this.selectedCategory
    );
    return filteredProducts.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return this.pagesArray.length;
  }

  changePage(newPage: number) {
    this.pageActuelle = newPage;
  }

  nextPage() {
    if (this.pageActuelle < this.pagesArray.length) {
      this.pageActuelle++;
    }
  }

  previousPage() {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
    }
  }
}
