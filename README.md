### Prerequisites:
- Node+6
- Andriod Studio
- vscode

### Ionic CLI:
1.) run the command line
```bash
$ sudo npm install -g ionic cordova
```

2.) change environmental variable "Path" 
```bash
add C:\Users\SMS-MT04\AppData\Roaming\npm
```

3.1) Add platform
```bash
ionic cordova platform android
```

3.2) Build andriod
```bash
ionic cordova build android
```

3.3) Emulate andriod 
```bash
ionic cordova emulate  android
```

4.) for ios
```bash
ionic upload *make sure your app has a app link on your account
download ionic view
login and test
```

5.) for browser
```bash
ionic serve
```

### storage:
```
cordova plugin add cordova-sqlite-storage --save
npm install localforage
```

### other technologies used:
```bash
 - firebase
 - rxjs and rxjs/observable
 - moment
```
