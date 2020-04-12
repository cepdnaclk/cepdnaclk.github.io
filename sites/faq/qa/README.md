# cepdnaclk.github.io/sites/faq/qa

##### How to add questions to this FAQ list?
1. Go to [https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/faq/qa/README.md](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/faq/qa/README.md)
2. Sign in to github.
3. Fork the repo.
4. Edit the file. (You may answer an existing question, and a new question or add a new question along with the answer)
5. Send a pull request.

##### How to connect to department servers?
See https://ce-pdn-ac-lk.com/cewiki/server_use:use_of_servers

##### What are my Wifi networks and login credentials?
<table>
    <tr><td>Network</td><td>Username</td><td>Password</td></tr>
    <tr><td>Pera-Wifi</td><td>e14000</td><td>Feels password</td></tr>
    <tr><td>Eng-Student</td><td>None</td><td><a href="https://gihan.me/contact/">ask</a>(cannot post publicly)</td></tr>
    <tr><td>NetLab</td><td>None</td><td><a href="https://gihan.me/contact/">ask</a>(cannot post publicly)</td></tr>
</table>

##### How to setup proxy settings in linux based operating systems?
As of now (2020-04-12) you do not need any proxy settings to access the internet through any network.

##### How to setup proxy in windows?
As of now (2020-04-12) you do not need any proxy settings to access the internet through any network.

##### How to troubleshoot wifi driver issues in Ubuntu?

##### How to run ARM assembly code?

1. Install the following software on your computer (already installed on tesla.ce.pdn.ac.lk)
<pre><code>
    sudo apt-get install gcc-arm-linux-gnueabi
    sudo apt-get install qemu-user
</code></pre>

2. Assemble and run (example is armProg.s)
<pre><code>
    arm-linux-gnueabi-gcc -Wall armProg.s -o assembledCode
    qemu-arm -L /usr/arm-linux-gnueabi assembledCode
</code></pre>