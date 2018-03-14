import React from 'react';
import {connect} from 'react-redux';

import posts from '../data/posts';
import PostList from './PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: posts
    }
  }

  render() {
    return (
      <div>
        <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state
  })
)(App);