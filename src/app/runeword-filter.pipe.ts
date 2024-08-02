import { Pipe, PipeTransform } from '@angular/core';

import { RunewordItem } from './data/runeword-item.model';

@Pipe({
  name: 'runewordFilter',
  standalone: true,
})
export class RunewordFilterPipe implements PipeTransform {
  transform(
    items: RunewordItem[],
    selectedItemTypes: string[],
    selectedWeaponClasses: string[],
    numberOfSockets: string[],
    selectedRunes: string[]
  ): RunewordItem[] {
    if (selectedItemTypes && selectedItemTypes.length > 0) {
      items = items.filter(
        item => selectedItemTypes.indexOf(item.itemType) > -1
      );
    }

    if (selectedWeaponClasses && selectedWeaponClasses.length > 0) {
      items = items.filter(item =>
        selectedWeaponClasses.every(weaponClass =>
          item.itemType === 'Weapon' && item.itemTypeSecondary
            ? item.itemTypeSecondary.indexOf(weaponClass) > -1
            : false
        )
      );
    }

    if (numberOfSockets && numberOfSockets.length > 0) {
      items = items.filter(
        item => numberOfSockets.indexOf(item.sockets.toString()) > -1
      );
    }

    if (selectedRunes && selectedRunes.length > 0) {
      items = items.filter(item =>
        item.runes.some(rune => selectedRunes.indexOf(rune) > -1)
      );
      // TODO: Consider the following logic for a Rune Word "builder"
      // items = items.filter(
      //   item => selectedRunes.every(rune => item.runes.indexOf(rune) > -1)
      // );
    }

    return items;
  }
}
