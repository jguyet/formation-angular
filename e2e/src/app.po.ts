import { $, $$, browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/cards`) as Promise<any>;
  }

  getFirstButtonText() {
    return $$('li a').first().getText() as Promise<string>;
  }

  getCardButton() {
    return $$('li a').get(1);
  }


}
