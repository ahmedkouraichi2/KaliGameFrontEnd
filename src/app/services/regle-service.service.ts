import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Regle } from './model/regle.model';

@Injectable({
  providedIn: 'root'
})
export class RegleServiceService {



    public  regles$: BehaviorSubject<Regle[]> = new BehaviorSubject([
    {
      name: "Évaluez les compétences techniques à distance.",
      img:
        "https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375",
      description:
        "Vous invitez vos candidats développeurs à passer un test en ligne, au moment où ça les arrange."
    },
    {
      name: "Chassez les biais inconscients",
      img:
        "https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px",
      description:
        "Ne basez pas vos recrutements sur un ressenti. Notre plateforme d’évaluation technique vous aide à créer des tests équitables. "
    },
    {
      name: "Gagnez du temps",
      img:
        "https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px",
      description:
        "En optimisant votre processus d’évaluation, vous gagnez du temps.."
    }
  ]);



  public selectedRegle$: BehaviorSubject<Regle> = new BehaviorSubject(
    this.regles$.value[0]
  );

  
  public selectRegles(index: number): void {
    this.selectedRegle$.next(this.regles$.value[index]);
  }
  constructor() { }
}
