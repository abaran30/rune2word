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
});
