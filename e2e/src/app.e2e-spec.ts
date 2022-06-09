import { AppPage } from './app.po';
import { $, $$, browser, By, ElementArrayFinder, ElementHelper, logging, until } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', async () => {
    expect(await browser.getTitle()).toEqual('Formation Angular Avances');
  });

  // it('first button should be Formation', () => {
  //   expect(page.getFirstButtonText()).toEqual('Formation');
  // });

  it('first Card should be j\'ai faim', async () => {
    
    browser.sleep(1000);
    // step 1
    (await $$('mat-icon').get(0).click());

    browser.sleep(1000);
    // step 2
    (await $('a[routerLink="/cards"]').click());

    browser.sleep(1000);
    // step 3
    const textFirstElement = (await $$('cdk-accordion-item div span').get(1).getText());

    browser.sleep(3000);
    expect(textFirstElement).toBe('J\'ai faim');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
