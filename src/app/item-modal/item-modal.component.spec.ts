import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular/standalone';

import { ItemModalComponent } from './item-modal.component';
import { RunewordDataService } from '../data/runeword-data.service';
import { RunewordItem } from '../data/runeword-item.model';

describe('ItemModalComponent', () => {
  const modalControllerSpy = jasmine.createSpy('ModalController');
  let mockRuneword: RunewordItem = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemModalComponent],
      providers: [RunewordDataService],
    })
      .overrideComponent(ItemModalComponent, {
        set: {
          providers: [
            { provide: ModalController, useValue: modalControllerSpy },
          ],
        },
      })
      .compileComponents();
  });

  it('should create and display Rune Word data', () => {
    const fixture = TestBed.createComponent(ItemModalComponent);
    const component = fixture.componentInstance;
    component.runewordItem = mockRuneword;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('ion-title').textContent).toBe(
      'Breath of the Dying'
    );
    const runewordData = nativeElement.querySelectorAll('p');
    expect(runewordData[0].textContent).toContain("'VexHelElEldZodEth'");
    expect(runewordData[1].textContent).toContain('Sockets: 6');
    expect(runewordData[2].textContent).toContain('Required level: 69 (Zod)');
    expect(runewordData[3].textContent).toContain('Item type: Weapon');
    expect(runewordData[4].textContent).toContain(
      'Weapon class: Axe, Hammer, Mace, Polearm, Staff, Sword, Missile'
    );
    expect(nativeElement.querySelector('p.invalid-color')).toBeFalsy();
    expect(nativeElement.querySelectorAll('p.magic-text').length).toBe(14);
  });

  it('should display "Ladder Only" text', () => {
    const fixture = TestBed.createComponent(ItemModalComponent);
    const component = fixture.componentInstance;
    const mockLadderOnlyRuneword: RunewordItem = {
      ...mockRuneword,
      ladderOnly: true,
    };
    component.runewordItem = mockLadderOnlyRuneword;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const nativeElement = fixture.nativeElement;
    expect(
      nativeElement.querySelector('p.invalid-color').textContent
    ).toContain('Ladder Only');
  });
});
