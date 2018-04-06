import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

class AppService {
  get(): void {
    console.log('get AppService');
  }
}

@Component({
  selector: 'app-root',
  template: `root`
})
export class AppComponent {
  constructor(private appService: AppService) {
    this.appService.get();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
