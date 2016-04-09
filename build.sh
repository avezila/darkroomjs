#!/bin/bash

gulp build

cp build/darkroom.css ../ocr-translator/css
cp build/darkroom.js ../ocr-translator/js

exit 0
