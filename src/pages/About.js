import React from 'react'
import '../css/main.css'

function About() {
  return (
    <div className='wrapper'>
        <header>
            <h1>About</h1>
        </header>
        <br />
        <div className='content'>
            <h2 className='content_subtitle'>
                Welcome to <span style={{'color': 'red'}}>"Shah Shop"</span> — your go-to online store for unique finds! We are a team of enthusiasts united by a shared passion for quality goods and outstanding service.
            </h2>
            <div className='about_block'>
                <h3 className='about_title'>
                    Our World of Products:
                </h3>
                <p className='about_p'>
                    "Max Shop" offers a diverse range of products, from stylish clothing and accessories to the latest technological innovations. We constantly update our catalog to meet the needs of even the most discerning shoppers.
                </p>
            </div>
            <div className='about_block'>
                <h3 className='about_title'>
                    Our Advantages:
                </h3>
                <p className='about_p'>Quality: We take pride in providing only high-quality products from trusted manufacturers.</p>
                <p className='about_p'>Convenience: Our customers matter to us, and we strive to create a user-friendly interface for a seamless online shopping experience.</p>
                <p className='about_p'>Fast Delivery: We value your time and offer prompt delivery, so you can enjoy your purchases as soon as possible.</p>
            </div>
            <div className='about_block'>
                <h3 className='about_title'>
                    Payment and Delivery:
                </h3>
                <p className='about_p'>
                    "Max Shop" offers a diverse range of products, from stylish clothing and accessories to the latest technological innovations. We constantly update our catalog to meet the needs of even the most discerning shoppers.
                </p>
            </div>
            <div className='about_block'>
                <h3 className='about_title'>
                    Connect with Us:
                </h3>
                <p className='about_p'>Our responsive customer support is ready to assist you at any time. We value your feedback and aim to make your interaction with "Max Shop" enjoyable and hassle-free.</p>
                <p className='about_p'>Choose "Max Shop" — where quality meets convenience! Thank you for choosing us, and we look forward to welcoming you back to our virtual store.</p>
            </div>
        </div>
    </div>
  )
}

export default About