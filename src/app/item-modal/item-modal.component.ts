import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButtons,
  IonButton,
  IonIcon,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

import { RunewordItem } from '../data/runeword-item.model';
import { RunewordDataService } from '../data/runeword-data.service';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButtons,
    IonButton,
    IonIcon,
  ],
  providers: [ModalController, RunewordDataService],
})
export class ItemModalComponent {
  @Input({ required: true }) runewordItem!: RunewordItem;
  modalController = inject(ModalController);
  runewordDataService = inject(RunewordDataService);

  constructor() {
    addIcons({ closeOutline });
  }

  dismiss() {
    return this.modalController.dismiss();
  }

  getItemRuneword(): string {
    return this.runewordDataService.getItemRuneword(this.runewordItem);
  }

  getLevelRequirementText(): string {
    return `${this.runewordItem.requiredLevel} (${this.runewordItem.highestRune})`;
  }

  getRuneImagePath(rune: string) {
    return `assets/images/runes/${rune.toLocaleLowerCase()}.png`;
  }

  getWeaponTypesText(): string {
    return this.runewordItem.itemTypeSecondary
      ? this.runewordItem.itemTypeSecondary.toString().replace(/,/g, ', ')
      : '';
  }
}
