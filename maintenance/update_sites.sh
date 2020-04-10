SITES_DIR="/home/admin/web/ce.pdn.ac.lk/public_html/sites"

git clone https://github.com/cepdnaclk/cepdnaclk.github.io.git $SITES_DIR/temp
cp -r $SITES_DIR/temp/sites/* $SITES_DIR
rm -rf $SITES_DIR/temp
