
> **This app has been built with Ionic 3.9.2 (Angular 5.0.3). For the time being, this app will only be updated with bug fixes and vulnerability patches.**

# Rune2Word

Rune2Word is a mobile application that allows *Diablo II: Lord of Destruction* players to browse and find Rune Words. Rune Words can be filtered by item type (and by weapon class), number of sockets, and applicable runes.

## Development

This application was developed using [Ionic](https://ionicframework.com/).

All of the data for this application is static in an exported TypeScript variable (found in `src/data/runeword-data.ts`). Because the game was released in 2001, and the data has not changed in a significant amount of time, I found this approach more feasible than creating an API.

## How to Set Up and Run Locally with Ionic
### Prerequisites
+ Make sure [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) are installed and configured on your machine.

+ Use `npm` to install [Ionic](https://ionicframework.com/) with the command:
``` bash
npm install -g @ionic/cli
```
Refer to [Ionic's getting started guide](https://ionicframework.com/getting-started/).

### Steps
1. Clone this repository to a location of your choosing with:
``` bash
git clone https://github.com/abaran30/rune2word.git
```

2. Inside the cloned directory, run:
``` bash
npm install
```

3. Once the npm packages have been installed, run:
``` bash
ionic serve
```

4. The application will start locally and your browser will open up to http://localhost:8100. If all went well, you will be in Rune2Word!

## Unit Testing

Unit testing is configured to use [Karma](https://karma-runner.github.io/latest/index.html) and [Jasmine](https://jasmine.github.io/), and has been set up with the help of this [ionic-unit-testing-example project](https://github.com/ionic-team/ionic-unit-testing-example).

To run the unit tests, run:
``` bash
npm test
```

The unit testing is configured to generate an HTML coverage report. This report can be found in the `coverage` directory after unit tests have been run. Open `coverage/index.html` with your favorite browser, and you will see a detailed report of unit test coverage for this app.

## Downloading the App

Rune2Word is available to download from [Google Play](https://play.google.com/store/apps/details?id=io.ionic.rune2word).

## Disclaimer

Rune2Word isn’t endorsed by Blizzard Entertainment and doesn’t reflect the views or opinions of Blizzard Entertainment or anyone officially involved in producing or managing Diablo II: Lord of Destruction. Diablo II: Lord of Destruction and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. Diablo II: Lord of Destruction © Blizzard Entertainment, Inc.
