# Maintenance

This directory contains the instructions for the maintenance of the content present in this repo.

# Overall Website

### Directory structure of this repo.
    sites/

        labs/
            escal
            tesla

        fieldselection/
            2016
            2017
            2018
            2019

        marks/
            CO221/
                2016
            CO222/
                2016
                2017
                2018
                2020
            CO224/
                2015
            CO321/
                2015

        projects/
            finalyear/
                2008
                2009
                2010
                2015

        results/

        students/

        others/
            sinhalaocr
            config
            unixone
        
### URL structure after this repo is integrated into ce.pdn.ac.lk

Contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk

### Shell scripts

[https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/maintenance/update_sites.sh](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/maintenance/update_sites.sh)

### Maintenance routine instructions

Contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk

## Marks

### How to update marks for a subject?

Example: updating marks for CO222 2019

1. See if page [https://cepdnaclk.github.io/sites/marks/CO222/2016/](https://cepdnaclk.github.io/sites/marks/CO222/2016/) works.
2. Edit [https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/marks/CO222/2016/marks.csv](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/marks/CO222/2016/marks.csv)
3. Send a pull request 
FROM: https://github.com/**urname**/cepdnaclk.github.io/ (master branch)
TO: https://github.com/**cepdnaclk**/cepdnaclk.github.io/ (master branch)
4. Do (1). Now you have the marks at (1). You can share that link.
5. **(Optional)** After routine transfers, the marks will appear on [http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/](http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/) as well.