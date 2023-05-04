import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageHeaderComponent } from './home-page/home-page-header/home-page-header.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContainerComponent } from './shared/container/container.component';
import { DatePipe } from './timeline/timeline-item/date.pipe';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HomePageHeaderComponent,
    TimelineItemComponent,
    TimelineComponent,
    ContainerComponent,
    DatePipe,
    DynamicPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
