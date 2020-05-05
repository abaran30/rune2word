import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams, ViewController } from 'ionic-angular';
import { mockView } from 'ionic-angular/util/mock-providers';

import { ItemModalPage } from './item-modal';
import { RuneWordDataService } from '../../data/runeword-data.service';
import { NavParamsMock } from '../../../test-config/ionic.mocks';

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
  });

  it('should be created', () => {
    expect(component instanceof ItemModalPage).toBe(true);
  });
});
