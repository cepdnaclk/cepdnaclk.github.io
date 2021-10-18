#!/usr/bin/env bash

#This file not be run separately. The text will be merged to the generated bash script

GITHUBNAME="Mabeesha"
NAME="mabeeshaw"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
cd "$GITHUBNAME.github.io"
git checkout 0d97480
cd ../
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> $OUTPUT_HTML

NAME="gihan"
mkdir $NAME
touch $NAME/.htaccess
echo "RewriteEngine on" >> $NAME/.htaccess
echo "RewriteBase /" >> $NAME/.htaccess
echo "RewriteRule (.*) http://gihan.me/\$1 [R=301,L]" >> $NAME/.htaccess
cd ../
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> $OUTPUT_HTML