import ImageGalleryItem from '../ImageGalleryItem';
import { StyledGallery, GalleryItem } from './ImageGallery.styled';

export default function ImageGallery({ data }) {
  return (
    <StyledGallery>
      {data.map(movie => {
        return (
          <GalleryItem key={movie.id}>
            <ImageGalleryItem movie={movie} />
          </GalleryItem>
        );
      })}
    </StyledGallery>
  );
}
