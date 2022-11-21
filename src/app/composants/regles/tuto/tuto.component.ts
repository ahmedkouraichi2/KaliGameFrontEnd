import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Regle } from 'src/app/services/model/regle.model';
import { RegleServiceService } from 'src/app/services/regle-service.service';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent implements OnInit ,OnDestroy{
  public selectedRegle!: Regle;
  public regles!: Regle[];
  public subscription: Subscription = new Subscription();

  constructor(private regleService: RegleServiceService) {}

  ngOnInit() {
    this.subscription.add(
      this.regleService.regles$.subscribe((regles: Regle[]) => {
        this.regles = regles;
      })
    );
    this.subscription.add(
      this.regleService.selectedRegle$.subscribe(
        (selectedRegle: Regle) => {
          this.selectedRegle = selectedRegle;
        }
      )
    );
  }

  public selectCocktail(index: number) {
    this.regleService.selectRegles(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

