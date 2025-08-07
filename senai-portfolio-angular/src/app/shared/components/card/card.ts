import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

@Input() tema : string = '';
@Input() idHabilidade : string = '';
@Input() habilidade : string = '';
@Input() descricaoAtividade : string = '';

}
