## Use Proxy in Puppeteer

Learn how to use proxy in Puppeteer framework. 
### Setup and Installation
Before you proceed, ensure that you have Node.js (LTS)/latest version and Node Package Manager (npm) installed on your computer.

Step 1: Clone this repository and navigate to the code directory as shown below:
```
    git clone https://github.com/inistack/puppeteer_proxy.git
```
```
    cd puppeteer_proxy
```
Step 2: Install the npm dependencies.
```
    npm install
```
### Authentication
Step 3: In order to run your Puppeteer on TestMu AI (formerly LambdaTest) cloud you will need to set your TestMu AI (formerly LambdaTest) username and access key in the environment variables. Click the Access Key button at the top-right of the Automation Dashboard to access it.

![access_key](./access_key_username.png)

**Windows**
```
    set TM_USERNAME="YOUR_TESTMUAI_USERNAME"
    set TM_ACCESS_KEY="YOUR_TESTMUAI_ACCESS_KEY"
    set PROXY_SERVER=”YOUR_PROXY_SERVER”

```
**Linux/macOS**
```
    export TM_USERNAME="YOUR_TESTMUAI_USERNAME"
    export TM_ACCESS_KEY="YOUR_TESTMUAI_ACCESS_KEY"
    export PROXY_SERVER=”YOUR_PROXY_SERVER”

```
### Executing The Puppeteer Scripts
To the Puppeteer scripts in this repository on TestMu AI (formerly LambdaTest) cloud plaform. 
Use the following command:
```
    node samples/puppeteer_proxy.js 
```
### View your Puppeteer results
After executing the script, your terminal should show similar results with your proxy IP address:
![results-terminal](./testmuai-terminal-local-test.png)

The TestMu AI (formerly LambdaTest) automation dashboard is where you can see the results of your executed Puppeteer scripts on the LambdaTest platform. It should look like this:
![results-dashboard](./testmuai_proxy_test_dash.png)
