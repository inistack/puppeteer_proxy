import { launch } from 'puppeteer';


(async () => {

    // Launch the browser with the proxy server argument
    const browser = await launch({
        args: [`--proxy-server=${process.env.PROXY_SERVER}`]
    });

    const page = await browser.newPage();

    // Authenticate with the proxy server if required
   await page.authenticate({ username: process.env.PROXY_USERNAME, password: process.env.PROXY_PASSWORD });

    await page.goto('https://api.ipify.org');
    const ip = await page.$eval('body', el => el.textContent.trim());
    console.log('Page IP Address:', ip);

    // set test status to passed
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: "Test Passed" } })}`);

    await browser.close();

})();