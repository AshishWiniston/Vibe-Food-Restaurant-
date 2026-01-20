# Ashish Restaurant - Full Stack Website

A modern, luxury restaurant website built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

## Features

- **Modern UI/UX**: Premium design with warm amber/orange color palette
- **Dark/Light Mode**: Toggle between dark and light themes
- **Authentication**: Google and Facebook OAuth integration via Supabase
- **Menu System**: Browse food items categorized by cuisine (Tamil Nadu, Kerala, Karnataka, Korean)
- **Combo Deals**: Special combo packages with discounts
- **Order System**: Add to cart and place orders with payment options (GPay, Cash on Delivery)
- **Services**: Display restaurant services (Dine-in, Takeaway, Home Delivery, Catering, Party Orders)
- **Contact Form**: Get in touch with restaurant details
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Luxury feel with hover effects and transitions

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Backend
- **Supabase** for:
  - Database (PostgreSQL)
  - Authentication (Google & Facebook OAuth)
  - Real-time data storage

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   ├── Footer.tsx      # Footer with contact info
│   ├── OfferBanner.tsx # Promotional banner
│   └── OrderModal.tsx  # Order placement modal
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Food.tsx        # Food menu with grid layout
│   ├── Combo.tsx       # Combo deals
│   ├── Services.tsx    # Restaurant services
│   ├── Contact.tsx     # Contact form and details
│   └── SignIn.tsx      # Authentication page
├── context/            # React context providers
│   ├── ThemeContext.tsx   # Dark/Light mode management
│   └── AuthContext.tsx    # Authentication state
├── data/               # Static data
│   ├── foodItems.ts    # Food menu items
│   └── comboItems.ts   # Combo packages
├── lib/                # Utilities
│   └── supabase.ts     # Supabase client configuration
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and animations
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account (already configured)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   The `.env` file is already configured with Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. **Database Setup**
   The database schema is already set up with:
   - `orders` table for storing customer orders
   - Row Level Security (RLS) policies for data protection

### Configure Authentication (Important)

To enable Google and Facebook sign-in, you need to configure OAuth providers in Supabase:

#### Google OAuth Setup
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to Authentication → Providers
3. Enable Google provider
4. Add your Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project (or use existing)
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://[your-project-ref].supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase

#### Facebook OAuth Setup
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to Authentication → Providers
3. Enable Facebook provider
4. Add your Facebook OAuth credentials:
   - Go to [Facebook Developers](https://developers.facebook.com)
   - Create a new app
   - Add Facebook Login product
   - Add OAuth redirect URI: `https://[your-project-ref].supabase.co/auth/v1/callback`
   - Copy App ID and App Secret to Supabase

### Running the Project

1. **Development Mode**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Usage

### For Customers

1. **Browse Menu**: Navigate to "Food" to see all available dishes
2. **Filter by Cuisine**: Click category buttons to filter by Tamil Nadu, Kerala, Karnataka, or Korean
3. **Place Order**: Click "Add to Cart" on any item to open order modal
4. **Complete Order**: Fill in details, select payment method (GPay or COD), and place order
5. **View Combos**: Check "Combo" page for special deals
6. **Sign In**: Authenticate with Google or Facebook for personalized experience

### For Admin (Owner)

1. **Access Database**: Log into Supabase dashboard
2. **View Orders**: Check `orders` table for all customer orders
3. **User Data**: View authenticated users in Authentication section
4. **Order Details**: Each order includes:
   - Customer name and email
   - Ordered items with details
   - Total amount
   - Payment method
   - Order timestamp
   - Order status

## Features in Detail

### Menu System
- 16 food items across 4 cuisines
- High-quality food images from Pexels
- Price display in Indian Rupees (₹)
- Category filtering

### Combo Deals
- 8 pre-configured combo packages
- Savings indication (20% off)
- Detailed item lists
- Special offer banner

### Order Management
- Guest checkout (no sign-in required)
- Authenticated user orders (auto-fill user details)
- Payment options: GPay and Cash on Delivery
- Order confirmation feedback
- All orders stored in Supabase database

### Dark Mode
- System-wide dark mode toggle
- Preference saved in localStorage
- Smooth transitions between themes
- Professional color schemes for both modes

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Optimized images

## Customization

### Adding New Food Items
Edit `src/data/foodItems.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Food Name',
  price: 299,
  image: 'https://images.pexels.com/...',
  category: 'Tamil Nadu',
  description: 'Description'
}
```

### Adding New Combos
Edit `src/data/comboItems.ts`:
```typescript
{
  id: 'combo-id',
  name: 'Combo Name',
  items: ['Item 1', 'Item 2'],
  price: 500,
  image: 'https://images.pexels.com/...',
  description: 'Description'
}
```

### Changing Colors
Edit `tailwind.config.js` to customize the amber theme to your preferred colors.

## Database Schema

### Orders Table
- `id`: UUID (Primary Key)
- `user_id`: UUID (References auth.users, nullable)
- `user_name`: TEXT (Customer name)
- `user_email`: TEXT (Customer email)
- `items`: JSONB (Ordered items array)
- `total_amount`: DECIMAL (Total price)
- `payment_method`: TEXT (GPay or Cash on Delivery)
- `status`: TEXT (pending, completed, cancelled)
- `created_at`: TIMESTAMPTZ (Order timestamp)
- `updated_at`: TIMESTAMPTZ (Last update)

## Security

- **Row Level Security (RLS)** enabled on all tables
- **Authenticated users** can view their own orders
- **Anonymous users** can place orders (guest checkout)
- **Admin access** only through Supabase dashboard
- **No sensitive data** exposed in frontend code

## Contact Information

- **Owner**: Ashish Winiston D
- **Phone**: 9487311335
- **Email**: ashishwiniton1125@gmail.com

## License

This project is private and proprietary to Ashish Restaurant.

---

Built with love by the Ashish Restaurant team.
