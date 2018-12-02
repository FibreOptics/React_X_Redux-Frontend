import React from 'react'
import Frd from './oneFrd'

const Frdlist = (props) => {
  const frdlist = props.data.map(data => (
    <Frd
      key={data._id}
      id={data._id}
      timestamp={data.updatedAt}
      chat={props.chat}
    >
      {//comment.text
      }
    </Frd>
  ));
  return (
    <div>
      { frdlist }
    </div>
  );
};

Frdlist.defaultProps = {
  data: [{
    _id:'id14',
    timestamp:1543768939,

  }],
};

export default Frdlist;