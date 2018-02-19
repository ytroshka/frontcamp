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

  deletePost(id) {
    let items = this.state.posts.filter((post) => {
      return post.id !== id
    });

    this.setState({
      posts: items
    });
  }

  render() {
    return (
      <div>
        <PostList deletePost={this.deletePost.bind(this)} posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;