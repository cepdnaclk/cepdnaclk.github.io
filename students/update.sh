rm index.html


echo "<html>
<title>Department of Computer Engineering, University of Peradeniya : Students</title>
<body>
<h3>Department of Computer Engineering, University of Peradeniya : Students</h3>
<ul>" > index.html


GITHUBNAME="chandimab"
NAME="chandimab"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"



GITHUBNAME="hiruna72"
NAME="hirunas"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"



GITHUBNAME="HishanIndrajith"
NAME="hishana"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"




GITHUBNAME="gihanjayatilaka"
NAME="gihanj"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"


#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
#		The entries below are not of the generic format
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
GITHUBNAME="Mabeesha"
NAME="mabeeshaw"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
cd "$GITHUBNAME.github.io"
git checkout 0d97480
cd ../
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"





NAME="nuwanj"
rm -rf "./$NAME/"
git clone https://github.com/NuwanJ/my-site.git
mv my-site "$NAME"
echo "<li><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a></li>" >> index.html
echo $NAME "completed"


GITHUBNAME="SanojPunchihewa"
NAME="sanojp"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo "<li><strike><a href=\"https://tesla.ce.pdn.ac.lk/students/$NAME/\">$NAME</a><strike></strike></li>" >> index.html
echo $NAME "completed"












echo "	</ul></body></html>" >> index.html
