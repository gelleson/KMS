import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeSmallCardComponent } from './scope-small-add-card.component';

describe('ScopeSmallCardComponent', () => {
  let component: ScopeSmallCardComponent;
  let fixture: ComponentFixture<ScopeSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeSmallCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
