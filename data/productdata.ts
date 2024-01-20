// This file contains the product data for the application

export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  flavour: string | undefined | null;
  tiers: number | null;
  colour: string | null;
  frosting: string | null;
  decorations: string | null;
  topper: string | null;
}

export interface CartItem extends Product {
  quantity: number;
  basePrice: number;
  totalPrice?: number;
}

export const products: Product[] = [
  {
    id: '1',
    image: '/transparent-cake.png',
    imageAlt: 'cake',
    title: 'Customized Cake',
    description:
      'Build your customized cake and choose your desired tiers, flavor, color, frosting, decoration and topper.',
    price: 150,
    flavour: '',
    tiers: null,
    colour: '',
    frosting: '',
    decorations: '',
    topper: '',
  },
  {
    id: '2',
    image: '/transparent-cake.png',
    imageAlt: 'cake',
    title: 'Bespoke Cake',
    description:
      'Send us a request for a completely unique cake. Send a picture of your desired cake, choose a color and tell us what you want. We can accomodate allergies.',
    price: 200,
    flavour: '',
    tiers: null,
    colour: '',
    frosting: '',
    decorations: '',
    topper: '',
  },
];
