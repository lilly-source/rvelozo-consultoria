# AI Rules & Project Guidelines

## Tech Stack
- **React 19 & TypeScript**: Modern, type-safe frontend development.
- **TanStack Start**: Full-stack React framework with server-side rendering (SSR) and server functions.
- **TanStack Router**: Type-safe, file-based routing located in `src/routes/`.
- **TanStack Query (React Query)**: State management for asynchronous data fetching, caching, and synchronization.
- **Tailwind CSS v4**: Utility-first CSS framework integrated via `@tailwindcss/vite` for styling.
- **shadcn/ui & Radix UI**: Accessible, customizable, pre-built UI components located in `src/components/ui/`.
- **Lucide React**: Icon library for clean, consistent iconography.
- **Zod & React Hook Form**: Schema validation and form state management.

---

## Library Usage Rules

### 1. Routing & Pages
- **Library**: `@tanstack/react-router`
- **Rule**: Use file-based routing in `src/routes/`.
- **Rule**: Define route metadata (title, description, etc.) using the `head` property in the route configuration.
- **Rule**: Keep the route tree generated automatically; do not manually edit `src/routeTree.gen.ts`.

### 2. Server Logic & API Calls
- **Library**: `@tanstack/react-start` (`createServerFn`)
- **Rule**: Use `createServerFn` for server-side handlers invoked from the client.
- **Rule**: Put server-only helpers and configuration in files ending with `.server.ts` (e.g., `src/lib/config.server.ts`) to prevent Vite from bundling them into the client.
- **Rule**: Read environment variables inside functions/handlers (especially for Cloudflare Workers compatibility) rather than at the module scope.

### 3. Data Fetching & State
- **Library**: `@tanstack/react-query`
- **Rule**: Use TanStack Query for client-side data fetching, caching, and mutations.
- **Rule**: Wrap the application in `QueryClientProvider` (already configured in `src/routes/__root.tsx`).

### 4. UI Components & Styling
- **Libraries**: `shadcn/ui`, `lucide-react`, `tailwindcss`
- **Rule**: Use pre-built shadcn/ui components from `src/components/ui/`. Do not edit these files directly. If customization is needed, compose them or create new custom components in `src/components/`.
- **Rule**: Use Tailwind CSS classes for all styling. Avoid writing custom CSS in `src/styles.css` unless defining global variables or theme configurations.
- **Rule**: Use `lucide-react` for all icons to maintain visual consistency.

### 5. Forms & Validation
- **Libraries**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Rule**: Use `zod` for schema validation (both client-side forms and server function inputs).
- **Rule**: Use `react-hook-form` with the Zod resolver for managing form state and validation.
