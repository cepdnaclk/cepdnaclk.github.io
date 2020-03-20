#!/usr/bin/env bash
#gihanjayatilaka[at]eng[dot]pdn[dot]ac[dot]lk 2020-03-20
rm -rf *
wget https://raw.githubusercontent.com/cepdnaclk/cepdnaclk.github.io/master/students/update.sh
wget https://raw.githubusercontent.com/cepdnaclk/cepdnaclk.github.io/master/students/exceptions.sh
wget https://raw.githubusercontent.com/cepdnaclk/cepdnaclk.github.io/master/students/gen-shell-script.py
wget https://raw.githubusercontent.com/cepdnaclk/cepdnaclk.github.io/master/students/siteInfo.csv
wget https://raw.githubusercontent.com/cepdnaclk/cepdnaclk.github.io/master/students/studentInfo.csv

python gen-shell-script.py --siteInfoCSV siteInfo.csv  --studentInfoCSV studentInfo.csv --outputBASH temp.sh --outputHTML index.html --exceptionsBASH exceptions.sh
chmod 700 temp.sh
./temp.sh
echo 'COMPLETED running update.sh'