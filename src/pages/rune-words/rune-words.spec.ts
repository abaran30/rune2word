import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Modal, Popover } from 'ionic-angular';

import { RuneWordsPage } from './rune-words';
import { RuneWordDataService } from '../../data/runeword-data.service';
import { PipesModule } from '../../pipes/pipes.module';

describe('RuneWordsPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RuneWordsPage],
      imports: [
        IonicModule.forRoot(RuneWordsPage),
        PipesModule
      ],
      providers: [RuneWordDataService]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneWordsPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof RuneWordsPage).toBe(true);
  });

  it('should load Rune Word data from the service', () => {
    component.getData();
    expect(component.runeWordItems.length > 0);
  });

  it('should load Rune Word data on view load', () => {
    const spy = spyOn(component, 'getData');
    component.ionViewDidLoad();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should open the modal', () => {
    const mockModal = new Modal(undefined, undefined, undefined, undefined, undefined, undefined);
    const spy = spyOn(component.modalCtrl, 'create').and.returnValue(mockModal);
    const popoverSpy = spyOn(mockModal, 'present');
    component.openModal(undefined);
    expect(mockModal.present).toHaveBeenCalled();
  });

  it('should present the popover', () => {
    const mockPopover = new Popover(undefined, undefined, undefined, undefined, undefined, undefined);
    const spy = spyOn(component.popoverCtrl, 'create').and.returnValue(mockPopover);
    const popoverSpy = spyOn(mockPopover, 'present');
    component.presentPopover(undefined);
    expect(mockPopover.present).toHaveBeenCalled();
  });

  it('should get the item Rune Word name', () => {
    const runeWordItem = {
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
    const itemRuneWord = component.getItemRuneWord(runeWordItem);
    expect(itemRuneWord).toEqual('\'VexHelElEldZodEth\'');
  });

  it('should filter Rune Words', () => {
    component.filterRuneWordItems({ target: { value: '' } });
    expect(component.runeWordItems.length).toEqual(83);

    component.filterRuneWordItems({ target: { value: 'Breath of the Dying' } });
    expect(component.runeWordItems.length).toEqual(1);
  });

  it('should get the item type icon path', () => {
    expect(component.getItemTypeIconPath('Armor')).toEqual('assets/imgs/armor.png');
    expect(component.getItemTypeIconPath('Helm')).toEqual('assets/imgs/helm.png');
    expect(component.getItemTypeIconPath('Shield')).toEqual('assets/imgs/shield.png');
    expect(component.getItemTypeIconPath('Weapon')).toEqual('assets/imgs/weapon.png');
    expect(component.getItemTypeIconPath('Invalid')).toEqual('');
  });
});
