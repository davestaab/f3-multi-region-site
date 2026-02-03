# F3 Multi Region Website

## Overview

The application operates as a multi-tenant system, where each tenant (region) has its own configuration including workout locations (AOs), events, maps, and branding. At build time, the app selects the tenant and generates a static site tailored to that region, which is then deployed to different domains or subdomains.

See `app/utils/tenants` for list of current regions.

## How to

### Update info or add an AO for a region

needs details

## Technical

### Prerequisites

- Node.js >= 22
- pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd f3-multi-region-site
pnpm install
```

### Development

To run the development server:

```bash
pnpm dev
```

To build for a specific tenant (e.g., knoxville):

```bash
pnpm generate:knoxville
```

### Testing

Run tests with:

```bash
pnpm test
```

This runs Playwright BDD tests.

### Project Structure

- `app/`: Main Nuxt application
  - `pages/`: Page components (index.vue, aos/[slug].vue)
  - `components/`: UI components (TheHeader.vue, ColorModeButton.vue)
  - `composables/`: Reusable logic (useTenant.ts)
  - `utils/tenants/`: Tenant-specific configurations and data
- `specs/`: Cucumber feature files and step definitions
- `server/`: Server-side utilities
- `public/`: Static assets

For deployment, each tenant is built statically and deployed to Netlify.