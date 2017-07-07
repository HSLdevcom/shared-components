#!/usr/bin/env bash

# Copy over files that we want in the release
rm -rf build/
mkdir build
cp -r lib/ build/
cp package.json build/
sed -i '/[ ][ ]"main":[ ]"/c\  "main": "lib/index.js",' build/package.json
echo "##################################"
echo "Publish to npm."
echo "cd build && npm publish"
echo "##################################"
