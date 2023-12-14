import React from 'react';
import '../css/main.css';
import AboutBlock from '../components/AboutBlock';

const About = () => {
  return (
    <div className='wrapper'>
      <h1>About</h1>
      <div className='content'>
        <h2 className='content_subtitle'>
          Welcome to <span style={{ 'color': 'red' }}>"Shah Shop"</span> — your go-to online store for unique finds! We are a team of enthusiasts united by a shared passion for quality goods and outstanding service.
        </h2>
        <AboutBlock
            title="Our World of Products:"
            content='"Max Shop" offers a diverse range of products, from stylish clothing and accessories to the latest technological innovations. We constantly update our catalog to meet the needs of even the most discerning shoppers.'
        />

        <AboutBlock
            title="Our Advantages:"
            content={[
                'Quality: We take pride in providing only high-quality products from trusted manufacturers.',
                'Convenience: Our customers matter to us, and we strive to create a user-friendly interface for a seamless online shopping experience.',
                'Fast Delivery: We value your time and offer prompt delivery, so you can enjoy your purchases as soon as possible.'
          ]}
        />
      </div>
    </div>
  );
};

export default About;
