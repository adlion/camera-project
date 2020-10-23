import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraInventoryComponent } from './camera-inventory.component';

describe('CameraInventoryComponent', () => {
  let component: CameraInventoryComponent;
  let fixture: ComponentFixture<CameraInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
