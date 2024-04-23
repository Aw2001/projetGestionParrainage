import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidat } from '../model/candidat';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-candidat',
  templateUrl: './search-candidat.component.html',
  styleUrls: ['./search-candidat.component.css']
})
export class SearchCandidatComponent implements OnInit {
  candidat: Candidat = new Candidat();
  candidatTrouve: Candidat | null = null;
  result!: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  verifierCandidat(): void {
    // Assurez-vous que le champ numéroElecteur n'est pas vide
    if (this.candidat.numero_carte_electeur.trim() !== '') {
      // Effectuer une requête HTTP GET pour vérifier le candidat avec le numéro de carte électeur fourni
      this.http.get<Candidat>('https://ga83a9fd18b1967-gestionparrainage.adb.af-johannesburg-1.oraclecloudapps.com/ords/api/electeur/verif/' + this.candidat.numero_carte_electeur)
        .subscribe(
          (response: any) => {
            // Si le candidat existe, redirigez vers le composant AjoutCandidat avec les informations du candidat
            if (response !== null) {
              // Redirection vers le composant AjoutCandidat avec les informations du candidat en tant que paramètres de requête
              this.router.navigate(['/AjoutCandidat'], { queryParams: response }); // Utilisation de queryParams pour passer les informations du candidat
            } else {
              console.log('Le candidat n\'existe pas');
            }
          },
          (error) => {
            // Gérer les erreurs ici, par exemple, afficher un message d'erreur à l'utilisateur
            console.error('Une erreur s\'est produite lors de la vérification du candidat : ', error);
          }
        );
    } else {
      // Si le champ numéroElecteur est vide, afficher un message à l'utilisateur pour qu'il saisisse un numéro de carte électeur valide
      console.warn('Veuillez saisir un numéro de carte électeur valide.');
    }
  }
}
