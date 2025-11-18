"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import axios from "axios";
const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const findProduct = prevCart.find(
        (productInCart) => productInCart._id === product._id
      );

      if (product.qty <= 0) {
        return prevCart.filter(
          (productInCart) => productInCart._id !== product._id
        );
      }

      if (findProduct) {
        return prevCart.map((productInCart) =>
          productInCart._id === product._id
            ? { ...productInCart, qty: product.qty }
            : productInCart
        );
      }
      return [...prevCart, product];
    });
  };

  const getAllProducts = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOneProduct = useCallback(async (id) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
      );
      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAllCategories = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      setCategories(res.data.categories || res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOneCategory = useCallback(async (slug) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`
      );
      setCategory(res.data.category || res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  const cartQty = () => cart.length;

  const cartTotal = cart.reduce(
    (acc, product) => acc + product.qty * product.price,
    0
  );

  const addOrder = async (userValues) => {
    const reducedCart = cart.map((product) => {
      const prod = {
        name: product.name,
        _id: product._id,
        qty: product.qty,
      };

      return prod;
    });

    const orderValues = {
      user: userValues,
      products: reducedCart,
      total: cartTotal,
    };
    console.log("my order is", orderValues);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        orderValues
      );

      clearCart();
      return true;
    } catch (error) {
      console.log("error", error);

      return false;
    }
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        handleAddToCart,
        clearCart,
        cartQty,
        products,
        product,
        getOneProduct,
        categories,
        category,
        getOneCategory,
        addOrder,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContext;
