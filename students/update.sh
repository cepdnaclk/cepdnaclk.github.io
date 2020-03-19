rm index.html


echo "<html>
<title>Department of Computer Engineering, University of Peradeniya : Students</title>
<body>
<h3>Department of Computer Engineering, University of Peradeniya : Students</h3>
<ul>" > index.html


GITHUBNAME="gihanjayatilaka"
NAME="gihanj"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo $NAME "completed"

echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html


GITHUBNAME="Mabeesha"
NAME="mabeeshaw"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo $NAME "completed"

echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html

NAME="nuwanj"
rm -rf "./$NAME/"
git clone https://github.com/NuwanJ/my-site
mv my-site "$NAME"
echo $NAME "completed"

echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html

GITHUBNAME="SanojPunchihewa"
NAME="sanojp"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo $NAME "completed"

echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html

echo "	</ul></body></html>" >> index.html
