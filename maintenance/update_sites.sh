SITES_DIR="/home/admin/web/ce.pdn.ac.lk/public_html/sites"

git clone https://github.com/cepdnaclk/cepdnaclk.github.io.git $SITES_DIR/temp
cp -r $SITES_DIR/temp/sites/* $SITES_DIR
rm -rf $SITES_DIR/temp

echo "Updating student websites"
cd $SITES_DIR/students/
chmod 700 update.sh
# ./update.sh
echo "Finished Updating student websites"

echo "END OF PROGRAM"