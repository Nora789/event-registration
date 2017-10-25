import { EventRegistrationPage } from './app.po';

describe('event-registration App', function() {
  let page: EventRegistrationPage;

  beforeEach(() => {
    page = new EventRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
