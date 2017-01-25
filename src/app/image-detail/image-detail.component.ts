import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  @Input() image: any;
  @Output() imageStarred = new EventEmitter();

  onStar(imageId): void {
    this.imageStarred.emit(imageId);
  }
}
