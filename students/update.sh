#!/usr/bin/env bash

#gihanjayatilaka[at]eng[dot]pdn[dot]ac[dot]lk 2020-03-20

rm -rf !("update.sh"|"gen-shell-script.py"|"siteInfo.csv""studentInfo.csv"|"exceptions.sh")
python gen-shell-script.py --siteInfoCSV siteInfo.csv  --studentInfoCSV studentInfo.csv --outputBASH temp.sh --outputHTML index.html --exceptionsBASH exceptions.sh
chmod 700 temp.sh
./temp.sh
echo "COMPLETED running update.sh"