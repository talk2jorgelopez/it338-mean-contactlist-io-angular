import { It338MeanContactlistIoAngular2Page } from './app.po';

describe('it338-mean-contactlist-io-angular2 App', () => {
  let page: It338MeanContactlistIoAngular2Page;

  beforeEach(() => {
    page = new It338MeanContactlistIoAngular2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
