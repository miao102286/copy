import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwTransferComponent } from './tw-transfer.component';

describe('TwTransferComponent', () => {
  let component: TwTransferComponent;
  let fixture: ComponentFixture<TwTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
