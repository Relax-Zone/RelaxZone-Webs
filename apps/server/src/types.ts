import type { Hono } from 'hono';
import type { Context } from 'hono';

// Export the app type
export type AppType = typeof import('./index').default;

// Export route types for better type inference
export type AppContext = Context<{
  Bindings: {
    // Add your environment bindings here if needed
  },
  // Add your custom context types here
}>;
