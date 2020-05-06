# Maintenance

This directory contains the instructions for the maintenance of the content present in this repo.

## Overall Website

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

FROM: https://github.com/YOURNAME/cepdnaclk.github.io/ (master branch)

TO: https://github.com/cepdnaclk/cepdnaclk.github.io/ (master branch)

Usually these pull requests are accested every few hours. If it is urgent, please contact anyone listed on [https://github.com/orgs/cepdnaclk/teams/cepdnaclk-github-io-admins](https://github.com/orgs/cepdnaclk/teams/cepdnaclk-github-io-admins)

4. Once the pull request is accepted, the marks are visible at [https://cepdnaclk.github.io/sites/marks/CO222/2016/](https://cepdnaclk.github.io/sites/marks/CO222/2016/)

5. **(Optional)** After routine transfers, the marks will appear on [http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/](http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/) as well.

**(Optional)** If you want to accelerate these transfers, please contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk.