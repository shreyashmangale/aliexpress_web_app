import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { collection, doc, setDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const ProductDetails = () => {
  const navigate = useNavigate();

  const { Description } = useParams(); // Use exact param name from route
  const decodedProductName = decodeURIComponent(Description).replace('----', '/'); // Decode here
//console.log(decodedProductName.replace('----', '/'))


  const categoryName = useSelector((state) => state.category);
//console.log(categoryName);

  // const location = useLocation();
  // console.log(location.pathname.split("/")[2].split("%20").join(" "));
  // const productName = location.pathname.split("/")[2].split("%20").join(" ");
  // console.log(productName)

  const products = useSelector((state) => state.products.products);
//console.log(products)


  useEffect(() => {
    const product = products.find((item) => item.Description === decodedProductName);
  //console.log(product)
    setProductDetails(product)
  }, [Description])



  const [relatedProducts, setRelatedProducts] = useState(products.slice(10, 100));

  const [productDetails, setProductDetails] = useState(null);


  const [selectedSize, setSelectedSize] = useState(null);

  // List of sizes
  const sizes = ["XXS", "XS", "SM", "MD", "LG", "XL", "XXL", "XXXL"];

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };


  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5, // Show 4 cards at a time
    slidesToScroll: 4,
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


  const [user, setUser] = useState(null);
//console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // No user is logged in
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up when the component is unmounted
  }, []);


  //Add to cart function
  const addToCart = async (item) => {
    if (user) {
        const userId = user.uid;
    
        try {
            const cartItemRef = doc(collection(db, "users", userId, "cartItems"));
            await setDoc(cartItemRef, {
                ...item, // Store the item details in Firestore
            });
          //console.log("Added to cart")
            toast.success("Added to Cart");
        } catch (error) {
          //console.error("Error adding to Cart: ", error);
            toast.error("Error adding to Cart");
        }
    } else {
        navigate('/login');
    }
};

  return (

    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      {/* <Sidebar /> */}
      {
        productDetails &&
        <div className='flex lg:flex-row flex-col lg:px-8 mb-12 font-cormorant font-semibold'>
          <div className='lg:w-[35%] lg:h-[550px]'>
            <img className='p-4 mx-auto h-full object-contain rounded-3xl' src={productDetails ? productDetails.Image : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt="product_image" />
          </div>
          <div className='lg:w-[65%] md:p-12 p-4'>
            <div className='flex flex-col gap-8'>
              <h1 className='text-4xl font-bold font-cormorant'>{productDetails.Description}</h1>
              <h2 className='text-xl font-semibold text-gray-600'>{productDetails.Brand}</h2>
              <p className='text-lg text-gray-600 font-semibold'>Experience top-quality and exceptional performance with our premium product. Designed with precision and durability, it offers reliability, functionality, and style to meet your everyday needs. Whether for personal or professional use, this product delivers outstanding value and satisfaction. Upgrade your experience today!</p>


              {
                productDetails.Tag && !productDetails.Tag.includes("Electronics" || "Watches" || "Mobiles") ?

                  <div className='flex items-center gap-4'>
                    <h4 className='font-semibold'>Size:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className={`size-box ${selectedSize === size ? "selected" : ""} border rounded-lg px-2 py-1 hover:bg-gray-700 hover:border-white hover:text-gray-200 transition duration-300 cursor-pointer`}
                          onClick={() => handleSizeClick(size)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>

                  :
                  <div></div>}
              {selectedSize &&
                <h3>Selected Size : {selectedSize}</h3>
              }
              <h3 className='text-2xl font-inter'>{productDetails.Price}</h3>

              <div className='w-full flex gap-10'>
                <button className='bg-black px-4 py-2 rounded-lg text-white'>Buy Now</button>
                <button className='px-4 py-2 rounded-lg border border-black' onClick={() => addToCart(productDetails)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      }

      <div className='w-full lg:mt-12 lg:px-16 px-2'>
        <h1 className='text-xl font-semibold font-inter mb-4'>Browse Related Products</h1>
        <div className='w-full h-full mx-auto'>

          <Slider {...settings}>
            {
              relatedProducts.slice(0, 10).map((item) => {
                return (

                  <div className='font-inter p-2 border shadow-lg rounded-lg flex flex-col justify-evenly w-full mx-auto h-full me-2'>
                    <img class="max-w-full mx-auto h-[120px] rounded-lg" src={item.Image} alt="product_image" />
                    <div className='px-4 mt-2'>
                      <Link to={`/details/${item.Description.replace(/\//g, "----")}`}>
                        <h1 className='font-semibold lg:text-xs md:text-sm'>{item.Description.slice(0, 50) + "..."}</h1>
                      </Link>
                      {/* <h4 className='text-gray-400 text-sm'>{item.Brand.slice(0, 50)}</h4> */}
                      <div className='flex justify-between items-center my-2'>
                        <p className='font-bold text-gray-600'>{item.Price}</p>
                        <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl ' onClick={() => addToCart(item)}><FontAwesomeIcon icon={faCartShopping} /> </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails