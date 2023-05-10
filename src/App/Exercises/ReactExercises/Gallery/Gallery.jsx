import { ImageSlider } from './ImageSlider';
import './styles.css';

export const InteractiveGallery = () => {
  const GalleryImg = [
    {
      title: 'Yosemite Park small Lake ',
      src: '/Image/one.jpg',
      alt: 'a lake with a mountain view',
    },
    {
      title: 'Yosemite Park small Lake ',
      src: '/Image/two.jpg',
      alt: 'a lake with a mountain view',
    },
    {
      title: 'Yosemite Park small Lake ',
      src: '/Image/three.jpg',
      alt: 'a lake with a mountain view',
    },
    {
      title: 'Yosemite Park small Lake ',
      src: '/Image/four.jpg',
      alt: 'a lake with a mountain view',
    },
    {
      title: 'Yosemite Park small Lake ',
      src: '/Image/five.jpg',
      alt: 'a lake with a mountain view',
    },
  ];

  return <ImageSlider GalleryImg={GalleryImg} />;
};
