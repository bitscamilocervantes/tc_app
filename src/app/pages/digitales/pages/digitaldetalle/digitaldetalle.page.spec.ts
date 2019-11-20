import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitaldetallePage } from './digitaldetalle.page';

describe('DigitaldetallePage', () => {
  let component: DigitaldetallePage;
  let fixture: ComponentFixture<DigitaldetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitaldetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitaldetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
