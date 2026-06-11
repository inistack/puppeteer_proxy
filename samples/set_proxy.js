import { launch } from 'puppeteer';


(async () => {

    const proxyServerList = [
        'http://proxy1.example.com:8080',
        'http://proxy2.example.com:8080',
        'http://209.127.138.10:5784',
    ];

    const randomProxy = proxyServerList[Math.floor(Math.random() * proxyServerList.length)]



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

    await browser.close();

})();