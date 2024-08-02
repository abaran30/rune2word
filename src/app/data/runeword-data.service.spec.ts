import { TestBed } from '@angular/core/testing';

import { RunewordDataService } from './runeword-data.service';
import { RunewordItem } from './runeword-item.model';

describe('RunewordDataService', () => {
  let service: RunewordDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunewordDataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    expect(service.getData().length).toEqual(83);
  });

  it('should get an Item Rune Word', () => {
    const runewordItem: RunewordItem = {
      id: 'breath-of-the-dying',
      name: 'Breath of the Dying',
      runes: ['Vex', 'Hel', 'El', 'Eld', 'Zod', 'Eth'],
      sockets: 6,
      highestRune: 'Zod',
      itemType: 'Weapon',
      itemTypeSecondary: [
        'Axe',
        'Hammer',
        'Mace',
        'Polearm',
        'Staff',
        'Sword',
        'Missile',
      ],
      requiredLevel: 69,
      ladderOnly: false,
      properties: [
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
        'Requirements -20%',
      ],
    };

    expect(service.getItemRuneword(runewordItem)).toEqual(
      "'VexHelElEldZodEth'"
    );
  });

  it('should get Runes', () => {
    expect(service.getRunes().length).toEqual(33);
  });
});
