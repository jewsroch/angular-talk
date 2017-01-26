import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ImageDetails } from './image-details';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  @Input() image: any;
  @Output() imageStarred = new EventEmitter();
  model = new ImageDetails('Please enter a description');

  onStar(imageId): void {
    this.imageStarred.emit(imageId);
  }
}
