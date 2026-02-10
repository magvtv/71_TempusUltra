# Tempus Ultra

Legal Consultancy & Legal-Tech Advisory in Nairobi, Kenya.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Routing**: [React Router Dom v6](https://reactrouter.com/)
- **State Management**: [TanStack Query v5](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

- `src/components`: Reusable UI components (including shadcn/ui).
- `src/pages`: Main application pages.
- `src/assets`: Local assets like logos and images.
- `src/index.css`: Global styles and Tailwind v4 theme configuration.
- `vite.config.ts`: Vite configuration with Tailwind v4 plugin.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## React 19 Features

This project leverages React 19's latest capabilities:

- **Actions**: Use async functions directly in transitions and forms for simplified data mutations.
- **New Hooks**:
  - `useActionState`: Manage form action state, errors, and pending status automatically.
  - `useFormStatus`: Access parent form status in child components without prop drilling.
  - `useOptimistic`: Update UI optimistically before server responses.
- **Ref as Prop**: Pass `ref` as a normal prop without `forwardRef` in most cases.
- **Document Metadata**: Built-in support for `<title>`, `<meta>`, and stylesheets within components.

## Development Best Practices

Following the upgrade to **React 19**, **Tailwind CSS v4**, and **Vite 7**:

1.  **Tailwind v4 Theme**: Define all brand colors, fonts, and animations in the `@theme` block within `src/index.css`.
2.  **Modern Color Space**: Use `oklch()` for colors for better perceptual consistency and accessibility.
3.  **Vite Integration**: Use the `@tailwindcss/vite` plugin. Avoid legacy config files.
4.  **Type Safety**: Use `React.ComponentProps<"element">` for UI components.
5.  **React 19 Patterns**: Leverage Actions and new hooks (`useActionState`, `useFormStatus`, `useOptimistic`) for forms and async operations.
6.  **Ref Handling**: Pass `ref` as a normal prop instead of using `forwardRef` where possible.
7.  **CSS Spec Compliance**: Keep all `@import` statements at the top of `index.css`.
