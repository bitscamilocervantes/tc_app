import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitalesPage } from './digitales.page';

describe('DigitalesPage', () => {
  let component: DigitalesPage;
  let fixture: ComponentFixture<DigitalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
