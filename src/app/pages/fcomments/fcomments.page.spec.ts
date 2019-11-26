import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcommentsPage } from './fcomments.page';

describe('FcommentsPage', () => {
  let component: FcommentsPage;
  let fixture: ComponentFixture<FcommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
