import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../../assets/img3.png";
import img3 from "../../../assets/img4.jpg";
import img4 from "../../../assets/img5.png";
import img5 from "../../../assets/img6.png";
import img6 from "../../../assets/img7.jpg";
import "./Services.css";

const Services = () => {

    const img=[img2,img3,img4,img5,img6];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
            <h1 className='heading'>Services</h1>

            <section className='services'>
                <Slider {...settings}>


                    {
                        img.map((images)=>{

                            return(
                                <div>
                                    <img src={images} alt='uyg'></img>
                                </div>
                            )
                        })
                    }
                    {/* <div>
                        <img src={img2} alt='img2' />
                    </div>
                    <div>
                        <img src={img3} alt='img3' />
                    </div>
                    <div>
                        <img src={img4} alt='img4' />
                    </div>
                    <div>
                        <img src={img5} alt='img5' />
                    </div>
                    <div>
                        <img src={img6} alt='img6' />
                    </div> */}
                </Slider>
            </section>
        </>
    )
}

export default Services;
