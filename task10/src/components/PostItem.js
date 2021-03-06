import React from 'react';
import {connect} from 'react-redux';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.deletePost = props.deletePost.bind(null, props.post.id)
  }

  render() {
    let post = this.props.post;

    return (
      <li style={{listStyleType: 'none'}}>
        <div>
          <p>{post.author}</p>
          <p>{post.content}</p>
          <button onClick={this.deletePost}>Delete</button>
        </div>
      </li>
    );
  }
}

export default connect(
  state => ({
    posts: state
  })
)(PostItem);