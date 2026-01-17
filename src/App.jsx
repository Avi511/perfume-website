import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Solutions from './pages/Solutions.jsx';
import FAQ from './pages/FAQ.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Blog from './pages/Blog.jsx';
import Press from './pages/Press.jsx';
import Support from './pages/Support.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="press" element={<Press />} />
            <Route path="support" element={<Support />} />
            <Route path="cart" element={<Cart />} />
            <Route path="collections" element={<Shop />} />
            <Route path="*" element={<div className="text-center py-20 text-2xl font-serif">404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
