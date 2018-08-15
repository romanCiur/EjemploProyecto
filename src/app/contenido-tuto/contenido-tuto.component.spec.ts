import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTutoComponent } from './contenido-tuto.component';

describe('ContenidoTutoComponent', () => {
  let component: ContenidoTutoComponent;
  let fixture: ComponentFixture<ContenidoTutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoTutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
