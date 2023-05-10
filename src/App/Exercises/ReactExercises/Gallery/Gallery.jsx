import { ImageSlider } from './ImageSlider';
import { GalleryImg } from './GalleryList';
import './styles.css';

export const InteractiveGallery = () => {
  return <ImageSlider GalleryImg={GalleryImg} />;
};
