import React, {Component} from 'react';

class PostItem extends Component {
  constructor() {
    super();
  }

  render() {
    let post = this.props.post;

    return (
      <li style={{listStyleType: 'none'}}>
        <div>
          <p>{post.author}</p>
          <p>{post.content}</p>
          <button onClick={this.props.deletePost.bind(null, post.id)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default PostItem;