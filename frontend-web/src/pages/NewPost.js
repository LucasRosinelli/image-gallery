import React, { Component } from 'react';
import api from '../services/api';

import './NewPost.css';

class NewPost extends Component {
  state = {
    imageUrl: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleImageChange = (evt) => {
    this.setState({
      imageUrl: evt.target.files[0]
    });
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = new FormData();
    data.append('imageUrl', this.state.imageUrl);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('post', data);

    this.props.history.push('/');
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input type="text" name="author" placeholder="Author"
          onChange={this.handleChange} value={this.state.author} />
        <input type="text" name="place" placeholder="Place"
          onChange={this.handleChange} value={this.state.place} />
        <input type="text" name="description" placeholder="Description"
          onChange={this.handleChange} value={this.state.description} />
        <input type="text" name="hashtags" placeholder="Hashtags"
          onChange={this.handleChange} value={this.state.hashtags} />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default NewPost;
