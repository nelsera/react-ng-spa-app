import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoAContaComponent } from './acesso-a-conta.component';

describe('AcessoAContaComponent', () => {
  let component: AcessoAContaComponent;
  let fixture: ComponentFixture<AcessoAContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcessoAContaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcessoAContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
