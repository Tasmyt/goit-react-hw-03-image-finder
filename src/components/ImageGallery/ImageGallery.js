import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GetQuery } from '../apiImages';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { BsXLg } from 'react-icons/bs';
import { CloseModal } from './ImageGallery.styled';
import { ModalDiv } from '../Modal/Modal.styled';
import { Gallery } from './ImageGallery.styled';
import { Loading } from '../Loader/Loader.styled';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: Status.IDLE,
    total: 1,
    showModal: false,
    largeImageURL: null,
    tags: '',
  };

  onPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  largeModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.search;
    const nextSearch = this.props.search;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING, });
      // Роблю запит
      GetQuery(nextSearch, this.state.page)  
        // Шукаю абракадабру при запиті і прокидую помилку у catch
        .then(images =>
          {if (images.hits.length === 0) {
         return Promise.reject(new Error());
        }
          this.setState({
            images: [...images.hits],
            total: images.total,
            status: Status.RESOLVED,
            error: null
          })}
      )
        // Змінюю статус 
        .catch(error => this.setState({ error, status: Status.REJECTED }))
      
    }
  }

 
  render() {
    const { images, status, showModal, largeImageURL, tags } =
      this.state;

    if (status === 'idle') {
      return <Loading>Які зображення ви хочете знайти?</Loading>;
    }

    if (status === 'pending') {
      return <Loader />;
    }
    // Рендерю помилку
    if (status === 'rejected') {
      toast.error('Нажаль ми не змогли знайти такі зображення');
      
    }
    
    if (status === 'resolved')
      return (
        <>
          <Gallery>
            <ImageGalleryItem images={images} largeModal={this.largeModal} />
          </Gallery>
          {this.state.total / 12 > this.state.page && (
            <Button onPage={this.onPage}></Button>
          )}
          {showModal && (
            <Modal closeModal={this.largeModal}>
              <ModalDiv>
                <img src={largeImageURL} alt={tags} />
                <CloseModal type="button" onClick={this.largeModal}>
                  <BsXLg size="40" />
                </CloseModal>
              </ModalDiv>
            </Modal>
          )}
        </>
      );
  }
}

ImageGallery.protoTypes = {
  search: PropTypes.string.isRequired,
};

