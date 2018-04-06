import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

import { OtherModule } from './other.module';

class AppService {
  get(): void {
    console.log('get AppService');
  }
}

@Component({
  selector: 'app-root',
  template: `
  (root)
  <public-component></public-component>
  `
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
    BrowserModule,
    OtherModule // 导入OtherModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
