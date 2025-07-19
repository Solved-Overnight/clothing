import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5560021/pexels-photo-5560021.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'tops',
    description: 'Soft premium cotton t-shirt with a modern fit. Perfect for everyday wear with superior comfort and style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'bottoms',
    description: 'Classic slim-fit denim jeans crafted from premium denim. Features a comfortable stretch and timeless style.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    isSale: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Wool Blend Sweater',
    price: 89.99,
    image: 'https://images.pexels.com/photos/7679448/pexels-photo-7679448.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7679448/pexels-photo-7679448.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679449/pexels-photo-7679449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sweaters',
    description: 'Luxurious wool blend sweater with a cozy feel. Perfect for cooler weather with elegant styling.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Navy', 'Charcoal', 'Cream'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: '4',
    name: 'Casual Button-Down Shirt',
    price: 59.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shirts',
    description: 'Versatile button-down shirt perfect for both casual and formal occasions. Made from breathable cotton.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Navy', 'Gray'],
    rating: 4.4,
    reviews: 73
  },
  {
    id: '5',
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'jackets',
    description: 'Premium leather jacket with a timeless design. Features quality craftsmanship and durability.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.9,
    reviews: 234
  },
  {
    id: '6',
    name: 'Chino Pants',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'bottoms',
    description: 'Classic chino pants with a modern fit. Perfect for smart-casual occasions with comfortable wear.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    rating: 4.3,
    reviews: 67
  },
  {
    id: '7',
    name: 'Knit Cardigan',
    price: 69.99,
    image: 'https://images.pexels.com/photos/5560021/pexels-photo-5560021.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/5560021/pexels-photo-5560021.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5560022/pexels-photo-5560022.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sweaters',
    description: 'Cozy knit cardigan perfect for layering. Features a relaxed fit and soft texture.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'Cream', 'Burgundy'],
    isNew: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: '8',
    name: 'Polo Shirt',
    price: 39.99,
    image: 'https://images.pexels.com/photos/7679449/pexels-photo-7679449.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7679449/pexels-photo-7679449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679448/pexels-photo-7679448.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'tops',
    description: 'Classic polo shirt with a modern twist. Made from breathable cotton with a comfortable fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Red', 'Green'],
    rating: 4.2,
    reviews: 45
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'tops', name: 'Tops', count: products.filter(p => p.category === 'tops').length },
  { id: 'bottoms', name: 'Bottoms', count: products.filter(p => p.category === 'bottoms').length },
  { id: 'shirts', name: 'Shirts', count: products.filter(p => p.category === 'shirts').length },
  { id: 'sweaters', name: 'Sweaters', count: products.filter(p => p.category === 'sweaters').length },
  { id: 'jackets', name: 'Jackets', count: products.filter(p => p.category === 'jackets').length }
];