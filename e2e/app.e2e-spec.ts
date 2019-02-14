import { TddLab1Page } from './app.po';

describe('tdd-lab1 App', () => {
  let page: TddLab1Page;

  beforeEach(() => {
    page = new TddLab1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
