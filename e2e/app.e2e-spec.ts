import { FishPrintsPage } from './app.po';

describe('fish-prints App', () => {
  let page: FishPrintsPage;

  beforeEach(() => {
    page = new FishPrintsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
