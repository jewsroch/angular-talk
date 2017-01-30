import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ImageResource } from './interfaces';
import { InstagramService } from './services/instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Year in Review!';
  images: ImageResource[];
  instagramFetchSubscription: Subscription;

  // It would probably be better to store this kind of 'state' in a service, but for the demo this is fine.
  selectedImage: ImageResource;
  starredImages: any;

  constructor(private instagram: InstagramService) { }

  // Component Livecycle Events
  ngOnInit(): void {
    this.fetchImages();
  }

  ngOnDestroy(): void {
    this.instagramFetchSubscription.unsubscribe();
  }


  fetchImages(): void {
    // The instagramService fetch method returns an RxJS Observable.
    // We then 'subscribe' to the observable and use the response (or errors) as they get emitted.
    // The subscribe method returns a "subscripton" which can be saved to
    // unsubscribe in the ngOnDesctroy component lifecycle method.
    this.instagramFetchSubscription = this.instagram.fetch().subscribe(
      (data) => this.images = data,
      (error) => console.log(error)
    );
  }

  onImageSelection(imageIndex) {
    this.selectedImage = this.images[imageIndex];
  }

  onImageStarred(imageId) {
    const imageIndex = this.images.findIndex(i => i.id === imageId);
    this.images[imageIndex].starred = true;
  }
}
