import { UsersAppPage } from './app.po';

describe('users-app App', () => {
  let page: UsersAppPage;

  beforeEach(() => {
    page = new UsersAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
