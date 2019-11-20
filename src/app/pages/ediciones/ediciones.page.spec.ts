import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicionesPage } from './ediciones.page';

describe('EdicionesPage', () => {
  let component: EdicionesPage;
  let fixture: ComponentFixture<EdicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
