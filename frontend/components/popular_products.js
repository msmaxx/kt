import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Component} from "react";
import Slider from "react-slick";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'


function LeftNavButton(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleRight}
                color="#4C51BF"
                size="2x"
            />
        </div>
    );
}

function RightNavButton(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleLeft}
                color="#4C51BF"
                size="2x"
            />
        </div>
    );
}

export default class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            nextArrow: <LeftNavButton/>,
            prevArrow: <RightNavButton/>,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                        dots: true,
                    }
                }
            ]
        };
        return (
            <div className="container my-8 mx-auto sm: container px-8 py-2 mx-auto md: container py-2 mx-auto">
                <div>
                    <p className="p-1 m-1 text-2xl text-indigo-600">
                        Популярные товары
                    </p>
                    <Slider {...settings}>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover object-center"
                                     src="https://valgeklaar.ee/media/catalog/product/cache/3/thumbnail/960x/17f82f742ffe127f42dca9de82fb58b1/M/W/MWP22ZM_A_40135_5db7f6e5ce97b1.48846147_MWP22.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Apple
                                        AirPods Pro</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">299.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://i2.wp.com/buybest.pk/wp-content/uploads/2018/11/Iphone-X.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Apple
                                        iPhone X 64GB</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">899.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://valgeklaar.ee/media/catalog/product/cache/3/thumbnail/400x400/9df78eab33525d08d6e5fb8d27136e95/M/V/MVVK2RU_A_40268_5dcd6fda446fd9.13882051_MacBook_Pro_16-in_Pure_Front_Space_Gray_SCREEN.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Apple
                                        Macbook Pro 16"</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">1 399.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://www.multikeetja.ee/57061-large_default/apple-iphone-11-pro-max-256gb-midnight-green.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Apple
                                        iPhone 11 Pro Max 256GB</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">1 199.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://images.samsung.com/is/image/samsung/ru-galaxy-s10-lite-sm-g770fzwuser-prismwhite-Front-209736147?$PD_GALLERY_L_JPG$"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Samsung
                                        Galaxy S10 128GB</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">567.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://onoff.ee/images/items/76/3484662/640x426/2.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">SAMSUNG
                                        QE55Q60TAUXXH</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">699€</h1>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://onoff.ee/images/items/86/3410234/640x640/2.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">ASUS
                                        ZENBOOK UM431DA</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">659€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://www.ideal.ee/media/catalog/product/cache/5/image/620x620/9df78eab33525d08d6e5fb8d27136e95/M/M/MM222ZM_A_17941_5b2667bcb82ac7.35251167_iPad_20Pro_209.7_22_20Silicone_20Case_20_28Product_29_20Red1.jpg"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">iPad Pro
                                        9.7" Silicone Case</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">69.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://www.euronics.ee/UserFiles/Products/Images/231542-352770-medium.png"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">Повербанк
                                        SBS (5000 мАч)</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">9.99€</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                                <img className="w-full h-56 object-cover"
                                     src="https://www.euronics.ee/UserFiles/Products/Images/255696-390154-medium.png"/>
                                <div className="py-5 text-center">
                                    <a href="#" className="block text-base text-gray-700 hover:text-indigo-700">HP
                                        DeskJet 2710</a>
                                    <h1 className="text-indigo-700 font-bold text-lg md:text-xl">39.99€</h1>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}