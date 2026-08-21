import type { Menu } from '../types';

export const DRAFT_FOOD_MENU: Menu = {
  id: 'menu-food-draft',
  slug: 'food',
  title: 'Food Menu',
  description: 'A contemporary selection of shared plates, seasonal tapas, and wood-fired mains.',
  locale: 'en',
  effectiveDate: 'Autumn 2026',
  lastUpdated: 'August 20, 2026',
  currency: 'INR',
  serviceApplicability: ['Dinner Service & Late Dining'],
  status: 'client-approved',
  isDraft: false,
  pdf: null,
  chapters: [
    {
      id: 'chapter-1',
      title: 'Start & Share',
      order: 1,
      categories: [
        {
          id: 'cat-bar-snacks',
          sourceTitle: 'Bar Snacks & Fritters',
          displayTitle: 'Bar Snacks & Fritters',
          order: 1,
          menuItems: [
            { id: 'f1', name: 'Zucchini fritters', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f2', name: 'One 8 onion rings', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f3', name: 'Cocktail podi idli', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f4', name: 'French fries', variants: [{ id: 'v1', label: 'Salted', price: 199 }, { id: 'v2', label: 'Peri-Peri', price: 249 }, { id: 'v3', label: 'Parmesan', price: 349 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f5', name: 'Cherry cheese pineapple', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f6', name: 'Panko paneer fingers', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 4 },
            { id: 'f7', name: 'One 8 peanut masala', variants: [{ id: 'v1', label: '', price: 299 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f8', name: 'Loaded nachos', variants: [{ id: 'v1', label: 'Vegetarian', price: 369 }, { id: 'v2', label: 'Chicken', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f9', name: 'Peri Peri lotus stem chips', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f10', name: 'Classic fish fingers', variants: [{ id: 'v1', label: '', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f11', name: 'Peri Peri chicken tenders', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f12', name: 'Meen kuzhambu mini idly', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f13', name: 'Classic One 8 shrimp', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f14', name: 'Crispy calamari', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f15', name: 'Goan buttered garlic prawns', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
            { id: 'f16', name: 'Mutton samosas', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 5 },
          ]
        },
        {
          id: 'cat-soups',
          sourceTitle: 'Soups from India & Rest of Asia',
          displayTitle: 'Soups',
          order: 2,
          menuItems: [
            { id: 'f17', name: 'Nenju elumbu', variants: [{ id: 'v1', label: '', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f18', name: 'Dhaniya ka shorba', variants: [{ id: 'v1', label: '', price: 299 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f19', name: 'Asian egg drop soup', variants: [{ id: 'v1', label: 'Egg', price: 299 }, { id: 'v2', label: 'Chicken', price: 329 }, { id: 'v3', label: 'Prawns', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f20', name: 'Tom Yum soup', variants: [{ id: 'v1', label: 'Vegetarian', price: 299 }, { id: 'v2', label: 'Chicken', price: 329 }, { id: 'v3', label: 'Prawns', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f21', name: 'Manchow soup', variants: [{ id: 'v1', label: 'Vegetarian', price: 299 }, { id: 'v2', label: 'Chicken', price: 329 }, { id: 'v3', label: 'Prawns', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f22', name: 'Lemon coriander soup', variants: [{ id: 'v1', label: 'Vegetarian', price: 299 }, { id: 'v2', label: 'Chicken', price: 329 }, { id: 'v3', label: 'Prawns', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
            { id: 'f23', name: 'Hot & sour', variants: [{ id: 'v1', label: 'Vegetarian', price: 299 }, { id: 'v2', label: 'Chicken', price: 329 }, { id: 'v3', label: 'Prawns', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 6 },
          ]
        },
        {
          id: 'cat-sliders',
          sourceTitle: 'Sliders',
          displayTitle: 'Sliders',
          order: 3,
          menuItems: [
            { id: 'f24', name: 'Bombay vada pav', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f25', name: 'Asian sesame paneer', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f26', name: 'Crusted chicken', variants: [{ id: 'v1', label: '', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f27', name: 'Turkish lamb', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f28', name: 'Griddle mince beef', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
          ]
        },
        {
          id: 'cat-salads',
          sourceTitle: 'Salads',
          displayTitle: 'Salads',
          order: 4,
          menuItems: [
            { id: 'f29', name: 'One 8 Greek', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f30', name: 'Classic Caesar', variants: [{ id: 'v1', label: 'Chicken', price: 399 }, { id: 'v2', label: 'Paneer', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f31', name: 'Marina Madras salad', variants: [{ id: 'v1', label: '', price: 349 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
            { id: 'f32', name: 'Green salad', variants: [{ id: 'v1', label: '', price: 299 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 7 },
          ]
        }
      ]
    },
    {
      id: 'chapter-2',
      title: 'From Asia',
      order: 2,
      categories: [
        {
          id: 'cat-asian-app-veg',
          sourceTitle: 'Asian Appetizers — Vegetarian',
          displayTitle: 'Asian Appetizers (Veg)',
          order: 1,
          menuItems: [
            { id: 'f33', name: 'Spinach feta wonton', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
            { id: 'f34', name: 'Vegan spring rolls', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 }, // VG withheld pending kitchen
            { id: 'f35', name: 'Chilli crispy corn kernel', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
            { id: 'f36', name: 'Classic Chinese chilli', variants: [{ id: 'v1', label: 'Lotus stem', price: 429 }, { id: 'v2', label: 'Mushroom', price: 429 }, { id: 'v3', label: 'Baby corn', price: 429 }, { id: 'v4', label: 'Paneer', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
            { id: 'f37', name: 'Salt & Pepper', variants: [{ id: 'v1', label: 'Mushroom', price: 429 }, { id: 'v2', label: 'Baby corn', price: 429 }, { id: 'v3', label: 'Paneer', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
            { id: 'f38', name: 'Honey chilli potatoes', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
            { id: 'f39', name: 'Cauliflower Manchurian', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 8 },
          ]
        },
        {
          id: 'cat-asian-app-nonveg',
          sourceTitle: 'Asian Appetizers — Non-Vegetarian',
          displayTitle: 'Asian Appetizers (Non-Veg)',
          order: 2,
          menuItems: [
            { id: 'f40', name: 'Hawker chicken satay', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f41', name: 'Thai pandan wraps', variants: [{ id: 'v1', label: 'Chicken', price: 399 }, { id: 'v2', label: 'Prawns', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f42', name: 'Classic Chinese chilli', variants: [{ id: 'v1', label: 'Chicken', price: 499 }, { id: 'v2', label: 'Prawns', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f43', name: 'Crunchy honey pulled chicken', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f44', name: 'Korean bonchon chicken wings', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f45', name: 'Golden fried prawns', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f46', name: "One 8 chilli beef", variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
            { id: 'f47', name: 'Korean beef bulgogi', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 9 },
          ]
        },
        {
          id: 'cat-pan-asian-mains',
          sourceTitle: 'Pan-Asian Mains',
          displayTitle: 'Pan-Asian Mains',
          order: 3,
          menuItems: [
            { id: 'f48', name: 'Kung pao', variants: [{ id: 'v1', label: 'Veg', price: 429 }, { id: 'v2', label: 'Chicken', price: 499 }, { id: 'v3', label: 'Prawns', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f49', name: 'Wok-tossed chilli gravy', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Chicken', price: 449 }, { id: 'v3', label: 'Prawns', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f50', name: 'Schezwan-style gravy', variants: [{ id: 'v1', label: 'Veg', price: 429 }, { id: 'v2', label: 'Chicken', price: 499 }, { id: 'v3', label: 'Prawns', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f51', name: 'Red Thai curry', variants: [{ id: 'v1', label: 'Veg', price: 429 }, { id: 'v2', label: 'Chicken', price: 449 }, { id: 'v3', label: 'Prawns', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f52', name: 'Green Thai curry', variants: [{ id: 'v1', label: 'Veg', price: 429 }, { id: 'v2', label: 'Chicken', price: 449 }, { id: 'v3', label: 'Prawns', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f53', name: 'Malaysian beef rendang', variants: [{ id: 'v1', label: '', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
            { id: 'f54', name: 'Wok-tossed Cantonese gravy', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 21 },
          ]
        },
        {
          id: 'cat-asian-rice-noodles',
          sourceTitle: 'Asian Rice & Noodles',
          displayTitle: 'Rice & Noodles',
          order: 4,
          menuItems: [
            { id: 'f55', name: 'Classic fried rice', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f56', name: 'Tom Yum fried rice', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f57', name: 'Schezwan fried rice', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f58', name: 'Burnt garlic fried rice', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f59', name: 'Hakka noodles', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f60', name: 'Schezwan noodles', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f61', name: 'Burnt garlic noodles', variants: [{ id: 'v1', label: 'Veg', price: 399 }, { id: 'v2', label: 'Egg', price: 399 }, { id: 'v3', label: 'Chicken', price: 429 }, { id: 'v4', label: 'Prawns', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
            { id: 'f62', name: 'Chicken dan dan noodles', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 22 },
          ]
        }
      ]
    },
    {
      id: 'chapter-3',
      title: 'From India',
      order: 3,
      categories: [
        {
          id: 'cat-indian-app-veg',
          sourceTitle: 'Tandoor & Indian Appetizers — Vegetarian',
          displayTitle: 'Tandoor & Appetizers (Veg)',
          order: 1,
          menuItems: [
            { id: 'f63', name: 'Tandoori paneer tikka', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f64', name: 'Paneer makai sheek', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f65', name: 'Tandoori aloo', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f66', name: 'Malai broccoli', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f67', name: 'Bharwa mushroom', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f68', name: 'Hara bhara seekh', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
            { id: 'f69', name: 'Dahi ke sholay', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 10 },
          ]
        },
        {
          id: 'cat-indian-app-nonveg',
          sourceTitle: 'Tandoor & Indian Appetizers — Non-Vegetarian',
          displayTitle: 'Tandoor & Appetizers (Non-Veg)',
          order: 2,
          menuItems: [
            { id: 'f70', name: 'Tandoori chicken tikka', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f71', name: 'Achari half tandoori chicken', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f72', name: 'Harayali chicken', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f73', name: 'Malai chicken', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f74', name: 'Classic seekh kebab', variants: [{ id: 'v1', label: '', price: 529 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f75', name: 'Reshmi chicken kebab', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f76', name: 'Tandoori mutton chops', variants: [{ id: 'v1', label: '', price: 899 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f77', name: 'Kasundi fish tikka', variants: [{ id: 'v1', label: '', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
            { id: 'f78', name: 'Harayali prawns', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 11 },
          ]
        },
        {
          id: 'cat-four-states-veg',
          sourceTitle: 'The Four States — Vegetarian',
          displayTitle: 'The Four States (Veg)',
          order: 3,
          menuItems: [
            { id: 'f79', name: 'Paneer ghee roast', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f80', name: 'Paneer gongura fry', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f81', name: 'Mushroom milagu fry', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f82', name: 'Curry leaf paneer pepper roast', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f83', name: 'Chettinad potato roast', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f84', name: 'Paneer 65', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f85', name: 'Mushroom chukka', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
            { id: 'f86', name: 'Vendakkai muru muru fry', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 12 },
          ]
        },
        {
          id: 'cat-four-states-nonveg',
          sourceTitle: 'The Four States — Non-Vegetarian',
          displayTitle: 'The Four States (Non-Veg)',
          order: 4,
          menuItems: [
            { id: 'f87', name: 'Mangalore ghee roast', variants: [{ id: 'v1', label: 'Egg', price: 429 }, { id: 'v2', label: 'Chicken', price: 499 }, { id: 'v3', label: 'Prawns', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f88', name: 'Chicken milagu fry', variants: [{ id: 'v1', label: '', price: 499 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f89', name: 'Andhra chilli chicken', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f90', name: 'One 8 65', variants: [{ id: 'v1', label: 'Chicken', price: 449 }, { id: 'v2', label: 'Prawns', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f91', name: 'Malnadu tawa fry', variants: [{ id: 'v1', label: 'Seer', price: 599 }, { id: 'v2', label: 'Prawns', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f92', name: 'Military mutton chops', variants: [{ id: 'v1', label: '', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f93', name: 'Mutton chukka', variants: [{ id: 'v1', label: '', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
            { id: 'f94', name: 'Slow-cooked kheema unde', variants: [{ id: 'v1', label: '', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 13 },
          ]
        },
        {
          id: 'cat-indian-mains-veg',
          sourceTitle: 'Pan-Indian Gravies & Curries — Vegetarian',
          displayTitle: 'Gravies & Curries (Veg)',
          order: 5,
          menuItems: [
            { id: 'f95', name: 'Paneer tikka masala', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f96', name: 'Paneer khurchan', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f97', name: 'Southern vegetable kurma', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f98', name: 'Subz meloni', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f99', name: 'Mushroom do pyaaz', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f100', name: 'Malabar vegetable stew', variants: [{ id: 'v1', label: '', price: 429 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f101', name: 'Dal makhani', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
            { id: 'f102', name: 'Adraki dal tadka', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 18 },
          ]
        },
        {
          id: 'cat-indian-mains-nonveg',
          sourceTitle: 'Pan-Indian Gravies & Curries — Non-Vegetarian',
          displayTitle: 'Gravies & Curries (Non-Veg)',
          order: 6,
          menuItems: [
            { id: 'f103', name: 'Butter chicken', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f104', name: 'Chicken bhuna masala', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f105', name: 'Murgh khurchan', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f106', name: 'Chicken gassi', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f107', name: 'Mutton chops kuzhambu', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f108', name: 'Mangalorean curry', variants: [{ id: 'v1', label: 'Seer fish', price: 549 }, { id: 'v2', label: 'Prawns', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f109', name: 'Prawn kadai masala', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f110', name: 'Nalli nihari', variants: [{ id: 'v1', label: '', price: 799 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
            { id: 'f111', name: 'Mutton saaru', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 19 },
          ]
        },
        {
          id: 'cat-biryani-rice',
          sourceTitle: 'Biryani, Rice & Breads',
          displayTitle: 'Biryani, Rice & Breads',
          order: 7,
          menuItems: [
            { id: 'f112', name: 'Donne biryani', variants: [{ id: 'v1', label: 'Chicken', price: 499 }, { id: 'v2', label: 'Mutton', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f113', name: 'Nawabi vegetable dum biryani', variants: [{ id: 'v1', label: '', price: 449 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f114', name: 'Ghee rice', variants: [{ id: 'v1', label: '', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f115', name: 'Jeera rice', variants: [{ id: 'v1', label: '', price: 329 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f116', name: 'Curd rice', variants: [{ id: 'v1', label: '', price: 349 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f117', name: 'Steamed rice', variants: [{ id: 'v1', label: '', price: 299 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f118', name: 'Neer dosa', variants: [{ id: 'v1', label: '', price: 149 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f119', name: 'Tatte idly', variants: [{ id: 'v1', label: '', price: 129 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f120', name: 'Idiyappam', variants: [{ id: 'v1', label: '', price: 129 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f121', name: 'Tandoori roti', variants: [{ id: 'v1', label: 'Plain', price: 129 }, { id: 'v2', label: 'Butter', price: 149 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f122', name: 'Tandoori naan', variants: [{ id: 'v1', label: 'Plain', price: 129 }, { id: 'v2', label: 'Butter', price: 149 }, { id: 'v3', label: 'Garlic butter', price: 169 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
            { id: 'f123', name: 'Tandoori kulcha', variants: [{ id: 'v1', label: 'Plain', price: 129 }, { id: 'v2', label: 'Butter', price: 249 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 20 },
          ]
        }
      ]
    },
    {
      id: 'chapter-4',
      title: 'Familiar Favourites',
      order: 4,
      categories: [
        {
          id: 'cat-pizzas',
          sourceTitle: 'Thin-Crust Pizzas',
          displayTitle: 'Thin-Crust Pizzas',
          order: 1,
          menuItems: [
            { id: 'f124', name: 'Margherita', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f125', name: 'Paneer tikka pizza', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f126', name: 'Pizza capricciosa', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f127', name: 'Pizza piperade', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f128', name: 'Quattro formaggi pizza', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f129', name: 'Pulled chicken pizza', variants: [{ id: 'v1', label: '', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f130', name: 'Chicken tikka pizza', variants: [{ id: 'v1', label: '', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f131', name: 'Pizza pepperoni', variants: [{ id: 'v1', label: '', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
            { id: 'f132', name: 'Pizza bolognese', variants: [{ id: 'v1', label: '', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 15 },
          ]
        },
        {
          id: 'cat-grills',
          sourceTitle: 'From Our Grills',
          displayTitle: 'From Our Grills',
          order: 2,
          menuItems: [
            { id: 'f133', name: 'Grilled paneer steak', variants: [{ id: 'v1', label: '', price: 549 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 16 },
            { id: 'f134', name: 'Chicken pepper steak', variants: [{ id: 'v1', label: '', price: 599 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 16 },
            { id: 'f135', name: 'Chicken confit', variants: [{ id: 'v1', label: '', price: 629 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 16 },
            { id: 'f136', name: 'Sea grill', variants: [{ id: 'v1', label: 'Mahi Mahi', price: 799 }, { id: 'v2', label: 'Prawns', price: 799 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 16 },
            { id: 'f137', name: 'Fillet pepper steak', variants: [{ id: 'v1', label: '', price: 799 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 16 },
          ]
        },
        {
          id: 'cat-pastas',
          sourceTitle: 'World of Pastas',
          displayTitle: 'Pastas',
          order: 3,
          menuItems: [
            { id: 'f138', name: 'Mac and cheese', variants: [{ id: 'v1', label: 'Veg', price: 599 }, { id: 'v2', label: 'Chicken', price: 649 }, { id: 'v3', label: 'Shrimp', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f139', name: 'Alfredo (spaghetti or penne)', variants: [{ id: 'v1', label: 'Veg', price: 549 }, { id: 'v2', label: 'Chicken', price: 599 }, { id: 'v3', label: 'Shrimp', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f140', name: 'Arrabbiata (spaghetti or penne)', variants: [{ id: 'v1', label: 'Veg', price: 549 }, { id: 'v2', label: 'Chicken', price: 599 }, { id: 'v3', label: 'Shrimp', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f141', name: 'Basil pesto (spaghetti or penne)', variants: [{ id: 'v1', label: 'Veg', price: 549 }, { id: 'v2', label: 'Chicken', price: 599 }, { id: 'v3', label: 'Shrimp', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f142', name: 'Spaghetti aglio e olio', variants: [{ id: 'v1', label: 'Veg', price: 549 }, { id: 'v2', label: 'Chicken', price: 599 }, { id: 'v3', label: 'Shrimp', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f143', name: 'Lasagna', variants: [{ id: 'v1', label: 'Vegetarian', price: 599 }, { id: 'v2', label: 'Meat', price: 699 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
            { id: 'f144', name: 'Meatball spaghetti', variants: [{ id: 'v1', label: '', price: 649 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 17 },
          ]
        }
      ]
    },
    {
      id: 'chapter-5',
      title: 'Desserts',
      order: 5,
      categories: [
        {
          id: 'cat-desserts',
          sourceTitle: 'Desserts',
          displayTitle: 'Desserts',
          order: 1,
          menuItems: [
            { id: 'f145', name: 'Double chocolate brownie', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
            { id: 'f146', name: 'Chocolate cake flambé', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
            { id: 'f147', name: 'Flourless chocolate cake', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
            { id: 'f148', name: 'Tiramisu', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
            { id: 'f149', name: 'Blueberry cheesecake', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
            { id: 'f150', name: 'Rose milk tres leches', variants: [{ id: 'v1', label: '', price: 399 }], dietary: [], allergens: [], availability: 'available', status: 'client-approved', sourcePage: 23 },
          ]
        }
      ]
    }
  ]
};

