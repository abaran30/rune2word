import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams, ViewController } from 'ionic-angular';
import { mockView } from 'ionic-angular/util/mock-providers';

import { ItemModalPage } from './item-modal';
import { NavParamsMock } from '../../../test-config/ionic.mocks';
import { RuneWordDataService } from '../../data/runeword-data.service';

describe('ItemModalPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemModalPage],
      imports: [
        IonicModule.forRoot(ItemModalPage)
      ],
      providers: [
        RuneWordDataService,
        { provide: NavParams, useClass: NavParamsMock },
        { provide: ViewController, useValue: mockView() }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModalPage);
    component = fixture.componentInstance;
    component.runeWordItem = {
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
  });

  it('should be created', () => {
    expect(component instanceof ItemModalPage).toBe(true);
  });

  it('should dismiss the modal', () => {
    const spy = spyOn(component.viewCtrl, 'dismiss');
    component.dismiss();
    expect(component.viewCtrl.dismiss).toHaveBeenCalled();
  });

  it('should get the item Rune Word', () => {
    expect(component.getItemRuneWord()).toEqual('\'VexHelElEldZodEth\'');
  });

  it('should get the level requirement text', () => {
    expect(component.getLevelRequirementText()).toEqual('69 (Zod)');
  });

  it('should get the rune image URL', () => {
    expect(component.getRuneImagePath('Vex')).toEqual('assets/imgs/runes/vex.png');
    expect(component.getRuneImagePath('Hel')).toEqual('assets/imgs/runes/hel.png');
    expect(component.getRuneImagePath('El')).toEqual('assets/imgs/runes/el.png');
    expect(component.getRuneImagePath('Eld')).toEqual('assets/imgs/runes/eld.png');
    expect(component.getRuneImagePath('Zod')).toEqual('assets/imgs/runes/zod.png');
    expect(component.getRuneImagePath('Eth')).toEqual('assets/imgs/runes/eth.png');
  });

  it('should get weapon type text', () => {
    expect(component.getWeaponTypesText()).toEqual('Axe, Hammer, Mace, Polearm, Staff, Sword, Missile');
  });
});
