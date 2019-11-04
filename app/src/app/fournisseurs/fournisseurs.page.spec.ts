import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursPage } from './fournisseurs.page';

describe('FournisseursPage', () => {
  let component: FournisseursPage;
  let fixture: ComponentFixture<FournisseursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
