import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { RuneWordDataService } from '../../data/runeword-data.service';

@Component({
  templateUrl: 'filter-popover.html'
})
export class FilterPopoverPage implements OnInit {
  filters = {
    selectedItemTypes: [],
    selectedWeaponClasses: [],
    numberOfSockets: [],
    selectedRunes: []
  };
  runes: string[];

  constructor(
    public navParams: NavParams,
    private runeWordDataService: RuneWordDataService,
    public viewCtrl: ViewController
  ) { }

  ngOnInit() {
    if (this.navParams.data) {
      if (this.navParams.data.activeFilters.selectedItemTypes) {
        this.filters.selectedItemTypes = this.navParams.data.activeFilters.selectedItemTypes;
      }

      if (this.navParams.data.activeFilters.selectedWeaponClasses) {
        this.filters.selectedWeaponClasses = this.navParams.data.activeFilters.selectedWeaponClasses;
      }

      if (this.navParams.data.activeFilters.numberOfSockets) {
        this.filters.numberOfSockets = this.navParams.data.activeFilters.numberOfSockets;
      }

      if (this.navParams.data.activeFilters.selectedRunes) {
        this.filters.selectedRunes = this.navParams.data.activeFilters.selectedRunes;
      }
    }

    this.runes = this.runeWordDataService.getRunes();
  }

  applyFiltersAndDismiss() {
    this.viewCtrl.dismiss(this.filters);
  }

  clearFilters() {
    this.filters.selectedItemTypes = [];
    this.filters.selectedWeaponClasses = [];
    this.filters.numberOfSockets = [];
    this.filters.selectedRunes = [];
  }

  weaponItemTypeIsSelected() {
    return this.filters.selectedItemTypes.indexOf('Weapon') > -1;
  }
}
