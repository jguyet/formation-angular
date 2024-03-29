import { AppPage } from './app.po';
import { $$, browser, By, logging, until } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', async () => {
    expect(await browser.getTitle()).toEqual('Formation Angular Avances');
  });

  it('first button should be Formation', () => {
    expect(page.getFirstButtonText()).toEqual('Formation');
  });

  it('first Card should be sfsfsff', (done) => {
    page.getCardButton().click().then(() => {
      // browser.sleep(5000);
      expect($$('mat-card mat-card-title').first().getText()).toEqual('sfsfsff');
      done();
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
