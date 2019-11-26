import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicionespostsPage } from './edicionesposts.page';

describe('EdicionespostsPage', () => {
  let component: EdicionespostsPage;
  let fixture: ComponentFixture<EdicionespostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionespostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicionespostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
