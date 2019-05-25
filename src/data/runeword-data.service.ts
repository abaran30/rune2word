import { Injectable } from '@angular/core';

import { runeWordData } from './runeword-data';
import { RuneWordItem } from './runeword-item.model';

@Injectable()
export class RuneWordDataService {
  private runes: string[] = [
    'Amn',
    'Ber',
    'Cham',
    'Dol',
    'El',
    'Eld',
    'Eth',
    'Fal',
    'Gul',
    'Hel',
    'Io',
    'Ist',
    'Ith',
    'Jah',
    'Ko',
    'Lem',
    'Lo',
    'Lum',
    'Mal',
    'Nef',
    'Ohm',
    'Ort',
    'Pul',
    'Ral',
    'Shael',
    'Sol',
    'Sur',
    'Tal',
    'Thul',
    'Tir',
    'Um',
    'Vex',
    'Zod'
  ];

  constructor() { }

  getData(): RuneWordItem[] {
    return runeWordData.map(
      (item: RuneWordItem) => {
        const runewordItem = new RuneWordItem(
          item.name,
          item.runes,
          item.sockets,
          item.highestRune,
          item.itemType,
          item.itemTypeSecondary,
          item.requiredLevel,
          item.ladderOnly,
          item.properties
        );

        return runewordItem;
      }
    );
  }

  getItemRuneWord(item: RuneWordItem): string {
    return `'${item.runes.toString().replace(/,/g, '')}'`;
  }

  getRunes() {
    return this.runes;
  }
}
