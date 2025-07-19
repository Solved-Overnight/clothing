import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistModal({ isOpen, onClose }: WishlistModalProps) {
  const { state, removeFromWishlist } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  const { addNotification } = useNotification();

  if (!isOpen) return null;

  const handleRemoveFromWishlist = async (productId: string) => {
    await removeFromWishlist(productId);
    addNotification({
      type: 'info',
      title: 'Removed from Wishlist',
      message: 'Item has been removed from your wishlist.'
    });
  };

  const moveToCart = async (item: any) => {
    // Add to cart with default size and color
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        product: item.product,
        size: item.product.sizes[0],
        color: item.product.colors[0]
      }
    });

    // Remove from wishlist
    await removeFromWishlist(item.product.id);

    addNotification({
      type: 'success',
      title: 'Added to Cart',
      message: `${item.product.name} has been moved to your cart.`
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                My Wishlist
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading wishlist...</p>
              </div>
            ) : state.items.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-2">Your wishlist is empty</p>
                <p className="text-sm text-gray-400 mb-4">
                  Save items you love to view them later
                </p>
                <button
                  onClick={onClose}
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.product.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${item.product.price.toFixed(2)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => moveToCart(item)}
                          className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition-colors duration-200"
                        >
                          <ShoppingBag className="h-3 w-3" />
                          Add to Cart
                        </button>
                        
                        <button
                          onClick={() => handleRemoveFromWishlist(item.product.id)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-800 px-3 py-1 rounded text-sm transition-colors duration-200"
                        >
                          <Trash2 className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <p className="text-sm text-gray-600 mb-4">
                {state.items.length} item{state.items.length !== 1 ? 's' : ''} in your wishlist
              </p>
              <button
                onClick={onClose}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}