import React, { Component } from 'react'
import PostModel from '../models/post'

import { Link, Redirect } from 'react-router-dom'
import PostCard from '../components/PostCard'

class PostList extends Component {
  constructor(props) {
    super(props);
  this.state ={
    posts: [],
    
  }
  
  
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PostModel.all().then(data => {
      this.setState({ posts: data.posts })
    })
  }
  // Need to test my voting calls needs to be a update call
  

  
 
 vote = (key, index, isUpvote) => {
    let posts = [...this.state.posts];
    let votes = posts[index].votes;
    
    if (isUpvote) {
      votes = parseInt(votes) + 1; 

      this.setState({votes: votes})
    } else {
      votes--;
    }
    let id = key;
    const url = `${process.env.REACT_APP_API_URL}/api/v1/post/${id}` || `http://localhost:3001/api/v1/post/${id}`
    fetch(`http://localhost:3001/api/v1/post/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, votes })
      
    })
      .then((res) => window.location.reload(true) )
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  };

  

  render() {
    let postList = this.state.posts.map((post, index) => {
      return (
      <PostCard  {...post} key={post._id}
                  index={index}
                  post={post}
                  vote={this.vote}
                  />

      )
    })

    return (
      <div>
        <h1>All posts</h1>
        { this.state.posts ? postList : 'Loading...' }
      </div>
    );
  }
}

export default PostList;
