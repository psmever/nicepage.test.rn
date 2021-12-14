#!/bin/sh

GREEN='\033[32m' # Green
CLEAR='\033[0m'  # Clear color and formatting

# React-native cache
echo "\n${GREEN}React-native cache${CLEAR}"
rm -rf $TMPDIR/react-*

# Metro bundler cache
echo "\n${GREEN}Metro bundler cache${CLEAR}"
rm -rf $TMPDIR/metro-*

# Watchman cache
echo "\n${GREEN}Watchman cache${CLEAR}"
watchman watch-del-all

# NPM modules
echo "\n${GREEN}NPM modules${CLEAR}"
rm -rf node_modules

# Yarn cache
echo "\n${GREEN}Yarn cache${CLEAR}"
yarn cache clean

# Yarn packages
echo "\n${GREEN}Yarn packages${CLEAR}"
yarn install

# NPM cache
echo "\n${GREEN}NPM cache${CLEAR}"
npm cache verify

# NPM Install
echo "\n${GREEN}NPM Install${CLEAR}"
npm install

# iOS build folder
echo "\n${GREEN}iOS build folder${CLEAR}"
rm -rf ios/build

# iOS pods folder
echo "\n${GREEN}iOS pods folder${CLEAR}"
rm -rf ios/pods

# Android build folder
echo "\n${GREEN}Android build folder${CLEAR}"
rm -rf android/build

# Android clean project
echo "\n${GREEN}Android clean project${CLEAR}"
cd android && ./gradlew clean
cd ..

# Pod packages
echo "\n${GREEN}Pod packages${CLEAR}"
cd ios
rm Podfile.lock
pod deintegrate
pod install --repo-update
cd ..

# yarn cache
echo "\n${GREEN}Yarn cache${CLEAR}"
yarn start --reset-cache
