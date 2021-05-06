# cross-quizz
A Quasar Framework app

## Install the dependencies
```bash
yarn
```

# Configuration Android Studio
## For macOS
### install Jdk8, gradle and configuration Android Studio
```bash
brew install openjdk@8
brew install gradle
```
add Android SDK and Virtual Machine x86 in Android Studio
### acceptLicense
```bash
cd ~/Library/Android/sdk/tools/bin
./sdkmanager --licenses.
```
### open terminal add export (android_home, android_sdk_root and path) in bash_profile
```bash
open ~/.bash_profile
```
add this line :
```bash
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
export PATH=$PATH:$ANDROID_SDK_ROOT/tools; PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```
## For windows
### install Jdk8, gradle and configuration Android Studio
```bash
Go to the site : https://gradle.org/releases/ and download zip
Set environement variable GRADLE_HOME with PATH
Go tp the site https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html and download zip
Set environement java with openjdk 1.8
```
add Android SDK and Virtual Machine x86 in Android Studio
### acceptLicense
```bash
cd ~/%USERPROFILE%\AppData\Local/Android/sdk/tools/bin
./sdkmanager --licenses.
```
### open terminal and add export (android_home, android_sdk_root and path)
```bash
setx ANDROID_HOME "%USERPROFILE%\AppData\Local\Android\Sdk"
setx ANDROID_SDK_ROOT "%USERPROFILE%\AppData\Local\Android\Sdk"
setx path "%path%;%ANDROID_SDK_ROOT%\tools;%ANDROID_SDK_ROOT%\platform-tools;<gradle_path>\bin;"
```
# Script
### Start the app browser in development mode
```bash
yarn start
```

### Start the app electron in development mode
```bash
yarn electron
```

### Start the app mobile(ios) in development mode
```bash
yarn ios
```

### Start the app mobile(android) in development mode
```bash
yarn android
```

### Lint the files
```bash
yarn run lint
```

### Build the app browser no sepecify parameters or (electron, ios and android) specify mode with -m <type>
```bash
yarn run build
````

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
