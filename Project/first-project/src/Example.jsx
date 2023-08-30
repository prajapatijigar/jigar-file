import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Example = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            {/* <h2>example</h2> */}
            <Slider {...settings}>
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="img-fluid" alt="Wild Landscape" />
                </div>
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block" alt="Sunset Over the City" />
                </div>
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block" alt="Canyon at Nigh" />
                </div>
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block " alt="Cliff Above a Stormy Sea" />
                </div>
                {/* <div>
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block " alt="Wild Landscape" />
                </div>
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block" alt="Camera" />
                </div> */}
            </Slider>
        </div>
    );
};

export default Example;