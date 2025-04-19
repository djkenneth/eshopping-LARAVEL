# E-Shopping Management System

This project contains two Laravel applications:
- **UAC** (User Access Control) - Handles user management and permissions
- **PRODUCTS** - Product management system that connects to UAC

## Setup Instructions

### Prerequisites
- WAMP Server installed and running
- Bun.js installed (for running the development scripts)
- PostgreSQL database server

### Installation

1. **Install dependencies for the root project**:
```bash
bun install
```
This will install `concurrently` which allows running multiple commands in parallel.

2. **Install dependencies for each project**:
```bash
cd UAC && bun install
cd ../PRODUCTS && bun install
```

### Available Scripts

#### Development

To start both development servers simultaneously:
```bash
bun run dev
```

To start only UAC development server:
```bash
bun run dev:uac
```

To start only PRODUCTS development server:
```bash
bun run dev:products
```

#### Production Build

To build both projects for production:
```bash
bun run build
```

To build only UAC for production:
```bash
bun run build:uac
```

To build only PRODUCTS for production:
```bash
bun run build:products
```

### Accessing the Applications

- Main Dashboard: http://eshopping.local/
- UAC Application: http://eshopping.local/UAC
- PRODUCTS Application: http://eshopping.local/PRODUCTS

## Database Configuration

Each application connects to its own PostgreSQL database:

- **UAC**: `eshopping_uac`
- **PRODUCTS**: `eshopping_products`

The PRODUCTS application also connects to the UAC database to check user permissions.