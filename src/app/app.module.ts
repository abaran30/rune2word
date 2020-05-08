import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { RuneWordsPage } from '../pages/rune-words/rune-words';
import { FilterPopoverPage } from '../pages/filter-popover/filter-popover';
import { ItemModalPage } from '../pages/item-modal/item-modal';
import { AboutPage } from '../pages/about/about';
import { RuneWordDataService } from '../data/runeword-data.service';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    RuneWordsPage,
    FilterPopoverPage,
    ItemModalPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RuneWordsPage,
    FilterPopoverPage,
    ItemModalPage,
    AboutPage
  ],
  providers: [
    RuneWordDataService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
