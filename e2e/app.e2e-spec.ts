import { ArenaStatPage } from './app.po';

describe('arena-stat App', () => {
  let page: ArenaStatPage;

  beforeEach(() => {
    page = new ArenaStatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
