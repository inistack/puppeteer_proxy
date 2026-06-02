import { remoteBrowserPage } from "./connector.js";

(async () => {
    let { page, browser } = await remoteBrowserPage();

    console.log('Starting navigation');

    
    await page.goto('https://www.lambdatest.com');
    

    // set test status to passed
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: "Test Passed" } })}`);

    await browser.close();

    console.log('Browser closed.');
})();
