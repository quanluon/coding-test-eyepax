# Shopping Cart Application

A modern, responsive shopping cart application built with React, TypeScript, and Zustand for state management. This application allows users to browse inventory items, add them to a shopping cart, update quantities, and remove items.

## 🚀 Features

- **Inventory Management**: Display available grocery items with pricing and stock information
- **Shopping Cart**: Add, update, and remove items from the cart
- **Real-time Updates**: Cart updates immediately when items are modified
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Type Safety**: Full TypeScript implementation for better development experience
- **State Management**: Efficient state management using Zustand
- **HTTP Service Layer**: Centralized API communication with Axios

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **State Management**: Zustand 5.0.7
- **Styling**: Tailwind CSS 4.1.11
- **HTTP Client**: Axios 1.11.0
- **Build Tool**: Vite 7.1.0
- **Package Manager**: npm
- **Linting**: ESLint 9.32.0

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── InputQuantity.tsx
│   └── InventoryDetails.tsx
├── hooks/              # Custom React hooks
│   └── useDebounce.ts
├── modules/            # Feature-based modules
│   ├── cart/          # Shopping cart functionality
│   │   ├── components/
│   │   │   └── CartItem.tsx
│   │   └── index.tsx
│   └── inventory/     # Inventory management
│       ├── components/
│       │   └── InventoryItem.tsx
│       └── index.tsx
├── services/          # API and service layer
│   ├── BaseHttp.service.ts
│   ├── Cart.service.ts
│   ├── Inventory.service.ts
│   └── mock/          # Mock data for development
│       └── index.ts
├── store/            # Zustand state stores
│   ├── cartStore.ts
│   └── inventoryStore.ts
├── types/            # TypeScript type definitions
│   ├── cart.types.ts
│   ├── inventory.types.ts
│   └── index.ts
└── utils/            # Utility functions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🛒 Application Features

### Inventory Display

- View all available grocery items
- See item details including name, price, and available quantity
- Items are displayed in a responsive grid layout

### Shopping Cart Management

- **Add Items**: Click on inventory items to add them to the cart
- **Update Quantities**: Modify item quantities using quantity controls
- **Remove Items**: Remove items completely from the cart
- **Real-time Updates**: Cart updates immediately reflect changes

### State Management

The application uses Zustand for efficient state management:

- **Cart Store** (`src/store/cartStore.ts`): Manages shopping cart state and operations
- **Inventory Store** (`src/store/inventoryStore.ts`): Handles inventory data and fetching

## 🔧 API Integration

The application includes a robust HTTP service layer:

- **BaseHttpService**: Centralized HTTP client with Axios
- **CartService**: Cart-specific API operations
- **InventoryService**: Inventory-specific API operations
- **Mock Data**: Development mock data for testing

### API Endpoints

The application expects the following API structure:

- `GET /api/inventory` - Fetch all inventory items
- `GET /api/cart` - Fetch current cart
- `POST /api/cart` - Add/update cart items
- `DELETE /api/cart/:itemId` - Remove item from cart

## 🎨 UI Components

### Core Components

- **Button**: Reusable button component with consistent styling
- **InputQuantity**: Specialized input for quantity management
- **InventoryDetails**: Detailed view of inventory items
- **CartItem**: Individual cart item display
- **InventoryItem**: Individual inventory item display

### Styling

- Built with Tailwind CSS for modern, responsive design
- Consistent design system across all components
- Mobile-friendly responsive layout

## 🔍 Type Safety

The application is fully typed with TypeScript:

```typescript
// Inventory item structure
interface IInventory {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
}

// Cart item structure
interface ICartItem {
  inventory: IInventory;
  quantity: number;
}

// Cart structure
interface ICart {
  items: ICartItem[];
}
```

## 🧪 Development

### Code Quality

- ESLint configuration for code quality
- TypeScript strict mode enabled
- Consistent code formatting

### Custom Hooks

- `useDebounce`: Debounce function for search and input handling

### Error Handling

- Comprehensive error handling in API calls
- User-friendly error messages
- Graceful fallbacks for network issues

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Environment Configuration

- Development: Uses mock data by default
- Production: Configure `VITE_API_BASE_URL` for your production API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Note**: This is a coding test application demonstrating modern React development practices with TypeScript, state management, and API integration.
