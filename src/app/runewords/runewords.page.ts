import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
  IonIcon,
  IonPopover,
  IonSelect,
  IonSelectOption,
  IonButton,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { funnel } from 'ionicons/icons';

import { RunewordItem } from '../data/runeword-item.model';
import { RunewordDataService } from '../data/runeword-data.service';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { RunewordFilterPipe } from '../runeword-filter.pipe';

interface Filters {
  selectedItemTypes: string[];
  selectedWeaponClasses: string[];
  numberOfSockets: string[];
  selectedRunes: string[];
}

@Component({
  selector: 'app-runewords',
  templateUrl: './runewords.page.html',
  styleUrls: ['./runewords.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonIcon,
    IonPopover,
    IonSelect,
    IonSelectOption,
    IonButton,
    RunewordFilterPipe,
  ],
  providers: [ModalController, RunewordDataService],
})
export class RunewordsPage implements OnInit {
  @ViewChild('popover') filterPopover!: IonPopover;
  filters: Filters = {
    selectedItemTypes: [],
    selectedWeaponClasses: [],
    numberOfSockets: [],
    selectedRunes: [],
  };
  runes: string[] = [];
  modalController = inject(ModalController);
  runewordDataService = inject(RunewordDataService);
  runewordItems: RunewordItem[] = [];

  constructor() {
    addIcons({ funnel });
  }

  ngOnInit() {
    this.runewordItems = this.runewordDataService.getData();
    this.runes = this.runewordDataService.getRunes();
  }

  getItemRuneword(runeWordItem: RunewordItem): string {
    return this.runewordDataService.getItemRuneword(runeWordItem);
  }

  searchRunewordItems(searchInput: string | null | undefined) {
    this.runewordItems = this.runewordDataService.getData();

    if (searchInput && searchInput.trim() !== '') {
      this.runewordItems = this.runewordItems.filter(item => {
        return item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
      });
    }
  }

  weaponItemTypeIsSelected() {
    return this.filters.selectedItemTypes.indexOf('Weapon') > -1;
  }

  clearFilters() {
    this.filters.selectedItemTypes = [];
    this.filters.selectedWeaponClasses = [];
    this.filters.numberOfSockets = [];
    this.filters.selectedRunes = [];
  }

  dismissFilterPopover() {
    this.filterPopover.dismiss();
  }

  getItemTypeIconPath(itemType: string): string {
    switch (itemType) {
      case 'Armor':
        return 'assets/images/armor.png';
      case 'Helm':
        return 'assets/images/helm.png';
      case 'Shield':
        return 'assets/images/shield.png';
      case 'Weapon':
        return 'assets/images/weapon.png';
      default:
        return '';
    }
  }

  async openModal(runewordItem: RunewordItem) {
    const modal = await this.modalController.create({
      component: ItemModalComponent,
      componentProps: {
        runewordItem,
      },
    });
    modal.present();
  }
}
