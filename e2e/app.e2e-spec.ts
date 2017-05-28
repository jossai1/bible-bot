import { BibleBotPage } from './app.po';

describe('bible-bot App', () => {
  let page: BibleBotPage;

  beforeEach(() => {
    page = new BibleBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
