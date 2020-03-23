# tesla.ce.pdn.ac.lk/students/

This is the code to update all the student websites in [https://tesla.ce.pdn.ac.lk/students/](https://tesla.ce.pdn.ac.lk/students/).

## How to use

### FOR STUDENTS: How to add a website?

Add your website information to [siteInfo.csv](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/students/siteInfo.csv). If you do not have write access, fork the repo, edit and send a pull request.

Your github.io website should be a **public repository**.

### FOR THE ADMINISTRATOR: How to update the websites? 

Run [update.sh](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/students/update.sh).
<pre><code>user@tesla.ce.pdn.ac.lk$ /var/www/html/students/update.sh
</pre></code>
This is all you have to do. You do not need to download any other file.

## Support:
Contact [me](https://gihan.me/contact) or [Kisaru Liyanage](mailto:kisarul@eng.pdn.ac.lk)

## To do:
1. Take this to students.ce.pdn.ac.lk
2. The present implementation downlaods all the github page content every run. Implement a way to download the changed content only.
3. Instead of copying the content from github, use url rewrite or dns records or some mechanism to deliver the content straight from github.
