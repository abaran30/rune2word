import { async, TestBed, inject } from '@angular/core/testing';

import { RuneWordDataService } from './runeword-data.service';
import { RuneWordItem } from './runeword-item.model';

describe('RuneWordDataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [RuneWordDataService]
    }).compileComponents();
  }));

  it('should be created', inject([RuneWordDataService], (service: RuneWordDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should successfully get data', inject([RuneWordDataService], (service: RuneWordDataService) => {
    expect(service.getData().length).toEqual(83);
  }));

  it('should successfully get an Item Rune Word', inject([RuneWordDataService], (service: RuneWordDataService) => {
    const runeWordItem: RuneWordItem = {
      'name': 'Breath of the Dying',
      'runes': [
        'Vex',
        'Hel',
        'El',
        'Eld',
        'Zod',
        'Eth'
      ],
      'sockets': 6,
      'highestRune': 'Zod',
      'itemType': 'Weapon',
      'itemTypeSecondary': [
        'Axe',
        'Hammer',
        'Mace',
        'Polearm',
        'Staff',
        'Sword',
        'Missile'
      ],
      'requiredLevel': 69,
      'ladderOnly': false,
      'properties': [
        '35% Chance to Cast Level 20 Poison Nova When You Kill an Enemy',
        'Indestructible',
        '+60% Increased Attack Speed',
        '+350-400% Enhanced Damage',
        '+200% Damage to Undead',
        '-25% Target Defense',
        '+50 to Attack Rating',
        '+50 to Attack Rating Against Undead',
        '7% Mana Stolen per Hit',
        '12-15% Life Stolen per Hit',
        'Prevent Monster Heal',
        '+30 to All Attributes',
        '+1 to Light Radius',
        'Requirements -20%'
      ]
    };

    expect(service.getItemRuneWord(runeWordItem)).toEqual('\'VexHelElEldZodEth\'');
  }));

  it('should successfully get Runes', inject([RuneWordDataService], (service: RuneWordDataService) => {
    expect(service.getRunes().length).toEqual(33);
  }));
});
