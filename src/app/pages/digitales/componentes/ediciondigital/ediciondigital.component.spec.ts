import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdiciondigitalComponent } from './ediciondigital.component';

describe('EdiciondigitalComponent', () => {
  let component: EdiciondigitalComponent;
  let fixture: ComponentFixture<EdiciondigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiciondigitalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdiciondigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
