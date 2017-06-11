import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishListComponent } from './fish-list.component';
import { By } from '@angular/platform-browser';

describe('FishListComponent', () => {
  let component: FishListComponent;
  let fixture: ComponentFixture<FishListComponent>;
  const sampleFish = [{
    name: 'test-halibut',
    pic: '/assets/halibut-full.jpg'
  }, {
    name: 'test-squid',
    pic: '/assets/squid-full.jpg'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishListComponent);
    component = fixture.componentInstance;
    component.fish = sampleFish;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of fish', () => {
    const viewList = fixture.debugElement.queryAll(By.css('li'));

    expect(viewList.length).toBe(2);
    expect(viewList[0].nativeElement.textContent).toContain('test-halibut');
    expect(viewList[1].nativeElement.textContent).toContain('test-squid');
  });
});
