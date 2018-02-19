import React, {Component} from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      author: '',
      newAuthor: '',
      newContent: ''
    }
  }

  filterPosts(e) {
    e.stopPropagation();
    e.preventDefault();

    this.setState({author: e.target.value});
  }

  handleAuthorChange(e) {
    this.setState({newAuthor: e.target.value});
  }

  handleContentChange(e) {
    this.setState({newContent: e.target.value});
  }

  addPost(e) {
    e.stopPropagation();
    e.preventDefault();

    if (this.state.newAuthor && this.state.newContent) {
      let post = {
        author: this.state.newAuthor,
        content: this.state.newContent,
        id: Date.now()
      };

      this.props.posts.push(post);
      this.setState({
        newAuthor: '',
        newContent: ''
      });
    }
  }

  render() {
    let posts = this.props.posts;
    let unique = [...new Set(posts.map(item => item.author))];

    return (
      <div>
        <form onSubmit={this.addPost.bind(this)}>
          <input type='text' placeholder='author' value={this.state.newAuthor}
                 onChange={this.handleAuthorChange.bind(this)}/>
          <input type='text' placeholder='content' value={this.state.newContent}
                 onChange={this.handleContentChange.bind(this)}/>
          <button>Add</button>
        </form>
        <ul style={{paddingLeft: 0}}>
          {
            posts.filter((post) => {
              if (this.state.author === '') {
                return true;
              }
              return post.author === this.state.author
            }).map((post) => {
              return (<PostItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
            })
          }
        </ul>
        <select onChange={this.filterPosts.bind(this)}>
          <option></option>
          {unique.map((index) => (
            <option key={index}>{index}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default PostList;