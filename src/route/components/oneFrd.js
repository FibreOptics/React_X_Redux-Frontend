import React from 'react';
import moment from 'moment';
import '../css/Frd.css'

const Frd = props => (
  <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
      <h3>Prop Friend </h3>
        {//<h3>{props.author}</h3>//The text<ReactMarkdown source={props.children} />
        }
      </div>
      <div className="singleCommentButtons">
        <span className="time">{moment(props.timestamp).fromNow()}</span>
      </div>
    </div>
  </div>
);

export default Frd;