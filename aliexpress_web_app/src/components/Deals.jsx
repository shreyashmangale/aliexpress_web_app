import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const Deals = () => {
    
    return (
        <div className='text-center lg:w-[80vw] mx-auto md:pt-20 pt-4 md:pb-12 pb-8' id='deals'>
            <h2 className='font-merriweather text-3xl font-bold mb-8'>Deals of the Day !!!</h2>
            <div className="deals flex flex-wrap gap-4 justify-around">

                <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                        <div className='h-[200px]'>
                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/m/y/m-st2-vebnor-original-imahfuabsgysawja.jpeg?q=70" alt="Image 1" />
                        </div>
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/k/i/s-st32-vebnor-original-imagu5zvfbhhhe4z.jpeg?q=70" alt="Image 4" />
                        </div>
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/s/p/m-ts-shirt1689-tanip-original-imagrf39sdkhdjcf.jpeg?q=70" alt="Image 3" />
                        </div>
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/i/6/30-01-jean-loose-black-nayak-fashion-original-imagvagjf9quxsbt.jpeg?q=70" alt="Image 2" />
                        </div>
                    </div>
                    <div className="p-5">
                        <Link to={`/products/${'menswear'}`}>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Men's Wear</h5>
                        </Link>
                        <p className='text-sm text-gray-500'>Shop the latest Men's Casual, Formal and Sports Wear from Trendy Brands</p>
                    </div>
                </div>


                <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2 ">
                        <div className='max-h-[200px]'>
                            <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/q/8/l-xf-2220-wine-xomantic-fashion-original-imagwf4hrb3hdagf.jpeg?q=70" alt="Image 1" />
                        </div>
                        {/* <div className='max-h-[200px]'> */}
                        <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/o/b/40-wsr-cruse-ts-lifestyle-original-imaghuzumfejh4rw.jpeg?q=70" alt="Image 1" />
                        {/* </div> */}
                        {/* <div className='max-h-[200px]'> */}
                        <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/y/w/s-402-colors-of-earth-original-imaguu6pf8g6tpyc.jpeg?q=70" alt="Image 1" />
                        {/* </div> */}
                        {/* <div className='max-h-[200px]'> */}
                        <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/3/m/w/xl-kl1252-berrylicious-original-imagv43thsk68zf9.jpeg?q=70" alt="Image 1" />
                        {/* </div> */}
                    </div>
                    <div className="p-5">
                        <Link to={`/products/${'womenswear'}`}>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Women's Wear</h5>
                        </Link>
                        <p className='text-sm text-gray-500'>Shop the latest Trendy Wear from Top Brands</p>
                    </div>
                </div>

                <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/1/1/f/0-6-months-waistcoat-1-year-ultrina-original-imagpf653wwrs4x6.jpeg?q=70" alt="Image 1" />
                        </div>
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/0/j/h/18-24-months-003-gunatit-original-imagysf3ujhz5qwg.jpeg?q=70" alt="Image 1" />
                        </div>
                        <div className='h-[200px]'>

                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dungaree-romper/i/h/y/6-12-months-dungaree-brown-1-brahmani-fashion-original-imaghb75mhd7ppjr.jpeg?q=70" alt="Image 1" />
                        </div>
                        <div className='h-[200px]'>
                            <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/f/5/c/1-2-years-locket-plazo-green-1-2y-htwentythree-original-imahfpqymvpgzays.jpeg?q=70" alt="Image 1" />
                        </div>
                    </div>
                    <div className="p-5">
                        <Link to={`/products/${'kidswear'}`}>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Kid's Wear</h5>
                        </Link>
                        <p className='text-sm text-gray-500'>Shop the latest Kid's Wear from Trendy Brands</p>
                    </div>
                </div>




            </div>

            
        </div>
    )
}

export default Deals