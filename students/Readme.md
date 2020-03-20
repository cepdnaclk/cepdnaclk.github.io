# tesla.ce.pdn.ac.lk/students/

This is the code to update all the student websites in [https://tesla.ce.pdn.ac.lk/students/](https://tesla.ce.pdn.ac.lk/students/).

## How to use

### How to update the websites

Copy the [update.sh](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/students/update.sh) file to the directory and run it.
This is all you have to do. You do not need to download any other file.

### How to add a website

Add your website information to [siteInfo.csv](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/students/siteInfo.csv). If you do not have write access, fork the repo, edit and send a pull request.


## To do:
1. Take this to students.ce.pdn.ac.lk
2. The present implementation downlaods all the github page content every run. Implement a way to download the changed content only.
3. Instead of copying the content from github, use url rewrite or dns records or some mechanism to deliver the content straight from github.
