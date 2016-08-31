import { SmartDumbComponentsPage } from './app.po';

describe('smart-dumb-components App', function() {
  let page: SmartDumbComponentsPage;

  beforeEach(() => {
    page = new SmartDumbComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
