import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LnewsPage } from './lnews.page';

describe('LnewsPage', () => {
  let component: LnewsPage;
  let fixture: ComponentFixture<LnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
