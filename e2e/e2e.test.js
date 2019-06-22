import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('card number form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });

    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });


  test('should add .valid class for valid number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-form=card-form]');
    const input = await form.$('[data-name=card-number]');
    await input.type('5555555555554444');
    const submit = await form.$('[data-name=validate]');
    submit.click();
    await page.waitForSelector('[data-name=card-number].valid');
  });


  test('should add .invalid class for invalid number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-form=card-form]');
    const input = await form.$('[data-name=card-number]');
    await input.type('4');
    const submit = await form.$('[data-name=validate]');
    submit.click();
    await page.waitForSelector('[data-name=card-number].invalid');
  });

  test('should add .invalid class for invalid number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-form=card-form]');
    const input = await form.$('[data-name=card-number]');
    await input.type('sdfsdfs');
    const submit = await form.$('[data-name=validate]');
    submit.click();
    await page.waitForSelector('[data-name=card-number].invalid');
  });
});
