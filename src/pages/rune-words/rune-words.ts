import { Component } from '@angular/core';
import { ModalController, PopoverController } from 'ionic-angular';

import { ItemModalPage } from '../item-modal/item-modal';
import { FilterPopoverPage } from '../filter-popover/filter-popover';
import { RuneWordDataService } from '../../data/runeword-data.service';
import { RuneWordItem } from '../../data/runeword-item.model';

@Component({
  templateUrl: 'rune-words.html'
})
export class RuneWordsPage {
  activeFilters = {
    selectedItemTypes: [],
    selectedWeaponClasses: [],
    numberOfSockets: [],
    selectedRunes: []
  };
  activeItemTypeFilter: string[];
  activeWeaponClassesFilter: string[];
  activeNumberOfSocketsFilter: string[];
  activeRunesFilter: string[];
  runeWordItems: RuneWordItem[] = [];

  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private runeWordDataService: RuneWordDataService
  ) { }

  ionViewDidLoad() {
    this.getData();
  }

  filterRuneWordItems(ev: any) {
    this.getData();

    const value = ev.target.value;

    if (value && value.trim() !== '') {
      this.runeWordItems = this.runeWordItems.filter((item) => {
        return (item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    }
  }

  getData() {
    this.runeWordItems = this.runeWordDataService.getData();
  }

  openModal(runeWordItem: RuneWordItem) {
    let modal = this.modalCtrl.create(ItemModalPage, runeWordItem);
    modal.present();
  }

  presentPopover(ev: Event) {
    let popover = this.popoverCtrl.create(FilterPopoverPage, { activeFilters: this.activeFilters });

    popover.onDidDismiss(filters => {
      if (filters) {
        this.activeFilters.selectedItemTypes = filters.selectedItemTypes;
        this.activeFilters.selectedWeaponClasses = filters.selectedWeaponClasses;
        this.activeFilters.numberOfSockets = filters.numberOfSockets;
        this.activeFilters.selectedRunes = filters.selectedRunes;
      }
    });

    popover.present({
      ev: event
    });
  }

  getItemRuneWord(runeWordItem: RuneWordItem): string {
    return this.runeWordDataService.getItemRuneWord(runeWordItem);
  }

  getItemTypeIconPath(itemType: string): string {
    switch(itemType) {
      case 'Armor':
        return 'assets/imgs/armor.png';
      case 'Helm':
        return 'assets/imgs/helm.png';
      case 'Shield':
        return 'assets/imgs/shield.png';
      case 'Weapon':
        return 'assets/imgs/weapon.png';
      default:
        return '';
    }
  }
}
