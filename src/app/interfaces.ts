export interface ImageResource {
  id: string;
  images: ImageTypes;
  caption: Caption;
  tags: string[];
  starred?: boolean;
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
