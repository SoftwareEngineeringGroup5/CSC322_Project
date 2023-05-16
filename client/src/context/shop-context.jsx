import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import { SUGGESTEDCOFIGS } from "../pages/build/SuggestedConfigData";
import { CornersIn } from "phosphor-react";
import { userList } from "../pages/userList";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultBundle = () => {
  let bundle = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    bundle[i] = 0;
  }
  return bundle;
};

const userID = 2;

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [bundleItems, setBundleItems] = useState(getDefaultBundle());
  const [currentcat, setcurrentcat] = useState([""]);
  const [suggestionRating, setSuggestionRating] = useState(0);
  const [bundleMatch, setBundleMatch] = useState([]);
  const [allIDinBundle , setAllIDinBundle] = useState([0]);
  const [userName, setUserName] = useState(userList[userID].username);
  const [userType, setUserType] = useState(userList[userID].accountType);
  const [userBalance, setUserBalance] = useState(userList[userID].balance);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalBundleAmount = () => {
    let totalBundleAmount = 0;
    for (const item in bundleItems) {
      if (bundleItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalBundleAmount += bundleItems[item] * itemInfo.price;
      }
    }
    return totalBundleAmount;
  };

  const setBundleThroughSuggestions = (SuggestList,rating,bundledproducts) =>{
    //clear the current bundle
    //setBundleItems({});
    //replace the with the current distionary according to id of the review.
    setBundleItems(SuggestList);
    setSuggestionRating(rating);
    const catergorylist = [];

  for (let i = 0; i < PRODUCTS.length ; i++) {
      const product = PRODUCTS[i];
      if (bundledproducts.includes(product.id)) {
        catergorylist.push(product.category);
        //addBundleCategory(product.category);
      }
    }
    setcurrentcat([])
    setcurrentcat(catergorylist)

      // for (const id in bundledproducts){
      //   const findid = bundledproducts[id];
      //   const Sproduct = PRODUCTS.find(p => p.id === findid);
      //   const category = Sproduct.category;
      //   addBundleCategory(category);
      //   console.log(category);
      // }

  }


  const getAllKeysInBundle = () => {
    let allKeys = Object.entries(bundleItems)
  .filter(([key, value]) => value === 1)
  .map(([key, value]) => key);
  
  let IdInBundle = allKeys.map((item) => Number(item));
  setAllIDinBundle(IdInBundle)
  return IdInBundle;

};


  //Matching all the products to configeration to other products.
  // const addAllMatch = () => { 
  //   let IDArray = getAllKeysInBundle();
  //   for (let i = 0; i < IDArray.length; i++) {
  //     const product = PRODUCTS[i];
      
  //   }

// const findCommonMatches = () => {
//   const commonMatches = [];
//   const ID = getAllKeysInBundle()
//   // Iterate over each product in the PRODUCTS array
//   PRODUCTS.forEach(product => {
//     // Check if the product's ID is in the ID array
//     if (ID.includes(product.id)) {
//       // If the product's ID is in the ID array, add its match array to the commonMatches array
//       commonMatches.push(product.match);
//     }
//   });

//   // Use the reduce method to find the common elements in the match arrays
//   return commonMatches.reduce((accumulator, current) => {
//     // Use the every method to check if each element in the current array is also in the accumulator array
//     return accumulator.filter(x => current.includes(x));
//   });
  
//   setBundleMatch(commonMatches);

// };


function findCommonMatch() {
  const ID = getAllKeysInBundle();
  let commonMatch = PRODUCTS.filter((product) => ID.includes(product.id))
    .map((product) => product.match)
    .reduce((prev, curr) => {
      return prev.filter((val) => curr.includes(val));
    });

  return commonMatch;
}

  

  const addBundleCategory = (category) => {
    setcurrentcat([...currentcat,category])
  };

  const removeBundleCategory = (category) => {
    const filteredArray = currentcat.filter((value) => value !== category);
    setcurrentcat(filteredArray);
  };

  const resetBundleItem = () => {
    setcurrentcat([])
    setBundleItems(getDefaultBundle())
    setBundleMatch([]);
  };

  const addToBundle = (itemId) => {
    setBundleItems((prev) => ({ ...prev, [itemId]: 1}))    
  };

  const checkconsolelogs = () =>{
    console.log(bundleItems)
    console.log(allIDinBundle)
    console.log(bundleMatch)
    setBundleMatch(findCommonMatch());
  }

  
  const removeFromBundle = (itemId) => {
    setBundleItems((prev) => ({ ...prev, [itemId]: 0}))
    if (bundleMatch.length === 0) {
      setBundleMatch([]);
    }
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };


  const contextValue = {
    getDefaultBundle,
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    bundleItems,
    getTotalBundleAmount,
    addToBundle,
    removeFromBundle,
    addBundleCategory,
    currentcat,
    removeBundleCategory,
    resetBundleItem,
    setBundleThroughSuggestions,
    suggestionRating,
    bundleMatch,
    checkconsolelogs,
    userName,
    setUserName,
    userType,
    setUserType,
    userBalance,
    setUserBalance
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
