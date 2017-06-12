import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FishListComponent } from './fish-list.component';
import { By } from '@angular/platform-browser';

describe('FishListComponent', () => {
  let component: FishListComponent;
  let fixture: ComponentFixture<FishListComponent>;
  const sampleFish = [{
    id: 42,
    name: 'test-halibut',
    pic: '/assets/halibut-full.jpg'
   }, {
    id: 43,
    name: 'test-squid',
    pic: '/assets/squid-full.jpg'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishListComponent ],
      imports: [RouterTestingModule]
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

  it('should contain a link to the fish detail', () => {
    const anchors = fixture.debugElement.queryAll(By.css('li a'));

    expect(anchors[0].nativeElement.getAttribute('href')).toBe('/fish/42');
    expect(anchors[1].nativeElement.getAttribute('href')).toBe('/fish/43');
  });
});
