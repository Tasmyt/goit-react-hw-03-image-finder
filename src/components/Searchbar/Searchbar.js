import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  nameSeach = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
    };
    
  nameQuery = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') { toast('Що шукати?');
    return;
  }
      this.props.query(this.state.search);
      this.setState({ search: '' });
    }
  render() {
    return (
      <Form onSubmit={this.nameQuery}>
        <Input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.nameSeach}
        />
        <button type="submit">
          <BiSearchAlt2 size="20" />
        </button>
      </Form>
    );
  }
}


Searchbar.protoTypes = {
  query: PropTypes.func.isRequired
}