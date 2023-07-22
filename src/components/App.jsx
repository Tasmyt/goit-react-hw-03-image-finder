import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ToastContainer,  } from 'react-toastify';
import {Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    search: '',
  };

  formSubmit = search => {
    this.setState({search});
}
  render() {
    return (
      <div>
        <Searchbar query={this.formSubmit} />
        
        <ImageGallery search={this.state.search} />
         
        <ToastContainer  />
      </div>
    );
  };
}
