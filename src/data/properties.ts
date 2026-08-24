export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  tag: string;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Skyline Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,250,000',
    beds: 5,
    baths: 4,
    area: '4,800 sqft',
    tag: 'For Sale',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern Garden Estate',
    location: 'Aspen, CO',
    price: '$2,890,000',
    beds: 4,
    baths: 3,
    area: '3,200 sqft',
    tag: 'For Sale',
    image: 'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    title: 'Countryside Stone Cottage',
    location: 'Greenwich, CT',
    price: '$1,750,000',
    beds: 3,
    baths: 2,
    area: '2,400 sqft',
    tag: 'For Sale',
    image: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    title: 'Hillside Luxury Villa',
    location: 'Malibu, CA',
    price: '$5,600,000',
    beds: 6,
    baths: 5,
    area: '6,100 sqft',
    tag: 'New',
    image: 'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 5,
    title: 'Twin Modern Residences',
    location: 'Austin, TX',
    price: '$1,920,000',
    beds: 4,
    baths: 3,
    area: '2,800 sqft',
    tag: 'For Sale',
    image: 'https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 6,
    title: 'Illuminated Night Manor',
    location: 'Seattle, WA',
    price: '$3,400,000',
    beds: 5,
    baths: 4,
    area: '4,200 sqft',
    tag: 'Featured',
    image: 'https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Interior {
  id: number;
  title: string;
  image: string;
}

export const interiors: Interior[] = [
  {
    id: 1,
    title: 'Grand Living Hall',
    image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    title: 'Minimalist Lounge',
    image: 'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    title: 'Designer Open Plan',
    image: 'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    title: 'Elegant Salon',
    image: 'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Bennett',
    role: 'Homeowner',
    quote: 'LeonHome made finding our dream villa effortless. The attention to detail and white-glove service was beyond anything we expected.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Investor',
    quote: 'I have purchased three properties through LeonHome. Their market insight and curated listings are simply unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'First-time Buyer',
    quote: 'From the first viewing to closing day, the team guided me with patience and expertise. I felt supported every step.',
    rating: 5,
  },
];

export interface Category {
  id: number;
  name: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Luxury Villas',
    count: 128,
    image: 'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    name: 'Modern Apartments',
    count: 342,
    image: 'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    name: 'Family Homes',
    count: 215,
    image: 'https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
