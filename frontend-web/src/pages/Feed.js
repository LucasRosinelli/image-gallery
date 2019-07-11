import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span className="author">lucasrosinelli</span>
              <span className="place">Amsterdam, The Netherlands</span>
            </div>

            <img src={more} alt="More" />
          </header>

          <img src="https://ichef.bbci.co.uk/news/320/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg" alt="Amsterdam Central" />

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={like} alt="Like" />
            </div>

            <strong>5 likes</strong>

            <p>
              <span className="description">Amsterdam Central</span>
              <span className="hashtags">#europe #netherlands #amsterdam #amsterdamcentral</span>
              <time className="timestamp" dateTime="2019-06-30T22:20:29.577Z" title="June 30, 2019">June 30, 2019</time>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span className="author">lucasrosinelli</span>
              <span className="place">Amsterdam, The Netherlands</span>
            </div>

            <img src={more} alt="More" />
          </header>

          <img src="https://ichef.bbci.co.uk/news/320/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg" alt="Amsterdam Central" />

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={like} alt="Like" />
            </div>

            <strong>5 likes</strong>

            <p>
              <span className="description">Amsterdam Central</span>
              <span className="hashtags">#europe #netherlands #amsterdam #amsterdamcentral</span>
              <time className="timestamp" dateTime="2019-06-30T22:20:29.577Z" title="June 30, 2019">June 30, 2019</time>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
