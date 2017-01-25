import { ImageResource } from './../interfaces';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  @Input() images: ImageResource[];
  @Output() selectImage = new EventEmitter();

  onSelectImage(imageIndex): void {
    this.selectImage.emit(imageIndex);
  }
}
