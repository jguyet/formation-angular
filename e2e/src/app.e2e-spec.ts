import { AppPage } from './app.po';
import { $$, browser, By, logging, until } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should card exists', async () => {
    let firstCardTitle = await $$('.mat-card-title').get(0).getText();

    expect(firstCardTitle).toEqual('J\'ai faim');
    
    browser.sleep(10000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
