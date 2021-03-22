Installation:


Download the app
Click on the Green Code button, then choose Download ZIP.

Start a terminal window
Navigate to the project folder (commentary)
if you have yarn installed - type the following:

rm -rf node_modules && yarn

Or
If you have npm installed - type the following
npm install

basically this will create the missing node_modules folder and download and install all the packages outlined in the package.json dependency list.

It is customary not to check in the node_module folder as it is too large.

after install you can run the android app by typing the following:

npx react-native run-android

(make sure you have setup your environment based on the the documentation in the link below:
https://reactnative.dev/docs/environment-setup
)

To launch iOS app on the simulator

from the project folder type the following

cd ios          - click enter    -  takes you into the ios folder
pod install     - click enter    -  installs ios pods needed to launch the ios app
cd ..           - click enter    -  takes you back up to the project folder

launch ios
npx react-native run-ios
