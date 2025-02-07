import React from 'react'
import Navbar from '../components/Navbar'
import Corousel from '../components/Corousel'
import Deals from '../components/Deals'
import Categories from '../components/Categories'
import ProductDetails from './ProductDetails'
import Footer from '../components/Footer'
import { ProductSlider } from '../components/ProductSlider'


const Home = () => {
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
    ]
    return (


        <div>
            <Navbar />
            <div className="w-full flex justify-center sm:gap-24 gap-4 py-4 text-black sm:text-lg text-xs border-y-2 transition font-inter">
                <a href="#deals">Deals Today</a>
                <a href="#trending">Trending Today</a>
                <a href="#categories">All Categories</a>
                <a href="#footer">Contact Us</a>
            </div>
            <Corousel />
            <div className='bg-gray-100'>
                <Deals />
            </div>
            <ProductSlider />
            <div className='w-full h-[40px]'></div>
            <hr />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home