GITHUBNAME="gihanjayatilaka"
NAME="gihanj"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo $NAME "completed"


GITHUBNAME="Mabeesha"
NAME="mabeeshaw"
rm -rf "./$NAME/"
git clone "https://github.com/$GITHUBNAME/$GITHUBNAME.github.io.git"
mv "$GITHUBNAME.github.io" "$NAME"
echo $NAME "completed"


NAME="nuwanj"
rm -rf "./$NAME/"
git clone https://github.com/NuwanJ/my-site
mv my-site "$NAME"
echo $NAME "completed"
