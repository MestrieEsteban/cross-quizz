# cross-quizz
A Quasar Framework app

## Install the dependencies
```bash
yarn
```

# Configuration Android Studio
## For macOS
### Install Jdk8, gradle and configuration Android Studio
```bash
brew tap adoptopenjdk/openjdk
brew install adoptopenjdk8
brew install gradle
```
Add Android SDK and Virtual Machine x86 in Android Studio
### AcceptLicense
```bash
cd ~/Library/Android/sdk/tools/bin
./sdkmanager --licenses
```
### Open terminal add export (android_home, android_sdk_root and path) in zshrc
```bash
open ~/.zshrc
```
Add this line :
```bash
#version
export JAVA_HOME_8=$(/usr/libexec/java_home -v1.8)
export JAVA_HOME=$JAVA_HOME_8
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
export PATH=$PATH:$ANDROID_SDK_ROOT/tools; PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

```
## For windows
### Install Jdk8, gradle and configuration Android Studio
Go to the site [https://gradle.org/releases], select the current version and extract zip\
Set environment variable GRADLE_HOME with PATH\
Go to the site [https://github.com/AdoptOpenJDK/openjdk8-binaries/releases], click with OpenJDK<version>-jdk_x64_windows_hotspot_<version>.msi and execute file\
Set environment variable JAVA_HOME with PATH\
Add Android SDK and Virtual Machine x86 in Android Studio
### AcceptLicense
```bash
cd ~/%USERPROFILE%\AppData\Local/Android/sdk/tools/bin
./sdkmanager --licenses
```
### Open terminal and add export (android_home, android_sdk_root and path)
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

### Build the app browser no specify parameters or (electron, ios and android) specify mode with -m <type>
```bash
yarn run build
````

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
