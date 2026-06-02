import { launch } from 'puppeteer';

(async () => {
    const browser = await launch({
        args: ['--proxy-server=http://38.154.203.95:5863']
    });
    const page = await browser.newPage();

    // No page.authenticate(
    //{
    //    username: 'fpottlkv',
    //    password: '2f46ud4573vk'
    //})
    await page.goto('https://www.testmuai.com');
    console.log('Page title:', await page.title());
    await browser.close();
})();