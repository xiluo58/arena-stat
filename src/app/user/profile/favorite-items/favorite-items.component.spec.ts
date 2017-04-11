import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemsComponent } from './favorite-items.component';

describe('FavoriteItemsComponent', () => {
  let component: FavoriteItemsComponent;
  let fixture: ComponentFixture<FavoriteItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
