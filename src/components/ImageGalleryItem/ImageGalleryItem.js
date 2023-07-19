import { LiImage, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({images, largeModal}) => {
    
    return (
        <>
      {images.map(item => (
              <LiImage key={item.id} onClick={(e)=>{largeModal(item.largeImageURL, item.tags);}}>
                <ItemImage src={item.webformatURL} alt={item.tags} />
              </LiImage>
            ))}
    </>
    )
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired, 
  largeModal: PropTypes.func,
};