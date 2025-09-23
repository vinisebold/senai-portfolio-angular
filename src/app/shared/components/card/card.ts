import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CardData } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  data = input.required<CardData>();

  // A signal to hold the index of the currently visible slide. Starts at 0.
  currentIndex = signal(0);
  zoomedImageUrl = signal<string | null>(null);


  // Goes to the next slide, looping back to the start if necessary.
  next(): void {
    const nextIndex = this.currentIndex() + 1;
    this.currentIndex.set(nextIndex >= this.data().imagens.length ? 0 : nextIndex);
  }

  // Goes to the previous slide, looping to the end if necessary.
  prev(): void {
    const prevIndex = this.currentIndex() - 1;
    this.currentIndex.set(prevIndex < 0 ? this.data().imagens.length - 1 : prevIndex);
  }

  // Jumps to a specific slide when an indicator is clicked.
  goTo(index: number): void {
    this.currentIndex.set(index);
  }

  // Funções para controlar o zoom
  zoomIn(imageUrl: string): void {
    this.zoomedImageUrl.set(imageUrl);
  }

  zoomOut(): void {
    this.zoomedImageUrl.set(null);
  }
}