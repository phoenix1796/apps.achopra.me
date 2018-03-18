#!/bin/sh
vue build index.vue
rm -rf docs
mv -fT dist/ docs/
sed -i 's/\/js/js/g' docs/index.html
sed -i 's/\/css/css/g' docs/index.html