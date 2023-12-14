import React from 'react';

const AboutBlock = ({ title, content }) => {
  return (
    <div className='about_block'>
      <h3 className='about_title'>{title}</h3>
      {typeof content === 'string' ? <p className='about_p'>{content}</p> : content.map((paragraph, index) => <p key={index} className='about_p'>{paragraph}</p>)}
    </div>
  );
};

export default AboutBlock;