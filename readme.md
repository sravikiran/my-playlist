npx ng add @ionic/angular
ionic init
ionic capacitor run android --project=my-playlists
ionic start ionic-trial tabs --capacitor
ionic integrations enable capacitor
ionic build --project=my-playlists --prod
npx cap copy
npx cap add android
npx cap open android -- to open the app on an emulator
ionic capacitor build android --project=my-playlists --prod


Before testing the app on phone:
Build => Build app
Then copy the apk file from the `android\app\build\outputs\apk\debug` folder, paste it on phone and install it