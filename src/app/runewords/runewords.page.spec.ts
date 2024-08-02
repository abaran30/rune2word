import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular/standalone';

import { RunewordsPage } from './runewords.page';
import { RunewordDataService } from '../data/runeword-data.service';

describe('RunewordsPage', () => {
  const modalControllerSpy = jasmine.createSpy('ModalController');

  let fixture: ComponentFixture<RunewordsPage>;
  let component: RunewordsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunewordsPage],
      providers: [RunewordDataService],
    })
      .overrideComponent(RunewordsPage, {
        set: {
          providers: [
            { provide: ModalController, useValue: modalControllerSpy },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(RunewordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and list all Rune Words', () => {
    expect(component).toBeTruthy();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(83);
  });

  it('should have the Rune Word name, item Rune Word, and icon', () => {
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(
      runewordItems[6].querySelector('.unique-color').textContent
    ).toContain('Breath of the Dying');
    expect(runewordItems[6].querySelector('.light-text').textContent).toContain(
      "'VexHelElEldZodEth'"
    );
    expect(
      runewordItems[6].querySelector('.item-type-icon').getAttribute('src')
    ).toBe('assets/images/weapon.png');
  });

  // TODO: Consider refactoring the following tests to use the DOM for filtering
  it('should search for a particular Rune Word', () => {
    component.searchRunewordItems('breath of the dying');
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(1);
    expect(
      runewordItems[0].querySelector('.unique-color').textContent
    ).toContain('Breath of the Dying');
  });

  it('should show that no Rune Words found', () => {
    component.searchRunewordItems('does not exist');
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(0);
    expect(nativeElement.querySelector('ion-list div p').textContent).toContain(
      'No Rune Words found'
    );
  });

  it('should filter Rune Words', () => {
    component.filters = {
      selectedItemTypes: ['Weapon'],
      selectedWeaponClasses: ['Axe'],
      numberOfSockets: ['6'],
      selectedRunes: ['Zod'],
    };
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(1);
    expect(
      runewordItems[0].querySelector('.unique-color').textContent
    ).toContain('Breath of the Dying');
  });

  it('should filter Rune Words by no. of sockets', () => {
    component.filters = {
      selectedItemTypes: [],
      selectedWeaponClasses: [],
      numberOfSockets: ['6'],
      selectedRunes: [],
    };
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(3);
    expect(
      runewordItems[0].querySelector('.unique-color').textContent
    ).toContain('Breath of the Dying');
    expect(
      runewordItems[1].querySelector('.unique-color').textContent
    ).toContain('Last Wish');
    expect(
      runewordItems[2].querySelector('.unique-color').textContent
    ).toContain('Silence');
  });

  it('should filter Rune Words by selected runes', () => {
    component.filters = {
      selectedItemTypes: [],
      selectedWeaponClasses: [],
      numberOfSockets: [],
      selectedRunes: ['Zod'],
    };
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const runewordItems = nativeElement.querySelectorAll('ion-list ion-item');
    expect(runewordItems.length).toBe(1);
    expect(
      runewordItems[0].querySelector('.unique-color').textContent
    ).toContain('Breath of the Dying');
  });
});
