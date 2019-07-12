import React, { Component } from 'react';
import io from 'socket.io-client';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';

class Feed extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('post');

    this.setState({ posts: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      this.setState({
        feed: [newPost, ...this.state.feed]
      });
    });
    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post => post._id === likedPost._id ? likedPost : post)
      });
    });
  }

  likePost = (id) => {
    api.post(`/post/${id}/like`);
  }

  render() {
    return (
      <section id="post-list">
        { this.state.posts.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span className="author">{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="More" />
            </header>

            <img src={`http://localhost:3333/files/${post.imageUrl}`} alt={post.description} />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.likePost(post._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>

              <strong>{this.getLikesText(post.likes)}</strong>

              <p>
                <span className="description">{post.description}</span>
                <span className="hashtags">{post.hashtags}</span>
                <time className="timestamp" dateTime={post.createdAt} title={post.createdAt}>{post.createdAt}</time>
              </p>
            </footer>
          </article>
        )) }
      </section>
    );
  }

  getLikesText(likes) {
    if (likes > 1) {
      return `${likes} likes`;
    }
    if (likes === 1) {
      return '1 like';
    }

    return 'No likes yet';
  }
}

export default Feed;
