import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams, ViewController } from 'ionic-angular';
import { mockView } from 'ionic-angular/util/mock-providers';

import { FilterPopoverPage } from './filter-popover';
import { RuneWordDataService } from '../../data/runeword-data.service';
import { NavParamsMock } from '../../../test-config/ionic.mocks';

describe('FilterPopoverPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPopoverPage],
      imports: [
        IonicModule.forRoot(FilterPopoverPage)
      ],
      providers: [
        RuneWordDataService,
        { provide: NavParams, useClass: NavParamsMock },
        { provide: ViewController, useValue: mockView() }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPopoverPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof FilterPopoverPage).toBe(true);
  });

  it('should apply available filters on init', () => {
    component.navParams = {
      data: {
        activeFilters: {
          selectedItemTypes: ['Weapon'],
          selectedWeaponClasses: ['Sword'],
          numberOfSockets: ['6'],
          selectedRunes: ['Zod']
        }
      }
    };

    component.ngOnInit();
    expect(component.filters.selectedItemTypes).toEqual(['Weapon']);
    expect(component.filters.selectedWeaponClasses).toEqual(['Sword']);
    expect(component.filters.numberOfSockets).toEqual(['6']);
    expect(component.filters.selectedRunes).toEqual(['Zod']);
  });

  it('should dismiss the popover', () => {
    const spy = spyOn(component.viewCtrl, 'dismiss');
    component.applyFiltersAndDismiss();
    expect(component.viewCtrl.dismiss).toHaveBeenCalledWith(component.filters);
  });

  it('should clear the filters', () => {
    component.clearFilters();
    expect(component.filters.selectedItemTypes.length).toEqual(0);
    expect(component.filters.selectedWeaponClasses.length).toEqual(0);
    expect(component.filters.numberOfSockets.length).toEqual(0);
    expect(component.filters.selectedRunes.length).toEqual(0);
  });

  it('should determine if weapon type is selected', () => {
    component.filters.selectedItemTypes = ['Weapon'];
    expect(component.weaponItemTypeIsSelected()).toBeTruthy();
    component.filters.selectedItemTypes = ['Armor'];
    expect(component.weaponItemTypeIsSelected()).toBeFalsy();
  });
});
