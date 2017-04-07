import { Angular53Page } from './app.po';

describe('angular53 App', () => {
  let page: Angular53Page;

  beforeEach(() => {
    page = new Angular53Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
