import { Etat } from './etat';
// import { FraisNonForfaitises } from './fraisnonforfaitises';
// import { FraisForfaitises } from './fraisforfaitises';
export class FicheFrais{
      id: number;
      mois: string;
      annee: string;
      etat: Etat;
      montant: number;
      // frais_forfaitises: Array<FraisForfaitises>;
      // frais_non_forfaitises: Array<FraisNonForfaitises>;
}