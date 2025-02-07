import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Cart = () => {
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

    const [cartItems, setCartItems] = useState();



    useEffect(() => {
        const fetchCartData = async () => {
            try {
                if (user && user.uid) {
                    const cartItemsRef = collection(db, "users", user.uid, "cartItems");
                    const querySnapshot = await getDocs(cartItemsRef);
                    const cartItems = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                  //console.log(cartItems);
                    setCartItems(cartItems);
                } else {
                  //console.log("User is not authenticated.");
                }
            } catch (error) {
              //console.error("Error fetching cartItems: ", error);
            }
        };

        // Only fetch data if user exists
        if (user) {
            fetchCartData();
        }
    }, [user]); // Dependency on 'user' to refetch data if it changes

  //console.log(cartItems)


    // Calculate total price
    const totalPrice = cartItems?.reduce((acc, item) => {
        const price = item.Price.slice(1);  // Removing the dollar sign
        const numericPrice = Number(price); // Convert the string to a number
    
        if (!isNaN(numericPrice)) { // Check if the conversion was successful
            acc += numericPrice;
        }
    
        return acc;
    }, 0);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">

                {
                    user && cartItems ?
                        <div className="max-w-7xl mx-auto">
                            {/* Title Section */}
                            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
                            <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                                {/* Cart Items List */}
                                <div className="space-y-6">
                                    {cartItems.length ? cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-lg shadow-md flex p-4 items-center space-x-6 hover:shadow-lg transition-shadow duration-200"
                                        >
                                            <img
                                                src={item.Image}
                                                alt="product_image"
                                                className="w-24 h-24 object-cover rounded-md"
                                            />
                                            <div className="flex-1">
                                                <h2 className="text-xl font-semibold text-gray-800">{item.Description}</h2>
                                                <p className="text-gray-600 mt-1">{item.Price}</p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
                                                    -
                                                </button>
                                                <span>{item.quantity || 1}</span>
                                                <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    )) :
                                    <h1>No Items in Cart</h1>
                                }
                                </div>

                                {/* Checkout Section */}
                                <div className="bg-white rounded-lg shadow-md p-6 sticky top-10 h-fit">
                                    <h3 className="text-xl font-semibold text-gray-800">Summary</h3>
                                    <div className="mt-4 space-y-3">
                                        <div className="flex justify-between text-gray-700">
                                            <span>Subtotal</span>
                                            <span>₹{totalPrice}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-700">
                                            <span>Shipping</span>
                                            <span>₹5.00</span>
                                        </div>
                                        <div className="flex justify-between font-semibold text-gray-900">
                                            <span>Total</span>
                                            <span>₹{(totalPrice + 5).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700 transition-colors">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div> :
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-3xl font-bold text-gray-900">Sign In to See You Cart Items</h1>
                        </div>
                }
            </div>
        </>
    );
};

export default Cart;
