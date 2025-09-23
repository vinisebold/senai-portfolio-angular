import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardData } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  data = input.required<CardData>();
}