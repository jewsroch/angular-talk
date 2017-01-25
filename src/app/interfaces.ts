export interface ImageResource {
  images: ImageTypes;
  caption: Caption;
  tags: string[];
}

interface ImageTypes {
  thumbnail: Image;
  standard_resolution: Image;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Caption {
  text: string;
}
