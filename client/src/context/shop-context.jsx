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

const getDefaultWishlist = () => {
  let wishlist = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    wishlist[i] = 0;
  }
  return wishlist;
}

const userID = 2;

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [bundleItems, setBundleItems] = useState(getDefaultBundle()); // {1:0,2:0}
  const [wishlist, setWishlist] =useState(getDefaultWishlist())
  const [currentcat, setcurrentcat] = useState([]); //["Motherboard",CPU]
  const [suggestionRating, setSuggestionRating] = useState(0);
  const [bundleMatch, setBundleMatch] = useState([]); //[1,2,3,4]
  const [allIDinBundle , setAllIDinBundle] = useState([]);
  const [userName, setUserName] = useState(userList[userID].username);
  const [userType, setUserType] = useState(userList[userID].accountType);
  const [userBalance, setUserBalance] = useState(userList[userID].balance);
  const [userWarnings, setUserWarnings] = useState(userList[userID].warnings);
  const [userPraises, setUserPraises] = useState(userList[userID].praises);

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

  const setBundleThroughSuggestions = (PreSelectedBundle) =>{
    PreSelectedBundle.forEach((id) => {
      addToBundle(id);
    });
  }


const getAllKeysInBundle = () => {
  const keysWithOneValue = Object.keys(bundleItems)
                            .filter(key => bundleItems[key] === 1)
                            .map(key => parseInt(key));
      return keysWithOneValue;
};


function findCommonMatches() {
  const MatchID = getAllKeysInBundle();
  if (MatchID.length === 1) {
    const match = PRODUCTS.find((p) => p.id === MatchID[0]);
    const commonElements = match.match;
    return commonElements;
  }

  const commonMatches = [];

  MatchID.forEach((id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) {
      commonMatches.push(...product.match);
    }
  });

  const commonElements = commonMatches.filter((match, index) => {
    return commonMatches.indexOf(match) === index && commonMatches.lastIndexOf(match) !== index;
  });

  return commonElements;
}

  const addBundleCategory = (id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    const category = product.category;
    setcurrentcat([...currentcat,category])
  };

  const removeBundleCategory = (id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    const category = product.category;
    const filteredArray = currentcat.filter((value) => value !== category);
    setcurrentcat(filteredArray);
  };

  const resetBundleItem = () => {
    setcurrentcat([])
    setBundleItems(getDefaultBundle())
    setBundleMatch([]);
    setAllIDinBundle([]);
  };



  const addToBundle = (itemId) => {
    console.log(allIDinBundle)
    if (allIDinBundle.includes(itemId)){
      return
    }else{
    setBundleItems((prev) => ({ ...prev, [itemId]: 1}));
    addBundleCategory(itemId);
    setBundleMatch(findCommonMatches());
    setAllIDinBundle(getAllKeysInBundle());
    };
    checkconsolelogs()
  };
  

  const removeFromBundle = (itemId) => {
    setBundleItems((prev) => ({ ...prev, [itemId]: 0}));
    removeBundleCategory(itemId);
    setBundleMatch(findCommonMatches());
    setAllIDinBundle(getAllKeysInBundle());
  };


  const checkconsolelogs = () =>{
    console.log(findCommonMatches())
    console.log(getAllKeysInBundle())
    console.log(bundleMatch)
    console.log(allIDinBundle)
    console.log(currentcat)
  }

  const addToWishlist = (itemId) => {
    setWishlist((prev) => ({ ...prev, [itemId]: 1}));
  };
  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => ({ ...prev, [itemId]: 0}));
  }

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
    findCommonMatches,
    userName,
    setUserName,
    userType,
    setUserType,
    userBalance,
    setUserBalance,
    addToWishlist,
    removeFromWishlist,
    wishlist,

    userWarnings,
    setUserWarnings,
    userPraises,
    setUserPraises
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
