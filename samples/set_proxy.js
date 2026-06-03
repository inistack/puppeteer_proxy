import { launch } from 'puppeteer';

(async () => {
    const browser = await launch({
        args: [`--proxy-server=${process.env.PROXY_SERVER}`]
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