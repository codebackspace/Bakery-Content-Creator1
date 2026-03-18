import { Product, PaymentMethod } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Sourdough Loaf',
    description: 'Classic tangy sourdough made with our 20-year-old starter. Perfect crust, chewy inside.',
    price: 320,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'bread',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Croissant',
    description: 'Buttery, flaky French croissants baked fresh every morning with premium European butter.',
    price: 120,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'pastry',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Chocolate Lava Cake',
    description: 'Rich individual chocolate cakes with a warm molten center. A dessert lovers dream.',
    price: 250,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
    category: 'cake',
    bestseller: true,
  },
  {
    id: 4,
    name: 'Cinnamon Roll',
    description: 'Soft, pillowy cinnamon rolls drizzled with cream cheese frosting. Best enjoyed warm.',
    price: 150,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
    category: 'pastry',
    bestseller: true,
  },
  {
    id: 5,
    name: 'Multigrain Loaf',
    description: 'Hearty multigrain bread packed with sunflower seeds, sesame, and flaxseed.',
    price: 280,
    image: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg',
    category: 'bread',
  },
  {
    id: 6,
    name: 'Strawberry Tart',
    description: 'Delicate pastry shell filled with vanilla custard and topped with fresh strawberries.',
    price: 220,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    category: 'pastry',
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    description: 'Moist layered red velvet cake with tangy cream cheese frosting. Celebration-worthy.',
    price: 1200,
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg',
    category: 'cake',
  },
  {
    id: 8,
    name: 'Chocolate Chip Cookies',
    description: 'Classic crispy-edged, chewy-centered chocolate chip cookies. Made with real chocolate chunks.',
    price: 180,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    category: 'cookie',
    bestseller: true,
  },
  {
    id: 9,
    name: 'Focaccia Bread',
    description: 'Rosemary and sea salt focaccia, crispy outside, pillowy inside — perfect for dipping.',
    price: 260,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    category: 'bread',
  },
  {
    id: 10,
    name: 'Mango Cheesecake',
    description: 'Creamy New York-style cheesecake topped with fresh mango coulis and mango slices.',
    price: 980,
    image: 'https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg',
    category: 'cake',
  },
  {
    id: 11,
    name: 'Butter Cookies',
    description: 'Melt-in-your-mouth shortbread butter cookies in classic Danish style. Great for gifting.',
    price: 220,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
    category: 'cookie',
  },
  {
    id: 12,
    name: 'Pain au Chocolat',
    description: 'Flaky puff pastry encasing two rich dark chocolate batons. A breakfast indulgence.',
    price: 150,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
    category: 'pastry',
  },
  {
    id: 13,
    name: 'The Ark Signature Swirls',
    description: 'Buttery, slow-risen dough layered with aromatic Ceylon cinnamon and a hint of crushed cardamom. Baked golden and topped with Swedish pearl sugar for a delightful crunch. Ask for it "Warm" for a gooey, melt-in-your-mouth center.',
    price: 450,
    image: '/swirls.png',
    category: 'pastry',
    bestseller: true,
  },
];

export const paymentMethods: PaymentMethod[] = [
  { id: 'cash', name: 'Cash on Delivery' },
  { id: 'credit', name: 'Credit Card' },
  { id: 'mobile', name: 'Mobile Payment' },
];

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
