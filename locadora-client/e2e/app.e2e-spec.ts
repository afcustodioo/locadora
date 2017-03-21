import { LocadoraClientPage } from './app.po';

describe('locadora-client App', () => {
  let page: LocadoraClientPage;

  beforeEach(() => {
    page = new LocadoraClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
