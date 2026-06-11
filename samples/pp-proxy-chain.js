import { launch } from 'puppeteer';
import { Server } from 'proxy-chain';


(async () => {

    const username = process.env.PROXY_USERNAME || "proxyuser";
    const password = process.env.PROXY_PASSWORD || "proxypassword";

    const server = new Server({
        port: 8000, host: 'localhost', verbose: true, prepareRequestFunction: () => {
            return {
                upstreamProxyUrl: `http://${username}:${password}@${process.env.PROXY_SERVER}`
            };
        }
    });

    await server.listen();
    console.log(`Proxy server is listening on port ${server.port}`);

    const proxyUrl = `http://${server.host}:${server.port}`;

    const browser = await launch({ args: [`--proxy-server=${proxyUrl}`] });
    const page = await browser.newPage();

    await page.authenticate({ username: 'proxyuser', password: 'proxypassword' });

    await page.goto('https://api.ipify.org');
    const ipP = await page.$eval('body', el => el.textContent.trim());
    console.log('Page IP Address:', ipP);

    await server.close();
    await page.close();

    await browser.close();

})();