import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import WishlistModal from './WishlistModal';
import ProfileModal from './ProfileModal';
import LoginModal from './LoginModal';
import NotificationToast from './NotificationToast';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { state: authState } = useAuth();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleWishlistClick = () => {
    setIsWishlistOpen(true);
  };

  const handleProfileClick = () => {
    if (authState.isAuthenticated) {
      setIsProfileOpen(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={handleCartClick}
        onWishlistClick={handleWishlistClick}
        onProfileClick={handleProfileClick}
      />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <NotificationToast />
    </div>
  );
}