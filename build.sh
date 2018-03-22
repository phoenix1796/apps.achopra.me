#!/bin/sh
vue build index.vue
rm -rf docs
mv -fT dist/ docs/
#Replace absolute path with relative for hosting
sed -i 's/\/js/js/g' docs/index.html
sed -i 's/\/css/css/g' docs/index.html
sed -i 's/\/img/..\/img/g' docs/css/*.css
#Change title of the App
sed -i "s/Vue CLI App/AC\'s Apps/g" docs/index.html
git add docs
exit