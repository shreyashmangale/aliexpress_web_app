import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export const ProductSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        prevArrow: (
            <button className="slick-prev slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {"<"}
            </button>
        ),
        nextArrow: (
            <button className="slick-next slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {">"}
            </button>
        ),
    };

    const products = [
        {
            Brand: "Yash Gallery",
            Description: "Women Printed Cotton Blend Anarkali Kurta",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/b/v/3xl-1189plykmaroon-akiko-original-imagxrnkn6z3xmmy.jpeg?q=70",
            Price: "₹974",
            Unnamed: 276
        },
        {
            Brand: "VredeVogel",
            Description: "Women Cotton Silk Kurta Pant Dupatta Set",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/g/d/xxl-vv-9424-vredevogel-original-imahy9dcgesxnyud.jpeg?q=70",
            Price: "₹709",
            Unnamed: 277
        },
        {
            Brand: "ANNU PARIDHAN",
            Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/w/v/l-anu2167-annu-paridhan-original-imagtyywa53ca3zu.jpeg?q=70",
            Price: "₹699",
            Unnamed: 278
        },
        {
            Brand: "PFFASHION",
            Description: "Women Printed Pure Cotton Straight Kurta",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/s/k/s-top-23-pf-fashion-original-imagzzfbbweyzpnd.jpeg?q=70",
            Price: "₹239",
            Unnamed: 279
        },
        {
            Brand: "PFFASHION",
            Description: "Women Printed Pure Cotton Straight Kurta",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/u/r/s-top-19-pf-fashion-original-imagzm99ckhyahxb.jpeg?q=70",
            Price: "₹239",
            Unnamed: 280
        },
        {
            Brand: "VredeVogel",
            Description: "Women Silk Blend Kurta Pant Dupatta Set",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/r/z/xxl-vv-9211-vredevogel-original-imahyg2uhtxtqnzj.jpeg?q=70",
            Price: "₹799",
            Unnamed: 281
        }
    ];

    var settings = {
        dots: false,
    infinite: true,
    speed: 2000, // Reduce speed for smoother transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Avoid setting it to 0
    cssEase: "ease-in-out", // Better smooth transition
    pauseOnHover: true, // Prevent lag when hovered
        prevArrow: (
            <button className="slick-prev slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {"<"}
            </button>
        ),
        nextArrow: (
            <button className="slick-next slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {">"}
            </button>
        ),
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2, // Show only 1 slide
                },
            },
        ]
    };
    return (
        <div className="w-full px-8 mx-auto my-12" id='trending'>
            <h2 className='font-merriweather text-3xl font-bold mb-8 text-center'>Trending Products</h2>
            <Slider {...settings}>
                {
                    products.slice(0, 10).map((item) => {
                        return (

                            <div className='font-inter p-2 border shadow-lg rounded-lg flex flex-col justify-evenly w-full mx-auto h-full'>
                                <img class="max-w-full mx-auto h-[120px] rounded-lg" src={item.Image} alt="product_image" />
                                <div className='md:px-4 mt-2'>
                                    {/* <Link to={`/details/${item.Description.replace(/\//g, "----")}`}> */}
                                        <h1 className='font-semibold lg:text-md text-xs'>{item.Description.slice(0, 50) + "..."}</h1>
                                    {/* </Link> */}
                                    {/* <h4 className='text-gray-400 text-sm'>{item.Brand.slice(0, 50)}</h4> */}
                                    <div className='flex justify-between items-center my-2'>
                                        <p className='font-bold text-gray-600'>{item.Price}</p>
                                        {/* <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl '><FontAwesomeIcon icon={faCartShopping} /> </button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
