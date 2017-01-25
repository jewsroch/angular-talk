import { ImageResource } from './interfaces';
import { Component, OnInit } from '@angular/core';

import { InstagramService } from './services/instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Year in Review!';
  images: any;
  instagramFetchSubscription: any;
  selectedImage: ImageResource;
  starredImages: any;

  constructor(private instagram: InstagramService) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
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
