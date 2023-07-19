import { LiImage, ItemImage } from './ImageGalleryItem.styled';

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