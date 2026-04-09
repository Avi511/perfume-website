import { createContext, useContext, useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const isInitialMount = useRef(true);
  const isSyncingFromBackend = useRef(false);

  useEffect(() => {
    if (user) {
      const loadCart = async () => {
        try {
          isSyncingFromBackend.current = true;
          const guestItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
          if (guestItems.length > 0) {
            await api.post("/users/cart/sync", { cartItems: guestItems });
          }

          const { data } = await api.get("/users/cart");
          setCartItems(data);
        } catch (error) {
          console.error("Failed to load cart from server", error);
        } finally {
          isSyncingFromBackend.current = false;
        }
      };
      loadCart();
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    if (user && !isSyncingFromBackend.current && !isInitialMount.current) {
      const syncTimeout = setTimeout(async () => {
        try {
          await api.post("/users/cart/sync", { cartItems });
        } catch (error) {
          console.error("Failed to sync cart to server", error);
        }
      }, 1000); // Debounce sync
      return () => clearTimeout(syncTimeout);
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, [cartItems, user]);

  const addToCart = (product, qty) => {
    const itemExists = cartItems.find((x) => x._id === product._id);

    if (itemExists) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty }]);
    }
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x._id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(
      cartItems.map((x) =>
        x._id === id ? { ...x, qty } : x
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * item.qty, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + (item.qty || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
