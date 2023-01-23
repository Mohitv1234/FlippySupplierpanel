import React from 'react';
import "../Home.css";
const Query = ({paragraph , heading}) => {
  return (
    <di className="container" >
      <p className='paragraph' >
        {paragraph}
      </p>
      <h1 className='heading' >{heading}</h1>
    </di>
  )
}

export default Query;
