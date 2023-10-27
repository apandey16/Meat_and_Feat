# Eat&Greet
Coding Practices:
- Branch before making a change. NEVER edit or make changes on main directly
- Follow the ```merge``` steps within the git repo to merge into main
- Anytime changes are made and merged into main, run ```git pull --rebase``` in your local repo to safely update it

Dev Setup:
- Setup the stuff for React Native (like NodeJS, NPM, etc)
- To run the server go the the ```Eat_and_Greet``` folder and then run ```npx expo start```
    - If you want to run a local emulation:
        - ```npm run android```
        - ```npm run ios``` (MacOS only)
- To view the app server you can create a local emulation of the phone or download Expo Go and scan the QR code in the terminal
- To get the Web API key, downwolad the .env file in the Google Drive and add it to your local repo (the .env file will never be pushed becuase it is in the .gitignore)

Documentation:
- [React Native](https://reactnative.dev/docs/environment-setup)
- [Expo Go](https://docs.expo.dev)
