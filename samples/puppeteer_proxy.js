import { remoteBrowserPage } from "./connector.js";

(async () => {
    let { page, browser } = await remoteBrowserPage();

    console.log('Starting navigation');

    
    await page.goto('https://www.testmuai.com/selenium-playground/');
    
    const title = await page.title();
    console.log('Page title:', title);

    await page.goto('https://api.ipify.org');
    const ip = await page.$eval('body', el => el.textContent.trim());
    console.log('Page IP Address:', ip);

    // set test status to passed
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: "Test Passed" } })}`);

    await browser.close();

    console.log('Browser closed.');
})();
