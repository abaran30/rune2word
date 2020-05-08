import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { RuneWordDataService } from '../../data/runeword-data.service';
import { RuneWordItem } from '../../data/runeword-item.model';

@Component({
  templateUrl: 'item-modal.html'
})
export class ItemModalPage {
  runeWordItem: RuneWordItem;

  constructor(
    public params: NavParams,
    private runewordDataService: RuneWordDataService,
    public viewCtrl: ViewController
  ) {
    this.runeWordItem = this.params.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getItemRuneWord(): string {
    return this.runewordDataService.getItemRuneWord(this.runeWordItem);
  }

  getLevelRequirementText(): string {
    return `${this.runeWordItem.requiredLevel} (${this.runeWordItem.highestRune})`;
  }

  getRuneImagePath(rune: string) {
    return `assets/imgs/runes/${rune.toLocaleLowerCase()}.png`;
  }

  getWeaponTypesText(): string {
    return this.runeWordItem.itemTypeSecondary ? this.runeWordItem.itemTypeSecondary.toString().replace(/,/g, ', ') : '';
  }
}
