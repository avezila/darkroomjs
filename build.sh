#!/bin/bash

gulp build

cp build/darkroom.css /home/ozmartian/Projects/ocr-translator/css
cp build/darkroom.js /home/ozmartian/Projects/ocr-translator/js

exit 0
