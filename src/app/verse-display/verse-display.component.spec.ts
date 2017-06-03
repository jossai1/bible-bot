import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDisplayComponent } from './verse-display.component';

describe('VerseDisplayComponent', () => {
  let component: VerseDisplayComponent;
  let fixture: ComponentFixture<VerseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
