import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {searchData} from '../database/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { collection, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { setProducts } from '../redux/features/productSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
    const navigate = useNavigate();

    const {searchedName} = useParams();
  //console.log(searchedName);
    
    const dispatch = useDispatch();

    const [searchedProducts, setSearchedProducts] = useState();
    useEffect(() => {
        // Function to handle the search operation
        const searchFromDatabase = async () => {
          if (!searchedName.trim()) {
            // If search query is empty or contains only whitespace, clear the search results
            setSearchedProducts([]);
            return;
          }
    
          // Filter the data based on the searched term
          const filteredProducts = searchData.filter(item => 
            item.Description.toLowerCase().includes(searchedName.toLowerCase())
          );
          setSearchedProducts(filteredProducts.slice(1,30));
          dispatch(setProducts(filteredProducts.slice(0, 100)));
        };
    
        searchFromDatabase(); // Call the async function
    
      }, [searchedName, searchData]); // Only run this effect when `searchedName` or `searchData` changes
    

  //console.log(searchedProducts)


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
            <Navbar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex'>
                <Sidebar />
                <div class="p-4 md:ml-56">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            searchedProducts ? searchedProducts.map(item => {
                                return (
                                    <div className='font-inter p-2 shadow-lg rounded-lg flex flex-col justify-evenly w-[90%] mx-auto h-full'>
                                        <img class="max-w-[90%] mx-auto h-[200px] rounded-lg" src={item.Image} alt="product_image" />
                                        <div className='px-4 mt-2'>
                                            <Link to={`/details/${item.Description.replace(/\//g, "----")}`}>
                                                <h1 className='font-semibold lg:text-regular md:text-md'>{item.Description.slice(0, 50) + "..."}</h1>
                                            </Link>
                                            <h4 className='text-gray-400 text-sm'>{item.Brand ? item.Brand.slice(0, 50) : ""}</h4>
                                            <div className='flex justify-between items-center my-2'>
                                                <p className='font-bold text-gray-600'>{item.Price}</p>
                                                <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl ' onClick={() => addToCart(item)}><FontAwesomeIcon icon={faCartShopping} /> </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) :
                                <div className='flex items-center justify-center'>
                                    <h1>Loading data</h1>
                                </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search