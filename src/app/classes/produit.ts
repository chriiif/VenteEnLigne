import { Vendeur } from "./vendeur";

export class Produit {
    constructor(public id:number,public title:string,public id_v:number,
        public image:string,
         public desc:string,
         public prix:number,
         public categorie:string,
         public vendeur: Vendeur[]
         ){}
}
