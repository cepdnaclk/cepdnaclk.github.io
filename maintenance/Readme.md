# Maintenance

This directory contains the instructions for the maintenance of the content present in this repo.

## Overall Website

### Directory structure of this repo.

```
sites/
├── marks/
│   ├──CO221/
│   │   └── 2016
│   ├──CO222/
│   │   ├── 2016
│   │   ├── 2017
│   │   ├── 2018
│   │   └── 2020
│   ├──CO224/
│   │   └── 2015
│   └──CO321/
│       └── 2015
├──results/
├──students/
└──others/
    ├── sinhalaocr
    ├── config
    └── unixone
```

### URL structure after this repo is integrated into ce.pdn.ac.lk

Contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk

### Shell scripts

[https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/maintenance/update_sites.sh](https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/maintenance/update_sites.sh)

### Maintenance routine instructions

Contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk

## Marks

### How to update marks for a subject?

Example: updating marks for CO222 2016<br>
<ol>
<li> See if page <a href="https://cepdnaclk.github.io/sites/marks/CO222/2016/">https://cepdnaclk.github.io/sites/marks/CO222/2016/</a> works.</li>

<li> Edit <a href="https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/marks/CO222/2016/marks.csv">https://github.com/cepdnaclk/cepdnaclk.github.io/blob/master/sites/marks/CO222/2016/marks.csv</a><br>
When you click edit, it will automatically be forked to your personal account. You have to edit the file in your personal fork.<br></li>

<li>Send a pull request <br>
FROM: https://github.com/YOURNAME/cepdnaclk.github.io/ (master branch)<br>
TO: https://github.com/cepdnaclk/cepdnaclk.github.io/ (master branch)<br>

Usually these pull requests are accested every few hours. If it is urgent, please contact anyone listed on <a href="https://github.com/orgs/cepdnaclk/teams/cepdnaclk-github-io-admins">https://github.com/orgs/cepdnaclk/teams/cepdnaclk-github-io-admins</a></li>

<li>Once the pull request is accepted, the marks are visible at <a href="https://cepdnaclk.github.io/sites/marks/CO222/2016/">https://cepdnaclk.github.io/sites/marks/CO222/2016/</a></li>

<li><b>(Optional)</b> After routine (weekly) transfers, the marks will appear on <a href="http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/">http://www.ce.pdn.ac.lk/sites/marks/CO222/2016/</a> as well.<br>

If you want to do the transfer urgently, please contact kisarul[at]eng[dot]pdn[dot]ac[dot]lk.</li>
</ol>

### How to add marks for a subject for the first time?

Example: You want to add marks for 2025 CO222.<br>
<ol>

<li>Confirm that no one has started to add marks for this subject by visiting <a href="https://cepdnaclk.github.io/sites/marks/CO222/2025/">https://cepdnaclk.github.io/sites/marks/CO222/2025/</a>.<br>

<b>If</b> you get a 404 NOT FOUND error, look at (2)<br>

<b>Else</b>, someone has started adding marks for this subject. Look at <a href="https://cepdnaclk.github.io/maintenance/#how-to-update-marks-for-a-subject">https://cepdnaclk.github.io/maintenance/#how-to-update-marks-for-a-subject</a><br></li>

<li> Contact gihanjayatilaka[at]eng[dot]pdn[dot]ac[dot]lk and ask him to create the subject or complete this documentation.</li>
</ol>
