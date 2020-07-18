import React from 'react';
import './PostCard.css';

const PostCard = (props) => {
console.log(props.post)
    return (
        <div className="PostCard">
        <h3>{ props.title}</h3> 
        <p>{props.body}</p>
        <span className="xbox">{props.xboxUn}</span> 
        <span className="nes">{props.nesUn}</span> 
        <span className="ps">{props.psUn}</span>
        <p>{ props.votes }</p>
        <button className="btn btn-sm btn-success Upvote" onClick={() => props.vote(props.post._id, props.index, true)} >UpVote</button> 
        <button className="btn btn-sm btn-danger downvote" onClick={() => props.vote(props.post._id, props.index, false)}>DownVote</button>
        </div>
    );
}

export default PostCard;
