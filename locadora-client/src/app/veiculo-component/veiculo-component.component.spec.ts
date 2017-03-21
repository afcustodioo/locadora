import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoComponentComponent } from './veiculo-component.component';

describe('VeiculoComponentComponent', () => {
  let component: VeiculoComponentComponent;
  let fixture: ComponentFixture<VeiculoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
