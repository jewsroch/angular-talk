import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InstagramService } from './services/instagram.service';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { StarIconComponent } from './shared/star-icon-component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    StarIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
