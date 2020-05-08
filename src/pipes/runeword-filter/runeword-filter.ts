import { Pipe, PipeTransform } from '@angular/core';

import { RuneWordItem } from '../../data/runeword-item.model';

@Pipe({
  name: 'runeWordFilter'
})
export class RuneWordFilterPipe implements PipeTransform {
  transform(items: RuneWordItem[], selectedItemTypes: string[], selectedWeaponClasses: string[], numberOfSockets: string[],
    selectedRunes: string[]): RuneWordItem[] {
    if (selectedItemTypes && selectedItemTypes.length > 0) {
      items = items.filter(
        item => selectedItemTypes.indexOf(item.itemType) > -1
      );
    }

    if (selectedWeaponClasses && selectedWeaponClasses.length > 0) {
      items = items.filter(
        item => selectedWeaponClasses.every(
          weaponClass => item.itemType === 'Weapon' ? item.itemTypeSecondary.indexOf(weaponClass) > -1 : false
        )
      );
    }

    if (numberOfSockets && numberOfSockets.length > 0) {
      items = items.filter(
        item => numberOfSockets.indexOf((item.sockets).toString()) > -1
      );
    }

    if (selectedRunes && selectedRunes.length > 0) {
      items = items.filter(
        item => item.runes.some(rune => selectedRunes.indexOf(rune) > -1)
      );
    }

    return items;
  }
}
