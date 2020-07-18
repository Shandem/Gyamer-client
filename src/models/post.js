import axios from 'axios';
const url = `http://localhost:3001/api/v1`

//const url =`${process.env.REACT_APP_API_URL}/api/v1`|| `http://localhost:3001/api/v1`

class PostModel {
  static all = () => {
    return fetch(`${url}/post`).then(res => res.json())
  }

  static show = (postId) => {
    return fetch(`${url}/post/${postId}`).then(res => res.json())
  }

  static create = (postData) => {
    return fetch(`${url}/post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
  }
  static update = (post) => {
    let request = axios.put(`${url}/post/${post._id}`, post);
    return request;
    };
}

export default PostModel