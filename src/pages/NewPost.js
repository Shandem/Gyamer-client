import React, { Component } from 'react';
import PostModel from '../models/post'
import '../components/PostCard.css';

class NewPost extends Component {
  state = {
    title: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    PostModel.create(this.state)
      .then(data => {
        this.props.history.push('/post')
      })
  }

  handleChange = (event) => {
    if (event.target.type !== "text") {
      this.setState({ completed: !this.state.completed })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>New Game</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title" 
              onChange={this.handleChange}
              value={this.state.title} />
          </div>
          <div className="form-input">
            <label htmlFor="body">body
                <textarea type="text" 
              name="body" 
              onChange={this.handleChange}
              value={this.state.body} />
            </label>
          </div>
         
          

          <input type="submit" value="Save!"/>
        </form>
      </div>
    );
  }
}

export default NewPost;
