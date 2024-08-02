import { Injectable } from '@angular/core';

import { runewordData } from './runeword-data';
import { RunewordItem } from './runeword-item.model';

@Injectable({
  providedIn: 'root',
})
export class RunewordDataService {
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
    'Zod',
  ];

  constructor() {}

  getData(): RunewordItem[] {
    return runewordData;
  }

  getItemRuneword(item: RunewordItem): string {
    return `'${item.runes.toString().replace(/,/g, '')}'`;
  }

  getRunes() {
    return this.runes;
  }
}
