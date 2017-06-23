import { MyPharmacyPage } from './app.po';

describe('my-pharmacy App', () => {
  let page: MyPharmacyPage;

  beforeEach(() => {
    page = new MyPharmacyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
