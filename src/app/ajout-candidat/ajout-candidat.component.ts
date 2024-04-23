import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.css']
})
export class AjoutCandidatComponent implements OnInit {
  numeroCandidat: string = '';
  prenom: string = '';
  nom: string = '';
  dateNaissance: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Extraire les paramètres de requête
    this.route.queryParams.subscribe(params => {
      // Utiliser les paramètres de requête pour initialiser les champs du formulaire
      if (params['items'] && params['items'].length > 0) {
        // Si l'attribut items est présent et n'est pas vide
        // Parcourir les éléments de l'array items
        // Si l'attribut items est présent et n'est pas vide
        // Parcourir les éléments de l'array items
        params['items'].forEach((item: any, index: number) => {
          console.log(`Élément ${index + 1}:`, item);
          // Accéder aux valeurs des attributs de chaque objet item
          console.log('Numero du candidat :', item.numero_carte_electeur);
          console.log('Prenom :', item.prenom);
          console.log('Nom :', item.nom);
          console.log('Date de naissance :', item.date_naissance);
          // Et ainsi de suite pour d'autres attributs de l'électeur
        });
      }
    });
  }
}
