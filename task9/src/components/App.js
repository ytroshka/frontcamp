import React, {Component} from 'react';
import PostList from './PostList';
import posts from '../../data/posts.json';

class App extends Component {
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

export default App;